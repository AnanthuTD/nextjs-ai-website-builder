'use server'

import { Colors } from "@/components/global/ai-modal";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({
	model: "gemini-1.5-flash-latest",
	generationConfig: {
		responseMimeType: "application/json",
	},
});

interface GenerateHtmlCssResponse {
	html: string;
	css: string;
}

export async function generateHtmlCss(
	prompt: string,
	content?: {
		html: string;
		css: string;
	},
	language: string = "English",
	colors: Colors = ({
		primary: "",
		secondary: "", 
		background: "", 
		text: "",
		neutral: "",
		accent: "", 
	})
): Promise<GenerateHtmlCssResponse | null> {
	if (!prompt?.trim()) {
		console.error("🔴 Prompt is empty");
		return null;
	}

	try {
		const hasExistingContent = content?.html;

		const existingContent = hasExistingContent
			? `**Existing Code:**\nHTML:\n${content.html}\nCSS:\n${content.css}`
			: "No existing content - generate from scratch";

		const systemInstruction = `
You are a web developer creating a small, beautiful webpage. ${
			hasExistingContent
				? "Modify the existing code minimally per the prompt. Return the full modified HTML and CSS."
				: "Generate a small, elegant webpage for: " + prompt
		}

**Requirements:**
1. ${
			hasExistingContent
				? "Modify per: " + prompt + ". Keep unchanged parts intact."
				: "Create per: " + prompt
		}
2. Output ONLY valid JSON with \`html\` and \`css\` keys
3. Use semantic HTML5 and modern CSS
4. Keep it small: header, hero, one content section, footer with newsletter
5. Ensure mobile responsiveness
6. Design: simple, elegant, beautiful, no complex animations

**Guidelines:**
- Use Poppins font (Google Fonts)
- Language: All text content should be in ${language}
- Colors: Use these if provided; otherwise, choose colors that complements the purpose of the page:
  - Primary: ${colors?.primary || "choose"} (e.g., buttons, headers)
  - Secondary: ${
		colors?.secondary || "choose"
	} (e.g., highlights, secondary buttons)
  - Background: ${colors?.background || "choose"} (e.g., page background)
  - Text: ${colors?.text || "choose"} (e.g., body text)
  - Neutral: ${colors?.neutral || "choose"} (e.g., borders, subtle backgrounds)
  - Accent: ${colors?.accent || "choose"} (e.g., small highlights)
- Minimal transitions
- Keep code concise

**Input:**
${existingContent}

**Output:**
{"html": "...", "css": "..."}
**Note:** Return only the raw JSON, no extra text.
`;

		const result = await model.generateContent(systemInstruction);
		const response = result.response;

		if (!response?.text()) {
			console.error("🔴 Empty API response");
			return null;
		}

		const responseText = response.text();

		const cleanResponse = responseText
			.replace(/```json/g, "")
			.replace(/```/g, "")
			.replace(/\s+/g, " ")
			.trim();

		try {
			const jsonResult: GenerateHtmlCssResponse = JSON.parse(cleanResponse);

			if (!jsonResult.html || !jsonResult.css) {
				throw new Error("Missing html/css in response");
			}

			return {
				html: jsonResult.html,
				css: jsonResult.css,
			};
		} catch (parseError) {
			console.error("🔴 JSON Parse Error:", parseError);
			console.error("Original Response:", responseText);
			return null;
		}
	} catch (error) {
		console.error("🔴 API Error:", error);
		return null;
	}
}
