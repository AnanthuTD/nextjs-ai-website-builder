import { Colors } from "@/components/global/ai-modal";
import { HfInference } from "@huggingface/inference";

interface GenerateHtmlCssResponse {
	html: string;
	css: string;
}

export async function generateHtmlCssWithHuggingFace(
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

	const hf = new HfInference(process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN);

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
2. Use semantic HTML5 and modern CSS.
3. Embed all JavaScript within the HTML using a <script> tag in the <body> or <head> as appropriate (no separate JS files or output unless specified).
4. Ensure the webpage is responsive and accessible (e.g., ARIA attributes, keyboard navigation).
5. Include JavaScript for dynamic features (e.g., hover effects, form validation, animations) if specified or implied by the design.
6. Fill in any gaps with appropriate design choices that complement the specification.
7. Output ONLY valid JSON with \`html\` and \`css\` keys. The \`html\` must include any JavaScript within a <script> tag.

**Guidelines:**
- Language: All text content should be in ${language}.
- Colors: Use specified colors if provided; otherwise, choose complementary colors:
  - Primary: ${colors?.primary || "choose"}
  - Secondary: ${colors?.secondary || "choose"}
  - Background: ${colors?.background || "choose"}
  - Text: ${colors?.text || "choose"}
  - Neutral: ${colors?.neutral || "choose"}
  - Accent: ${colors?.accent || "choose"}
- Use Poppins font (Google Fonts) unless otherwise specified.
- Include minimal CSS transitions unless animations are specified.
- JavaScript should be minimal, clean, and embedded within the HTML <script> tag (e.g., for event listeners or DOM manipulation).
- Keep code clean, concise, and well-commented.

**Output:**
{"html": "...", "css": "..."}
**Note:** Return only the raw JSON, no extra text.
`;

		const response = await hf.chatCompletion({
			provider: "sambanova",
			model: "deepseek-ai/DeepSeek-V3-0324",
			messages: [
				{
					role: "user",
					content: systemInstruction,
				},
			],
		});

		const responseText = response.choices[0]?.message?.content;

		console.log("Raw response:", responseText);

		if (!responseText) {
			console.error("🔴 Empty API response");
			return null;
		}

		const cleanResponse = responseText
			.replace(/^.*?(?={)/, "")
			.replace(/```json/g, "")
			.replace(/```/g, "")
			.replace(/\s+/g, " ")
			.trim();

		console.log("Cleaned response:", cleanResponse);

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
