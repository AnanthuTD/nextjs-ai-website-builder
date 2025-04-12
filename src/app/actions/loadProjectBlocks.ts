"use server";

import { getAuthenticatedUserId } from "@/lib/clerk-auth";
import prisma from "@/lib/prisma";

interface Block {
  id: string;
  label: string;
  content: string;
}

interface LoadProjectBlocksInput {
  projectDataId: string;
}

export async function loadProjectBlocksAction({ projectDataId }: LoadProjectBlocksInput) {
  try {
    if (!projectDataId) {
      throw new Error("projectId and clerkId are required");
    }

    const clerkId = await getAuthenticatedUserId()

    // Find the user by clerkId
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });
    if (!user) {
      throw new Error("User not found");
    }

    // Load blocks
    const blocks = await prisma.block.findMany({
      where: { projectDataId },
      orderBy: { createdAt: "asc" },
    });

    // Map to Block interface
    const formattedBlocks: Block[] = blocks.map((block) => ({
      id: block.blockId,
      label: block.label,
      content: block.content,
    }));

    return {
      success: true,
      message: `Blocks for project ${projectDataId} loaded successfully`,
      data: formattedBlocks,
    };
  } catch (error) {
    console.error("Error loading project blocks:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
      data: [],
    };
  } 
}