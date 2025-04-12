import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/clerk-auth";

export async function GET() {
	const userId = await requireAuth();
	if (userId instanceof NextResponse) return userId;

	try {
		const projects = await prisma.project.findMany({
			orderBy: { createdAt: "desc" },
			where: { userId },
		});
		return NextResponse.json(projects);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch projects" },
			{ status: 500 }
		);
	}
}

export async function POST(request: Request) {
	const userId = await requireAuth();
	if (userId instanceof NextResponse) return userId;

	try {
		const { name, prompt, language, template, colors } = await request.json();
		const project = await prisma.project.create({
			data: {
				name: name || "Untitled Project",
				userId,
				prompt,
				language,
				template,
				colors: colors
					? {
							primaryColor: colors.primaryColor,
							secondaryColor: colors.secondaryColor,
							backgroundColor: colors.backgroundColor,
							textColor: colors.textColor,
							neutralColor: colors.neutralColor,
							accentColor: colors.accentColor,
					  }
					: undefined,
			},
		});
		return NextResponse.json(project, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to create project" },
			{ status: 500 }
		);
	}
}
