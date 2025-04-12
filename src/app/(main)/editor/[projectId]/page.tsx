import Editor from "@/components/global/studio-editor";
import prisma from "@/lib/prisma";

async function EditorPage({
	params,
}: {
	params: Promise<{ projectId: string }>;
}) {
	const { projectId } = await params;

	const data = await prisma.project.findUnique({
		where: { id: projectId },
	});

	if (!data) {
		return <h1>Project Not Fount</h1>;
	}

	return <Editor data={data} />;
}

export default EditorPage;
