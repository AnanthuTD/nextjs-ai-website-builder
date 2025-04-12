"use server";

import { Block } from "@/components/global/studio-editor";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({
	model: "gemini-1.5-flash-latest",
	generationConfig: {
		responseMimeType: "application/json",
	},
});

export async function convertToBlocks(
	raw: {
		html: string;
		css: string;
	},
): Promise<Block[] | null> {
	const systemInstruction = `
Convert this HTML/CSS into reusable GrapesJS blocks:
HTML: ${raw.html}
Output ONLY a JSON array of blocks with "id", "label", "content".
Include:
- Section blocks (e.g., full header, footer) with placeholders for dynamic content
- Sub-component blocks (e.g., buttons, headings, cards) with placeholders for dynamic content
Each block is a standalone <section>, <div>, or smaller element.
Use placeholders (e.g., {{title}}, {{image}}, {{text}}) instead of specific content to make blocks generic and reusable.
Preserve the original CSS styling for each block.
[
  {"id": "...", "label": "...", "content": "..."},
  ...
]
    `;

	try {
		const response = await model.generateContent(systemInstruction);
		const responseText = response.response.text();

		if (!responseText) {
			console.error("🔴 Empty API response from Gemini");
			return null;
		}

		const cleanResponse = responseText
			.replace(/```json/g, "")
			.replace(/```/g, "")
			.replace(/\s+/g, " ")
			.trim();

		try {
			const blocks: Block[] = JSON.parse(cleanResponse);

			return blocks;
		} catch (parseError) {
			console.error("🔴 JSON Parse Error:", parseError);
			console.error("Original Response:", responseText);
			return null;
		}
	} catch (error) {
		console.error("🔴 Error with Gemini API:", error);
		console.error(
			"Raw Response (if available):",
			error.response?.text?.() || "No response text"
		);
		return null;
	}
}
