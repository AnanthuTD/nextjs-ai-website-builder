import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Props {
	prompt: string;
	setPrompt: (prompt: string) => void;
}

export function AiPromptInputArea({ prompt, setPrompt }: Props) {
	const maxLength = 2000;

	return (
		<div className="grid w-full gap-1.5">
			<Label htmlFor="prompt">
				Your prompt: <span style={{ color: "red" }}>*</span>
			</Label>
			<Textarea
				placeholder="Describe what you want your webpage to look like. Don’t worry about grammar—the AI will refine your input later."
				id="prompt"
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				maxLength={maxLength}
				rows={5}
				className="h-[80px]"
			/>
			<div className="text-sm text-gray-500">
				{prompt.length}/{maxLength} characters
			</div>
		</div>
	);
}
