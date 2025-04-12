"use client";

import { useState } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectListData } from "../dashboard";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProjectTableProps {
	projects: ProjectListData[];
	onDelete: (projectId: string) => void;
	onRename: (projectId: string, newName: string) => void;
}

export function ProjectTable({
	projects,
	onDelete,
	onRename,
}: ProjectTableProps) {
	const router = useRouter();
	const [renameDialogOpen, setRenameDialogOpen] = useState(false);
	const [selectedProject, setSelectedProject] =
		useState<ProjectListData | null>(null);
	const [newName, setNewName] = useState("");

	const handleDoubleClick = (projectId: string) => {
		router.push(`/editor/${projectId}`);
	};

	const openRenameDialog = (project: ProjectListData) => {
		setSelectedProject(project);
		setNewName(project.name);
		setRenameDialogOpen(true);
	};

	const handleRenameSubmit = () => {
		if (selectedProject && newName.trim()) {
			onRename(selectedProject.id, newName.trim());
			setRenameDialogOpen(false);
			setSelectedProject(null);
			setNewName("");
		}
	};

	return (
		<>
			<Table>
				<TableCaption>Page List.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Project ID</TableHead>
						<TableHead>Project Name</TableHead>
						<TableHead className="w-[50px]"></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{projects.map((project) => (
						<TableRow
							key={project.id}
							onDoubleClick={() => handleDoubleClick(project.id)}
							className="cursor-pointer hover:bg-gray-100"
						>
							<TableCell className="font-medium">{project.id}</TableCell>
							<TableCell>{project.name}</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="ghost" className="h-8 w-8 p-0">
											<MoreHorizontal className="h-4 w-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem
											onSelect={() => openRenameDialog(project)}
										>
											Rename
										</DropdownMenuItem>
										<DropdownMenuItem onClick={() => onDelete(project.id)}>
											Delete
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total Projects: {projects.length}</TableCell>
					</TableRow>
				</TableFooter>
			</Table>

			{/* Rename Dialog */}
			<Dialog open={renameDialogOpen} onOpenChange={setRenameDialogOpen}>
				<DialogContent className="bg-white border border-gray-200 text-gray-900">
					<DialogHeader>
						<DialogTitle className="text-gray-900">Rename Project</DialogTitle>
						<DialogDescription className="text-gray-500">
							Enter a new name for the project.
						</DialogDescription>
					</DialogHeader>
					<div className="py-4">
						<Input
							value={newName}
							onChange={(e) => setNewName(e.target.value)}
							placeholder="Project name"
							className="w-full"
							autoFocus
						/>
					</div>
					<DialogFooter>
						<Button
							variant="ghost"
							onClick={() => {
								setRenameDialogOpen(false);
								setSelectedProject(null);
								setNewName("");
							}}
							className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
						>
							Cancel
						</Button>
						<Button
							onClick={handleRenameSubmit}
							disabled={!newName.trim()}
							className="bg-indigo-600 hover:bg-indigo-700 text-white"
						>
							Save
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
