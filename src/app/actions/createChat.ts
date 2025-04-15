"use server";

import { getAuthenticatedUserId } from "@/lib/clerk-auth";
import prisma from "@/lib/prisma";
import { Prisma } from "../generated/prisma";

export const createChatAction = async (
	data:
		| (Prisma.Without<Prisma.ChatCreateInput, Prisma.ChatUncheckedCreateInput> &
				Prisma.ChatUncheckedCreateInput)
		| (Prisma.Without<Prisma.ChatUncheckedCreateInput, Prisma.ChatCreateInput> &
				Prisma.ChatCreateInput)
) => {
	const clerkId = await getAuthenticatedUserId();

	if (!clerkId) {
		throw new Error("Unauthorized");
	}

	const user = await prisma.user.findUnique({ where: { clerkId } });
	if (!user) {
		return new Response(JSON.stringify({ error: "User not found" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}

	const chat = await prisma.chat.create({
		data: {
			...data,
			userId: data.isAi ? undefined : user.id,
		},
	});

	return chat;
};
