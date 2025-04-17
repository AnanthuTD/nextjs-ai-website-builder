import { NextRequest } from "next/server";
import { streamRefinedPrompt } from "@/services/streamRefinedPrompt";
import { ChatMessage, WebContent } from "@/services/streamRefinedPrompt";
import prisma from "@/lib/prisma";
import { getAuthenticatedUserId } from "@/lib/clerk-auth";

export async function POST(request: NextRequest) {
	try {
		const { userPrompt, chatHistory, content, projectId } =
			await request.json();

		if (!userPrompt || typeof userPrompt !== "string") {
			return new Response(JSON.stringify({ error: "userPrompt is required" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		const userId = await getAuthenticatedUserId()
		if (!userId) {
			return new Response(JSON.stringify({ error: "clerkId is required" }), {
				status: 401,
				headers: { "Content-Type": "application/json" },
			});
		}

		// Save user message to Chat
		if (projectId) {
			await prisma.chat.create({
				data: {
					userId,
					projectId,
					message: userPrompt,
					isAi: false,
          aiModel: ""
				},
			});
		}

		const streamResult = await streamRefinedPrompt(
			userPrompt,
			chatHistory as ChatMessage[],
			content as WebContent
		);

		if (!streamResult) {
			return new Response(
				JSON.stringify({ error: "Failed to generate stream" }),
				{
					status: 500,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		let fullText = "";
		const encoder = new TextEncoder();
		const readableStream = new ReadableStream({
			async start(controller) {
				try {
					for await (const chunk of streamResult) {
						const text = await chunk.text();
						if (text) {
							fullText += text;
							controller.enqueue(encoder.encode(text));
						}
					}
					// Save AI response to Chat
					if (projectId && fullText) {
						await prisma.chat.create({
							data: {
								projectId,
								message: fullText,
								isAi: true,
								aiModel: "gemini-1.5-flash-latest",
                isRefinedPrompt: true,
							},
						});
					}
					controller.close();
				} catch (error) {
					console.error("Stream error:", error);
					controller.error(error);
				} finally {
					await prisma.$disconnect();
				}
			},
		});

		return new Response(readableStream, {
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Transfer-Encoding": "chunked",
				"X-Content-Type-Options": "nosniff",
			},
		});
	} catch (error) {
		console.error("API error:", error);
		return new Response(
			JSON.stringify({
				error: error instanceof Error ? error.message : "Unknown error",
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
