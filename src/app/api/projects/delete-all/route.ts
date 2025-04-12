import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE() {
  try {
    await prisma.project.deleteMany({});
    return NextResponse.json({ message: "All projects deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete all projects" },
      { status: 500 }
    );
  }
}