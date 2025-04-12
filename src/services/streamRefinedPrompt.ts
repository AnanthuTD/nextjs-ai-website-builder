import {
	GenerateContentStreamResult,
	GoogleGenerativeAI,
} from "@google/generative-ai";

export interface ChatMessage {
	role: string;
	content: string;
}

export interface WebContent {
	html: string;
	css: string;
}

export async function streamRefinedPrompt(
	userPrompt: string,
	chatHistory: ChatMessage[] = [],
	content?: WebContent
): Promise<GenerateContentStreamResult["stream"] | null> {
	if (!userPrompt?.trim()) {
		console.error("🔴 Prompt is empty");
		return null;
	}

	const apiKey = process.env.GEMINI_API_KEY; // Use process.env for Next.js
	if (!apiKey) {
		console.error("🔴 GEMINI_API_KEY is not set");
		return null;
	}

	try {
		const genAI = new GoogleGenerativeAI(apiKey);
		const model = genAI.getGenerativeModel({
			model: "gemini-1.5-flash-latest",
		});

		const historyContext =
			chatHistory.length > 0
				? `**Conversation Context:**\n${chatHistory
						.map(
							(msg) =>
								`${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`
						)
						.join("\n")}\n\n`
				: "";

		const existingContent = content?.html
			? `**Existing HTML/CSS Content:**\n\n` +
			  `HTML Structure:\n${content.html.substring(0, 1000)}${
					content.html.length > 1000 ? "... [truncated]" : ""
			  }\n\n` +
			  `CSS Styles:\n${content.css.substring(0, 500)}${
					content.css.length > 500 ? "... [truncated]" : ""
			  }\n\n` +
			  `Note: Analyze the existing content and provide specific modification instructions.`
			: "No existing content provided";

		const systemInstruction = `
You are an expert web design assistant tasked with creating a detailed design specification for a webpage based on the user's request and any existing content. Consider the conversation context and existing content below.

${historyContext}

${existingContent}

**Current User Request:**
---
${userPrompt}
---

**Your Task:**
- Analyze the user's request and existing content (if provided).
- Produce a structured design specification that outlines the webpage's purpose, structure, and style.
- If existing content is provided, include specific modification instructions for each section.

**Output Format:**
**Design Specification:**

**Overall Goal/Purpose:** [Concise statement of the webpage's purpose based on the user's request]

**Header:** - [Specific design requirements or modifications, e.g., background, text style, animations]

**Navigation:** - [Requirements or modifications, e.g., layout, menu items, responsive behavior]

**Hero Section:** - [Requirements or modifications, e.g., imagery, text, buttons]

**Main Content Sections:** - [Section Name]: [Requirements or modifications, e.g., layout, content type]
- [Section Name]: [Requirements or modifications]

**Call-to-Action:** - [Requirements or modifications, e.g., button styles, placement]

**Footer:** - [Requirements or modifications, e.g., content, styling]

**Additional Requirements:** - [e.g., color scheme, accessibility features, responsiveness]

**Guidelines:**
- Be specific and actionable (e.g., "Use a dark stone texture background" instead of "Improve the background").
- If modifying existing content, specify what to change (e.g., "Add a fade-in animation to the existing header").
- Do not generate code—just provide conceptual design requirements.
- Ensure suggestions align with the user's intent and enhance engagement.
`;

		const generationConfig = {
			temperature: 0.5,
			topP: 0.85,
			maxOutputTokens: 2500,
		};

		const stream = await model.generateContentStream({
			contents: [
				{
					role: "user",
					parts: [{ text: systemInstruction }],
				},
			],
			generationConfig,
		});

		return stream.stream;
	} catch (error) {
		console.error("🔴 API Error:", error);
		throw error;
	}
}
