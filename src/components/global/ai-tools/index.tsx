"use client";

import React, { useState, useRef, useEffect } from "react";
import { IChatFlat } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CircleStopIcon, SendHorizontal } from "lucide-react";
import ChatFlat from "../chat-box/ChatFlat";
import { generateHtmlCssWithHuggingFace } from "@/services/huggingface";
import { convertToBlocks } from "@/services/convertToBlocks";
import { Block } from "../studio-editor";
import { Colors } from "../ai-modal";
import { generateHtmlCss } from "@/services/generateHtmlCss";
import Loader from "../loader";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";

interface Props {
	initialPrompt: string;
	onUpdateContent: ({ css, html }: { html: string; css: string }) => void;
	initialContent?: { html: string; css: string };
	updateAiGeneratedBlock: (blocks: Block[]) => void;
	language: string;
	colors: Colors | null;
	firstTime: boolean;
	projectId?: string;
}

const AiChatBox = ({
	initialPrompt = "",
	onUpdateContent,
	initialContent = { css: "", html: "" },
	updateAiGeneratedBlock,
	colors,
	language,
	firstTime = true,
	projectId,
}: Props) => {
	const { userId: clerkId } = useAuth(); // Replace static userId
	const [chats, setChats] = useState<IChatFlat[]>([]);
	const [message, setMessage] = useState("");
	const [isGenerating, setIsGenerating] = useState(false);
	const chatContainerRef = useRef<HTMLDivElement>(null);
	const [content, setContent] = useState(initialContent);
	const [selectedModel, setSelectedModel] = useState<"gimini" | "deepseek">(
		"deepseek"
	);

	const handleGenerateBlocks = async () => {
		if (!content.html) return;

		setIsGenerating(true);
		try {
			const blocks = await convertToBlocks(content);
			console.log("Generated blocks:", blocks);

			if (!blocks) {
				toast.error("No blocks were returned by the AI!");
				return;
			}

			updateAiGeneratedBlock(blocks);
			toast.success("Blocks generated successfully");
		} catch (error) {
			console.error("Block generation error:", error);
			toast.error("Failed to generate blocks");
		} finally {
			setIsGenerating(false);
		}
	};

	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop =
				chatContainerRef.current.scrollHeight;
		}
	}, [chats]);

	useEffect(() => {
		if (!firstTime || !clerkId) return;

		if (initialPrompt.trim()) {
			const aiMessage = {
				id: crypto.randomUUID(),
				message: "How would you like me to help with this project?",
				userId: "ai",
				refinedPrompt: false,
			};
			const userMessage = {
				id: crypto.randomUUID(),
				message: initialPrompt,
				userId: clerkId,
			};
			setChats([userMessage, aiMessage]);
			handleSendMessage(initialPrompt);
		}
	}, [initialPrompt, firstTime, clerkId]);

	const handleGenerateCode = async (prompt: string) => {
		if (!prompt.trim()) return;

		setIsGenerating(true);
		try {
			const generateContentFunc =
				selectedModel === "gimini"
					? generateHtmlCss
					: generateHtmlCssWithHuggingFace;
			const response = await generateContentFunc(
				prompt,
				content,
				language,
				colors
			);
			console.log("AI generated:", response);
			if (response?.html) {
				setContent(response);
				onUpdateContent(response);
				setChats((prev) => [
					...prev,
					{
						id: crypto.randomUUID(),
						message:
							"Here's the generated code based on your request. Let me know if you'd like any changes!",
						userId: "ai",
						isCodeResponse: true,
					},
				]);
				toast.success("Code generated successfully");
			} else {
				toast.error("Failed to generate code");
			}
		} catch (error) {
			console.error("Code generation error:", error);
			toast.error("Failed to generate code");
		} finally {
			setIsGenerating(false);
		}
	};

	const handleSendMessage = async (prompt: string) => {
		if (!prompt.trim() || isGenerating || !clerkId) {
			if (!clerkId) toast.error("User not authenticated");
			return;
		}

		const newUserMessage = {
			id: crypto.randomUUID(),
			message: prompt,
			userId: clerkId,
		};

		setChats((prev) => [...prev, newUserMessage]);
		setMessage("");
		setIsGenerating(true);

		try {
			if (!content.html) {
				// Stream from API route
				const chatHistory = chats.map((chat) => ({
					role: chat.userId === clerkId ? "user" : "assistant",
					content: chat.message,
				}));

				const response = await fetch("/api/stream-prompt", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
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
				setChats((prev) => [
					...prev,
					{
						id: chatId,
						message: "",
						userId: "ai",
						refinedPrompt: true,
						isStreaming: true,
					},
				]);

				const decoder = new TextDecoder();
				while (true) {
					const { done, value } = await reader.read();
					if (done) break;

					const chunk = decoder.decode(value, { stream: true });
					aiResponse += chunk;
					setChats((prev) =>
						prev.map((chat) =>
							chat.id === chatId
								? { ...chat, message: aiResponse, isStreaming: true }
								: chat
						)
					);
				}

				// Streaming finished
				setChats((prev) =>
					prev.map((chat) =>
						chat.id === chatId ? { ...chat, isStreaming: false } : chat
					)
				);

				if (!aiResponse) {
					toast.error("No response received from AI");
					setIsGenerating(false);
					return;
				}

				toast.success("Design specification generated");
			} else {
				await handleGenerateCode(prompt);
			}
		} catch (error) {
			console.error("Failed to send message to AI:", error);
			toast.error(
				error instanceof Error ? error.message : "Failed to get AI response"
			);
			setChats((prev) =>
				prev.map((chat) =>
					chat.isStreaming ? { ...chat, isStreaming: false } : chat
				)
			);
		} finally {
			setIsGenerating(false);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage(message);
		}
	};

	return (
		<div className="rounded-xl grow flex flex-col gap-y-2 p-3 min-h-full justify-between text-white">
			<div className="flex justify-between items-center">
				<h3 className="text-lg font-semibold">Design Assistant</h3>
			</div>

			<div
				ref={chatContainerRef}
				className="flex flex-col gap-y-2 px-1 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-indigo-100"
			>
				{chats.map((chat) => (
					<ChatFlat
						onGenerateCode={handleGenerateCode}
						chat={chat}
						key={chat.id}
						own={chat.userId === clerkId}
						isGenerating={
							isGenerating &&
							chat.userId === "ai" &&
							chat.id === chats[chats.length - 1]?.id
						}
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
					onClick={() => {
						if (!(isGenerating || !content.html)) handleGenerateBlocks();
					}}
					variant="outline"
					className={`bg-gray-500 text-white hover:bg-gray-600 border-none ${
						!(isGenerating || !content.html)
							? "hover:cursor-pointer"
							: "hover:cursor-not-allowed"
					}`}
				>
					Generate Blocks (AI)
				</Badge>
				<Select
					value={selectedModel}
					onValueChange={(value: "gimini" | "deepseek") =>
						setSelectedModel(value)
					}
				>
					<SelectTrigger className="w-[100px] bg-gray-700 text-white border-gray-500">
						<SelectValue placeholder="Select Model" />
					</SelectTrigger>
					<SelectContent className="bg-gray-700 text-white border-gray-500">
						<SelectItem value="gimini">Gemini</SelectItem>
						<SelectItem value="deepseek">Deepseek</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="flex gap-2 items-end">
				<div className="flex-grow">
					<Textarea
						value={message}
						rows={1}
						className="bg-white focus-visible:ring-indigo-300 resize-none pr-24 text-black"
						onChange={(e) => setMessage(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder="Type your message..."
						disabled={isGenerating}
					/>
				</div>
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
