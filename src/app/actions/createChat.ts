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
	const clarkId = await getAuthenticatedUserId();

	if (!clarkId) {
		throw new Error("Unauthorized");
	}

	const chat = await prisma.chat.create({
		data,
	});

	return chat;
};
