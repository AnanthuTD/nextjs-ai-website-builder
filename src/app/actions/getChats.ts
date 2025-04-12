"use server";

import { getAuthenticatedUserId } from "@/lib/clerk-auth";
import prisma from "@/lib/prisma";

export const getChatsAction = async ({ projectId }: { projectId: string }) => {
	const clarkId = await getAuthenticatedUserId();

	if (!clarkId) {
		throw new Error("Unauthorized");
	}

	const chats = await prisma.chat.findMany({
		where: { projectId },
		orderBy: { createdAt: "desc" },
	});

	return chats;
};
