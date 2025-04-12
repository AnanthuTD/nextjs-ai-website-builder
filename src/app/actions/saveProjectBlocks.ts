"use server";

import { getAuthenticatedUserId } from "@/lib/clerk-auth";
import prisma from "@/lib/prisma";

interface Block {
  id: string;
  label: string;
  content: string;
}

interface SaveProjectBlocksInput {
  projectDataId: string;
  blocks: Block[];
}

export async function saveProjectBlocksAction({ projectDataId, blocks }: SaveProjectBlocksInput) {
  try {
    const clerkId = await getAuthenticatedUserId()

    if (!projectDataId) {
      throw new Error("projectDataId and clerkId are required");
    }
    if (!Array.isArray(blocks)) {
      throw new Error("blocks must be an array");
    }

    // Find the user by clerkId
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });
    if (!user) {
      throw new Error("User not found");
    }

    // Use transaction to replace all blocks atomically
    await prisma.$transaction([
      // Delete existing blocks for this project
      prisma.block.deleteMany({
        where: { projectDataId },
      }),
      // Create new blocks
      prisma.block.createMany({
        data: blocks.map((block) => ({
          projectDataId,
          blockId: block.id,
          label: block.label,
          content: block.content,
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
      }),
    ]);

    return {
      success: true,
      message: `Blocks for project ${projectDataId} saved successfully`,
    };
  } catch (error) {
    console.error("Error saving project blocks:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  } 
}