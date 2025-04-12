export interface IChatFlat {
	id: string;
	userId: string;
	message: string;
	refinedPrompt?: boolean;
	isCodeResponse?: boolean;
	isStreaming?: boolean;
}
