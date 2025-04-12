"use server";

import { getAuthenticatedUserId } from "@/lib/clerk-auth";
import prisma from "@/lib/prisma";

interface ProjectData {
	projectId: string;
	project: any;
}

export async function saveProjectAction({ projectId, project }: ProjectData) {
	try {
		if (!projectId || !project) {
			throw new Error("projectId and project data are required");
		}

		const userId = await getAuthenticatedUserId();
		if (!userId) {
			throw new Error("Unauthorized");
		}

		const selectedProject = await prisma.project.findFirst({
			where: { id: projectId },
			select: {
				selectedProjectDataId: true,
			},
		});

		if (!selectedProject || !selectedProject.selectedProjectDataId) {
			const newProjectData = await prisma.projectData.create({
				data: {
					data: project,
					projectId,
					version: 1,
				},
				select: { id: true },
			});

			await prisma.project.update({
				where: { id: projectId },
				data: { selectedProjectDataId: newProjectData.id },
			});
		} else {
			await prisma.projectData.update({
				where: { id: selectedProject.selectedProjectDataId },
				data: { data: project },
			});
		}

		return {
			success: true,
			message: `Project ${projectId} saved successfully`,
		};
	} catch (error) {
		console.error("Error saving project:", error);
		return {
			success: false,
			message: error instanceof Error ? error.message : "Unknown error",
		};
	} finally {
		await prisma.$disconnect();
	}
}
