import { Colors } from "@/components/global/ai-modal";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
	process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
);
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
		js?: string;
	},
	language: string = "English",
	colors: Colors = {
		primary: "",
		secondary: "",
		background: "",
		text: "",
		neutral: "",
		accent: "",
	}
): Promise<GenerateHtmlCssResponse | null> {
	if (!prompt?.trim()) {
		console.error("🔴 Prompt is empty");
		return null;
	}

	try {
		const hasExistingContent = content?.html;

		const existingContent = hasExistingContent
			? `**Existing Code:**\nHTML:\n${content.html}\nCSS:\n${
					content.css
			  }\nJavaScript (if any, embedded in HTML or separate):\n${
					content.js || "None"
			  }`
			: "No existing content - generate from scratch";

		const systemInstruction = `
You are a web developer tasked with creating or modifying a webpage based on a detailed design specification provided in the prompt. The prompt contains specific requirements for the structure, style, and functionality of the page.

**Input:**
${existingContent}

**Design Specification:**
${prompt}

**Your Task:**
${
	hasExistingContent
		? "Modify the existing HTML and CSS to fully incorporate the requirements specified in the design specification. Preserve the existing structure, style, and functionality where not explicitly changed. Embed any JavaScript within the HTML in a <script> tag."
		: "Generate a new webpage from scratch that accurately implements every aspect of the design specification, including HTML, CSS, and JavaScript embedded in the HTML."
}

**Requirements:**
1. Implement all details provided in the specification (e.g., backgrounds, fonts, layouts, interactions).
2. Use semantic HTML5 and Tailwind CSS via CDN (<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>) for styling whenever possible, applying utility classes to achieve the design.
3. Use raw CSS only when Tailwind cannot meet specific requirements (e.g., complex animations, custom keyframes, or unsupported styles).
4. Embed all JavaScript within the HTML using a <script> tag in the <body> or <head> as appropriate (no separate JS files or output unless specified).
5. Ensure the webpage is responsive and accessible (e.g., ARIA attributes, keyboard navigation).
6. Include JavaScript for dynamic features (e.g., hover effects, form validation, animations) if specified or implied by the design.
7. Fill in any gaps with appropriate design choices that complement the specification.
8. Output ONLY valid JSON with \`html\` and \`css\` keys. The \`html\` must include the Tailwind CDN and any JavaScript within a <script> tag. The \`css\` key contains raw CSS only when necessary.
9. Do not include any comments in the generated HTML, CSS, or JavaScript.

**Guidelines:**
- Language: All text content should be in ${language}.
- Colors: Use specified colors if provided, mapping them to Tailwind classes (e.g., #FFFFFF to bg-white, #333333 to text-gray-800); otherwise, choose complementary Tailwind classes:
  - Primary: ${colors?.primary || "choose"} (e.g., buttons, headers)
  - Secondary: ${colors?.secondary || "choose"} (e.g., highlights)
  - Background: ${colors?.background || "choose"} (e.g., page background)
  - Text: ${colors?.text || "choose"} (e.g., body text)
  - Neutral: ${colors?.neutral || "choose"} (e.g., borders)
  - Accent: ${colors?.accent || "choose"} (e.g., small highlights)
- Use Poppins font (Google Fonts) unless otherwise specified, via <link href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'>.
- Include minimal Tailwind transitions (e.g., transition duration-300) unless animations are specified, then use raw CSS for custom animations.
- JavaScript should be minimal, clean, and embedded within the HTML <script> tag (e.g., for event listeners or DOM manipulation).
- Keep code clean and concise.

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
