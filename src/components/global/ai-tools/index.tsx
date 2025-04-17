"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { CircleStopIcon, SendHorizontal } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";
import ChatFlat from "../chat-box/ChatFlat";
import Loader from "../loader";
import { convertToBlocks } from "@/services/convertToBlocks";
import { Block } from "../studio-editor";
import { Colors } from "../ai-modal";
import { IChatFlat } from "@/types";
import { getChatsAction } from "@/app/actions/getChats";
import { createChatAction } from "@/app/actions/createChat";
import { generateHtmlCss } from "@/services/generateHtmlCss";
import { generateHtmlCssWithHuggingFace } from "@/services/huggingface";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Content {
	html: string;
	css: string;
	js: string;
}

interface Props {
	initialPrompt?: string;
	onUpdateContent: (content: Content) => void;
	updateAiGeneratedBlock: (blocks: Block[]) => void;
	language: string;
	colors: Colors | null;
	projectId?: string;
	editor: any;
}

type AiModel = "gemini" | "deepseek";

const AiChatBox: React.FC<Props> = ({
	initialPrompt = "",
	onUpdateContent,
	updateAiGeneratedBlock,
	language,
	colors,
	projectId,
	editor,
}) => {
	const { userId: clerkId } = useAuth();
	const [chats, setChats] = useState<IChatFlat[]>([]);
	const [message, setMessage] = useState("");
	const [isGenerating, setIsGenerating] = useState(false);
	const [content, setContent] = useState<Content>({
		html: "",
		css: "",
		js: "",
	});
	const [selectedModel, setSelectedModel] = useState<AiModel>("deepseek");
	const [isEditorReady, setEditorReady] = useState(false);
	const [firstTime, setFirstTime] = useState(true);
	const [isLoadingChats, setIsLoadingChats] = useState(false);
	const chatContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleReady = (editor: any) => {
			console.log("on ready");
			console.log(editor.getHtml());
			setEditorReady(true);

			let html = editor.getHtml();
			const css = editor.getCss();
			const js = editor.getJs();

			// Process HTML content
			if (html) {
				const innerContent = html
					.replace(/<body\s*>/i, "")
					.replace(/<\/body\s*>/i, "")
					.trim();

				const hasHtmlTags = /<[a-z][\s\S]*>/i.test(innerContent);

				if (!hasHtmlTags) {
					html = "";
				} else {
					html = innerContent;
				}
			} else {
				html = "";
			}

			setContent({
				html,
				css,
				js,
			});
		};

		editor.onReady(handleReady);
	}, [editor]);

	useEffect(() => {
		if (chatContainerRef.current) {
			requestAnimationFrame(() => {
				chatContainerRef.current!.scrollTop =
					chatContainerRef.current!.scrollHeight;
			});
		}
	}, [chats]);

	useEffect(() => {
		if (
			!firstTime ||
			!clerkId ||
			!initialPrompt.trim() ||
			!projectId ||
			!isEditorReady
		)
			return;

		const initializeChat = async () => {
			setFirstTime(false);
			setIsLoadingChats(true);
			try {
				const fetchedChats = await getChatsAction({ projectId });
				console.log("Fetched chats: ", fetchedChats);
				setChats(fetchedChats);
				setIsLoadingChats(false);

				if (fetchedChats.length) return;

				const userMessage: IChatFlat = {
					id: crypto.randomUUID(),
					message: initialPrompt,
					userId: clerkId,
					isAi: false,
					projectId,
					createdAt: new Date(),
				};
				const aiMessage: IChatFlat = {
					id: crypto.randomUUID(),
					message: "How would you like me to help with this project?",
					userId: null,
					isAi: true,
					projectId,
					createdAt: new Date(),
				};

				setChats([aiMessage, userMessage]);
				await handleSendMessage(initialPrompt, true);
			} catch (error) {
				console.error(error);
				toast.error("Unknown error occurred!");
			}
		};
		initializeChat();
	}, [firstTime, clerkId, initialPrompt, projectId, isEditorReady]);

	const generateBlocks = useCallback(async () => {
		if (!content.html || isGenerating) return;

		setIsGenerating(true);
		try {
			const blocks = await convertToBlocks(content);
			if (!blocks?.length) {
				throw new Error("No blocks generated");
			}

			updateAiGeneratedBlock(blocks);
			toast.success("Blocks generated successfully");
		} catch (error) {
			console.error("Block generation error:", error);
			toast.error("Failed to generate blocks");
		} finally {
			setIsGenerating(false);
		}
	}, [content, updateAiGeneratedBlock, isGenerating]);

	const generateCode = useCallback(
		async (prompt: string) => {
			if (!prompt.trim() || !projectId || isGenerating) return;

			createChatAction({
				projectId,
				message: prompt,
				isAi: false,
				aiModel: "",
			});

			setIsGenerating(true);
			try {
				const generateContentFunc =
					selectedModel === "gemini"
						? generateHtmlCss
						: generateHtmlCssWithHuggingFace;
				const response = await generateContentFunc(
					prompt,
					content,
					language,
					colors
				);

				if (!response?.html) {
					throw new Error("No code generated");
				}

				setContent(response);
				onUpdateContent(response);

				const newChat = await createChatAction({
					message:
						"Here's the generated code based on your request. Let me know if you'd like any changes!",
					aiModel: selectedModel,
					isAi: true,
					projectId,
					createdAt: new Date(),
				});

				setChats((prev) => [...prev, newChat]);
				toast.success("Code generated successfully");
			} catch (error) {
				console.error("Code generation error:", error);
				toast.error("Failed to generate code");
			} finally {
				setIsGenerating(false);
			}
		},
		[
			selectedModel,
			content,
			language,
			colors,
			projectId,
			onUpdateContent,
			isGenerating,
		]
	);

	const handleSendMessage = useCallback(
		async (prompt: string, initial: boolean = false) => {
			if (!prompt.trim() || isGenerating || !clerkId || !projectId) {
				if (!clerkId) toast.error("User not authenticated");
				if (!projectId) toast.error("Project ID is required");
				return;
			}

			const newUserMessage: IChatFlat = {
				id: crypto.randomUUID(),
				message: prompt,
				userId: clerkId,
				isAi: false,
				projectId,
				createdAt: new Date(),
			};

			setChats((prev) => [...prev, newUserMessage]);
			setMessage("");

			console.log(content)

			if (content.html && !initial) {
				await generateCode(prompt);
			} else {
				const streamResponse = async () => {
					setIsGenerating(true);
					try {
						const chatHistory = [...chats, newUserMessage].map((chat) => ({
							role: chat.isAi ? "assistant" : "user",
							content: chat.message,
						}));

						const response = await fetch("/api/stream-prompt", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								userPrompt: prompt,
								chatHistory,
								content,
								clerkId,
								projectId,
							}),
						});

						if (!response.ok) {
							const errorData = await response.json();
							throw new Error(errorData.error || "Failed to fetch stream");
						}

						const reader = response.body?.getReader();
						if (!reader) {
							throw new Error("No response body");
						}

						let aiResponse = "";
						const chatId = crypto.randomUUID();
						setChats((prevChats) => [
							...prevChats,
							{
								id: chatId,
								message: "",
								isStreaming: true,
								isAi: true,
								aiModel: selectedModel,
								projectId,
								createdAt: new Date(),
								userId: null,
								isRefinedPrompt: true,
							},
						]);

						const decoder = new TextDecoder();
						while (true) {
							const { done, value } = await reader.read();
							if (done) break;

							const chunk = decoder.decode(value, { stream: true });
							aiResponse += chunk;
							setChats((prevChats) =>
								prevChats.map((chat) =>
									chat.id === chatId
										? { ...chat, message: aiResponse, isStreaming: true }
										: chat
								)
							);
						}

						setChats((prevChats) =>
							prevChats.map((chat) =>
								chat.id === chatId ? { ...chat, isStreaming: false } : chat
							)
						);

						if (!aiResponse) {
							throw new Error("No response received from AI");
						}

						toast.success("Design specification generated");
					} catch (error) {
						console.error("Streaming error:", error);
						toast.error(
							error instanceof Error
								? error.message
								: "Failed to get AI response"
						);
						setChats((prevChats) =>
							prevChats.map((chat) =>
								chat.isStreaming ? { ...chat, isStreaming: false } : chat
							)
						);
					} finally {
						setIsGenerating(false);
					}
				};

				await streamResponse();
			}
		},
		[
			clerkId,
			projectId,
			isGenerating,
			content,
			generateCode,
			chats,
			selectedModel,
		]
	);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage(message);
		}
	};

	if (!isEditorReady || isLoadingChats) return <div>Loading...</div>;

	return (
		<div className="flex flex-col gap-y-2 p-3 min-h-full justify-between text-white rounded-xl">
			<h3 className="text-lg font-semibold">Design Assistant</h3>

			<div
				ref={chatContainerRef}
				className="flex flex-col gap-y-2 px-1 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-indigo-100"
			>
				{chats.map((chat, index) => (
					<ChatFlat
						key={chat.id}
						chat={chat}
						own={!!chat?.userId}
						onGenerateCode={generateCode}
						isGenerating={
							isGenerating &&
							chat.isAi &&
							chat.id === chats[chats.length - 1]?.id
						}
						showGenerate={chat.isRefinedPrompt}
					/>
				))}
				{isGenerating && (
					<div className="flex gap-2 items-center text-gray-400 p-2">
						<Loader state={isGenerating} className="self-baseline" />
						<span>Generating...</span>
					</div>
				)}
			</div>

			<div className="flex items-center gap-2">
				<Badge
					onClick={generateBlocks}
					variant="outline"
					className={`bg-gray-500 text-white hover:bg-gray-600 border-none ${
						isGenerating || !content.html
							? "cursor-not-allowed"
							: "cursor-pointer"
					}`}
				>
					Generate Blocks (AI)
				</Badge>
				<Select value={selectedModel} onValueChange={setSelectedModel}>
					<SelectTrigger className="w-[100px] bg-gray-700 text-white border-gray-500">
						<SelectValue placeholder="Select Model" />
					</SelectTrigger>
					<SelectContent className="bg-gray-700 text-white border-gray-500">
						<SelectItem value="gemini">Gemini</SelectItem>
						<SelectItem value="deepseek">Deepseek</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="flex gap-2 items-end">
				<Textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="Type your message..."
					disabled={isGenerating}
					rows={1}
					className={`flex-grow bg-white focus-visible:ring-indigo-300 resize-none pr-24 text-black ${
						isGenerating ? "opacity-50 cursor-not-allowed" : ""
					}`}
				/>
				{isGenerating ? (
					<CircleStopIcon className="text-white" />
				) : (
					<Button
						onClick={() => handleSendMessage(message)}
						variant="default"
						size="icon"
						className="bg-indigo-500 hover:bg-indigo-600 h-10 w-10"
						disabled={!message.trim() || isGenerating}
					>
						<SendHorizontal size={18} />
					</Button>
				)}
			</div>
		</div>
	);
};

export default AiChatBox;
