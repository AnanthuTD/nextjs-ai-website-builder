import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/clerk-auth";

export async function GET() {
	const clerkId = await requireAuth();
	if (clerkId instanceof NextResponse) return clerkId;

	const user = await prisma.user.findUnique({
		where: { clerkId },
	});

	if (!user) {
		NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		return;
	}

	try {
		const projects = await prisma.project.findMany({
			orderBy: { createdAt: "desc" },
			where: { userId: user.id },
		});
		return NextResponse.json(projects);
	} catch (error) {
		// console.error(error);
		return NextResponse.json(
			{ error: "Failed to fetch projects" },
			{ status: 500 }
		);
	}
}

export async function POST(request: Request) {
	const clerkId = await requireAuth();
	if (clerkId instanceof NextResponse) return clerkId;

	const user = await prisma.user.findFirst({
		where: { clerkId },
	});

	if (!user) {
		return NextResponse.json({ message: "User not found!" }, { status: 404 });
	}

	try {
		const { name, prompt, language, template, colors } = await request.json();
		const project = await prisma.project.create({
			data: {
				name: name || "Untitled Project",
				userId: user.id,
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
		console.error(error);
		return NextResponse.json(
			{ error: "Failed to create project" },
			{ status: 500 }
		);
	}
}
