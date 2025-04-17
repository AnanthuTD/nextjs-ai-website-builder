"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AiModal, { Colors } from "../ai-modal";
import { ProjectTable } from "../list-pages";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export type SubmitData = {
	prompt?: string;
	language?: string;
	colors?: Colors;
	template?: string;
	projectId?: string;
	projectName?: string;
};

export interface ProjectListData {
	id: string;
	name: string;
	prompt?: string;
	language?: string;
	template?: string;
	colors?: {
		primaryColor: string;
		secondaryColor: string;
		backgroundColor: string;
		textColor: string;
		neutralColor: string;
		accentColor: string;
	};
}

function Dashboard() {
	const [projects, setProjects] = useState<ProjectListData[]>([]);
	const [openDeleteAll, setOpenDeleteAll] = useState(false);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				setLoading(true);
				const response = await fetch("/api/projects");
				if (!response.ok) throw new Error("Failed to fetch projects");
				const data = await response.json();
				setProjects(data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		fetchProjects();
	}, []);

	const handleSubmit = async (data: SubmitData) => {
		try {
			const response = await fetch("/api/projects", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: data.projectName || "Untitled Project",
					prompt: data.prompt,
					language: data.language,
					template: data.template,
					colors: data.colors
						? {
								primaryColor: data.colors.primary,
								secondaryColor: data.colors.secondary,
								backgroundColor: data.colors.background,
								textColor: data.colors.text,
								neutralColor: data.colors.neutral,
								accentColor: data.colors.accent,
						  }
						: undefined,
				}),
			});
			if (!response.ok) throw new Error("Failed to create project");
			const newProject = await response.json();
			setProjects([newProject, ...projects]);
			router.push(`/editor/${newProject.id}`);
		} catch (error) {
			toast.error("Failed to create project!");
			console.error(error);
		}
	};

	const handleDelete = async (projectId: string) => {
		try {
			const response = await fetch(`/api/projects/${projectId}`, {
				method: "DELETE",
			});
			if (!response.ok) throw new Error("Failed to delete project");
			setProjects(projects.filter((project) => project.id !== projectId));
		} catch (error) {
			console.error(error);
		}
	};

	const handleRename = async (projectId: string, newName: string) => {
		try {
			const response = await fetch(`/api/projects/${projectId}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name: newName }),
			});
			if (!response.ok) throw new Error("Failed to rename project");
			const updatedProject = await response.json();
			setProjects(
				projects.map((project) =>
					project.id === projectId ? updatedProject : project
				)
			);
		} catch (error) {
			console.error(error);
		}
	};

	const handleDeleteAll = async () => {
		try {
			const response = await fetch("/api/projects/delete-all", {
				method: "DELETE",
			});
			if (!response.ok) throw new Error("Failed to delete all projects");
			setProjects([]);
			setOpenDeleteAll(false);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section className="flex flex-1 bg-white min-h-screen">
			<div className="flex flex-col w-full p-8">
				{/* Header Section */}
				<div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-4">
					<div>
						<h2 className="text-2xl font-semibold text-gray-900">
							Website Builder
						</h2>
						<h4 className="text-gray-500 text-sm mt-1">Project Dashboard</h4>
					</div>
					<div className="space-x-4">
						{/* Create New Project */}
						<AiModal onSubmit={handleSubmit} />

						{/* Delete All Projects */}
						<Dialog open={openDeleteAll} onOpenChange={setOpenDeleteAll}>
							<DialogTrigger asChild>
								<Button
									variant="ghost"
									className="text-red-500 hover:text-red-600 hover:bg-gray-100 transition-colors"
								>
									Delete All
								</Button>
							</DialogTrigger>
							<DialogContent className="bg-white border border-gray-200 text-gray-900">
								<DialogHeader>
									<DialogTitle className="text-gray-900">
										Delete All Projects?
									</DialogTitle>
									<DialogDescription className="text-gray-500">
										This action will permanently remove all projects and cannot
										be undone.
									</DialogDescription>
								</DialogHeader>
								<DialogFooter>
									<Button
										variant="ghost"
										onClick={() => setOpenDeleteAll(false)}
										className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
									>
										Cancel
									</Button>
									<Button
										variant="ghost"
										onClick={handleDeleteAll}
										className="text-red-500 hover:text-red-600 hover:bg-gray-100 transition-colors"
									>
										Delete All
									</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</div>
				</div>

				{/* Projects Section */}
				<div className="bg-white">
					{loading ? (
						<div className="text-center py-16">
							<p className="text-gray-600 text-base">Loading projects...</p>
						</div>
					) : projects && projects.length ? (
						<ProjectTable
							projects={projects}
							onDelete={handleDelete}
							onRename={handleRename}
						/>
					) : (
						<div className="text-center py-16">
							<p className="text-gray-600 text-base">No projects yet</p>
							<p className="text-gray-400 text-sm mt-1">
								Start by creating a new project
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default Dashboard;
