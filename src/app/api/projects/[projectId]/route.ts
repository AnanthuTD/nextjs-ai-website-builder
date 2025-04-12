import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
	request: Request,
	{ params }: { params: { projectId: string } }
) {
	try {
		const project = await prisma.project.findUnique({
			where: { id: params.projectId },
		});
		if (!project) {
			return NextResponse.json({ error: "Project not found" }, { status: 404 });
		}
		return NextResponse.json(project);
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{ error: "Failed to fetch project" },
			{ status: 500 }
		);
	}
}

export async function PATCH(
	request: Request,
	{ params }: { params: { projectId: string } }
) {
	try {
		const { name } = await request.json();
		const project = await prisma.project.update({
			where: { id: params.projectId },
			data: { name },
		});
		return NextResponse.json(project);
	} catch (error) {
		console.error(error)

		return NextResponse.json(
			{ error: "Failed to update project" },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	request: Request,
	{ params }: { params: { projectId: string } }
) {
	try {
		await prisma.project.delete({
			where: { id: params.projectId },
		});
		return NextResponse.json({ message: "Project deleted" });
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{ error: "Failed to delete project" },
			{ status: 500 }
		);
	}
}
