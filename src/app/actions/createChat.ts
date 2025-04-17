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
	const userId = await getAuthenticatedUserId();

	if (!userId) {
		throw new Error("Unauthorized");
	}

	const chat = await prisma.chat.create({
		data: {
			...data,
			userId: data.isAi ? undefined : userId,
		},
	});

	return chat;
};
