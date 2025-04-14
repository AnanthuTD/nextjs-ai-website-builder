"use server";

import prisma from "@/lib/prisma";

export async function checkSubdomain(
	subdomain: string,
	projectId?: string
): Promise<boolean> {
	try {
		const existingSite = await prisma.publishedSite.findUnique({
			where: { subdomain },
		});
		if (!existingSite) return true;
		if (existingSite.projectId === projectId) return true;
		return false;
	} catch (error) {
		console.error("Error checking subdomain:", error);
		throw new Error("Failed to check subdomain availability");
	}
}
