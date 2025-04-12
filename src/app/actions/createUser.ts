import prisma from "@/lib/prisma";

export const createUser = async (clerkId: string) => {
	if (!clerkId) return;

	await prisma.user.upsert({
		where: { clerkId },
		create: { clerkId },
		update: {},
	});
};
