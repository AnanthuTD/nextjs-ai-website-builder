"use client";

import StudioEditor from "@grapesjs/studio-sdk/react";
import { useEffect, useState } from "react";
import {
	loadProjectBlocksData,
	saveProjectBlocksData,
	loadProjectData,
	saveProjectData,
} from "@/lib/storage";
import { toast } from "sonner";
import { Templates } from "@/lib/templates";
import { Project } from "@/app/generated/prisma";
import AiChatBox from "../ai-tools";
import PublishComponent from "../publish-component";

interface Content {
	html: string;
	css: string;
	js: string;
}

export interface Block {
	id: string;
	label: string;
	content: string;
}

export default function Editor({ data }: { data: Project }) {
	const { id: projectId = "" } = data;
	const [projectDataId, setProjectDataId] = useState<string | null>(null);
	const [isProjectLoaded, setIsProjectLoaded] = useState(false);

	// Load stylesheet
	useEffect(() => {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "/styles/style.css";
		document.head.appendChild(link);

		return () => {
			document.head.removeChild(link);
		};
	}, []);

	// Load project data
	useEffect(() => {
		async function loadInitialData() {
			try {
				const { project, projectDataId } = await loadProjectData(projectId);
				if (projectDataId) {
					setProjectDataId(projectDataId);
				}
				setIsProjectLoaded(true);
			} catch (error) {
				console.error("Error loading project:", error);
				toast.error("Failed to load project");
				setIsProjectLoaded(true);
			}
		}

		loadInitialData();
	}, [projectId]);

	const updatePage = (editor: any, content: Content) => {
		if (!editor) {
			toast.error("Editor instance not found!");
			console.error("Editor instance not found!");
			return;
		}
		try {
			editor.setComponents(content.html);
			const css = editor.Css;
			css.clear();
			css.addRules(content.css);
		} catch (error) {
			console.error("Error updating page:", error);
			toast.error("Failed to update page");
		}
	};

	const getPageContent = async (editorInstance: any) => {
		if (!editorInstance) {
			return { html: "", css: "", js: "" };
		}

		try {
			const html = editorInstance.getHtml() || "";
			const css = editorInstance.getCss() || "";
			const js = editorInstance.getJs() || "";

			console.log("getPageContent: ", html, css, js);

			return {
				html,
				css,
				js,
			};
		} catch (error) {
			console.error("Error in getPageContent:", error);
			return { html: "", css: "", js: "" };
		}
	};

	const updateAiGeneratedBlock = async (editor: any, blocks: Block[]) => {
		if (!editor) {
			toast.error("No editor instance defined!");
			return;
		}
		if (!projectDataId) {
			toast.error("No project data selected!");
			return;
		}

		const { Blocks } = editor;
		const blockMedia =
			'<svg viewBox="0 0 24 24"><path d="M19,5H22V7H19V10H17V7H14V5H17V2H19V5M17,19V13H19V21H3V5H11V7H5V19H17Z" /></svg>';
		const newCategory = {
			id: "ai-generated",
			label: "Ai Generated",
			icon: '<svg viewBox="0 0 24 24"><path d="M7 11H1v2h6v-2m2.2-3.2L7 5.6 5.5 7.1l2.2 2 1.4-1.3M13 1h-2v6h2V1m5.4 6L17 5.7l-2.2 2.2 1.4 1.4L18.4 7M17 11v2h6v-2h-6m-5-2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m2.8 7.2 2.1 2.2 1.5-1.4-2.2-2.2-1.4 1.4m-9.2.8 1.5 1.4 2-2.2-1.3-1.4L5.6 17m5.4 6h2v-6h-2v6Z"/></svg>',
		};

		blocks.forEach((block) => {
			Blocks.add(block.id, {
				label: block.label,
				content: block.content,
				category: newCategory,
				media: blockMedia,
			});
		});

		try {
			await saveProjectBlocksData(projectDataId, blocks);
			toast.success("Blocks saved successfully");
		} catch (error) {
			console.error("Error saving blocks:", error);
			toast.error("Failed to save blocks");
		}
	};

	if (!isProjectLoaded) {
		return <div>Loading project...</div>;
	}

	return (
		<StudioEditor
			className="grow"
			options={{
				licenseKey: process.env.NEXT_PUBLIC_GRAPESJS_PUBLIC_KEY || "",
				onReady: (editor) => {
					console.log("Editor is ready");
					editor.onReady(async (args) => {
						if (projectDataId) {
							const loadedBlocks = await loadProjectBlocksData(projectDataId);
							updateAiGeneratedBlock(editor, loadedBlocks);
						}
						console.log(args);
					});
				},
				storage: {
					type: "self",
					autosaveChanges: 5,
					onSave: async ({ project }) => {
						try {
							await saveProjectData(projectId, project);
							toast.success("Project saved successfully!");
						} catch (error) {
							console.error("Error saving project:", error);
							toast.error("Failed to save project");
						}
					},
					onLoad: async () => {
						try {
							const { project, projectDataId } = await loadProjectData(
								projectId
							);
							if (projectDataId) {
								setProjectDataId(projectDataId);
							}
							return {
								project: project || {
									pages: [
										{
											name: "Landing",
											component: "",
											id: "index",
										},
									],
								},
							};
						} catch (error) {
							console.error("Error loading project:", error);
							toast.error("Failed to load project");
							return {
								project: {
									pages: [{ name: "Home", component: "" }],
								},
							};
						}
					},
				},
				layout: {
					default: {
						type: "row",
						style: { height: "100%" },
						children: [
							{
								type: "sidebarLeft",
								children: {
									type: "tabs",
									value: "blocks",
									tabs: [
										{
											id: "pages",
											label: "Pages",
											children: {
												type: "panelPages",
												style: { height: "100%" },
											},
										},
										{
											id: "blocks",
											label: "Blocks",
											children: {
												type: "panelBlocks",
												style: { height: "100%" },
											},
										},
										{
											id: "layers",
											label: "Layers",
											children: {
												type: "panelLayers",
												style: { height: "100%" },
											},
										},
									],
								},
							},
							{
								type: "canvasSidebarTop",
								sidebarTop: { leftContainer: { buttons: [] } },
							},
							{
								type: "sidebarRight",
								className: "h-full",
								children: {
									type: "tabs",
									id: "sidebarRightTabs",
									value: "ai-tab",
									tabs: [
										{
											id: "ai-tab",
											label: "AI",
											children: [
												{
													type: "custom",
													component: ({ editor }) => (
														<>
															<AiChatBox
																initialPrompt={
																	(data?.prompt ?? "") +
																	`\n${
																		data.template
																			? Templates[data.template]
																			: ""
																	}`
																}
																language={data.language ?? ""}
																colors={data.colors ?? null}
																onUpdateContent={(content) =>
																	updatePage(editor, content)
																}
																initialContentFn={() => getPageContent(editor)}
																updateAiGeneratedBlock={(blocks) =>
																	updateAiGeneratedBlock(editor, blocks)
																}
																firstTime={async () =>
																	!(await loadProjectData(projectId))
																}
																projectId={projectId}
																editor={editor}
															/>
														</>
													),
													style: { height: "100%", display: "flex" },
												},
											],
										},
										{
											id: "publish",
											label: "Publish",
											children: {
												type: "column",
												style: { height: "100%" },
												children: [
													{
														type: "custom",
														component: ({ editor }: { editor: any }) => (
															<PublishComponent
																editor={editor}
																projectId={projectId}
															/>
														),
														style: { height: "100%" },
													},
												],
											},
										},
										{
											id: "styles",
											label: "Styles",
											children: {
												type: "column",
												style: { height: "100%" },
												children: [
													{ type: "panelSelectors", style: { padding: 5 } },
													{ type: "panelStyles" },
												],
											},
										},
										{
											id: "props",
											label: "Properties",
											children: {
												type: "panelProperties",
												style: { padding: 5, height: "100%" },
											},
										},
									],
								},
							},
						],
					},
				},
			}}
		/>
	);
}
