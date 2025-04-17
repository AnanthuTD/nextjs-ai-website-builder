"use server";

import { getAuthenticatedUserId } from "@/lib/clerk-auth";
import prisma from "@/lib/prisma";

interface LoadProjectInput {
	projectId: string;
}

export async function loadProjectAction({ projectId }: LoadProjectInput) {
	try {
		if (!projectId) {
			throw new Error("projectId is required");
		}

		const project = await prisma.project.findUnique({
			where: { id: projectId },
			include: {
				selectedProjectData: true,
			},
		});

		// Check if project exists and belongs to the user
		if (!project) {
			throw new Error("Project not found");
		}

		const userId = await getAuthenticatedUserId();

		if (project.userId !== userId) {
			throw new Error("Unauthorized access to project");
		}

		const projectData = project.selectedProjectData?.data || null;

		return {
			success: true,
			message: `Project ${projectId} loaded successfully`,
			data: projectData,
			projectDataId: project.selectedProjectDataId,
		};
	} catch (error) {
		console.error("Error loading project:", error);
		return {
			success: false,
			message: error instanceof Error ? error.message : "Unknown error",
			data: null,
		};
	}
}
