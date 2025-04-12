import { loadProjectAction } from "@/app/actions/loadProject";
import { loadProjectBlocksAction } from "@/app/actions/loadProjectBlocks";
import { saveProjectBlocksAction } from "@/app/actions/saveProjectBlocks";
import { saveProjectAction } from "@/app/actions/saveProjects";
import { Block } from "@/components/global/studio-editor";
import { ProjectData } from "@grapesjs/studio-sdk/dist/utils/types.js";

export async function saveProjectData(projectId: string, project: ProjectData) {
	const result = await saveProjectAction({ projectId, project });

	if (!result.success) {
		throw new Error(result.message);
	}

	console.log(result.message);
	return result;
}

export async function loadProjectData(
	projectId: string
): Promise<{ project?: ProjectData; projectDataId?: string | null }> {
	const result = await loadProjectAction({ projectId });

	if (!result.success) {
		throw new Error(result.message);
	}

	return {
		project: result.data as ProjectData,
		projectDataId: result.projectDataId,
	};
}

export async function saveProjectBlocksData(
	projectDataId: string,
	blocks: Block[]
) {
	const result = await saveProjectBlocksAction({ projectDataId, blocks });

	if (!result.success) {
		throw new Error(result.message);
	}

	console.log(result.message);
	return result;
}

export async function loadProjectBlocksData(
	projectDataId: string
): Promise<Block[]> {
	const result = await loadProjectBlocksAction({ projectDataId });

	if (!result.success) {
		throw new Error(result.message);
	}

	return result.data;
}
