"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { publishSite, getPublishedSite } from "@/app/actions/publish-site";
import { checkSubdomain } from "@/app/actions/check-subdomain";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@/components/ui/dialog";
import { Copy, Loader2, ExternalLink, RocketIcon } from "lucide-react";

interface PublishComponentProps {
	editor: any;
	projectId: string;
}

export default function PublishComponent({
	editor,
	projectId,
}: PublishComponentProps) {
	const [subdomain, setSubdomain] = useState("");
	const [existingSubdomain, setExistingSubdomain] = useState<string | null>(
		null
	);
	const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
	const [isChecking, setIsChecking] = useState(false);
	const [isPublishing, setIsPublishing] = useState(false);
	const [indexDialogOpen, setIndexDialogOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState<string | null>(null);
	const [pagesList, setPagesList] = useState<string[]>([]);

	// Fetch existing subdomain on mount
	useEffect(() => {
		const fetchSubdomain = async () => {
			try {
				const site = await getPublishedSite(projectId);
				if (site) {
					setExistingSubdomain(site.subdomain);
					setSubdomain(site.subdomain);
					setIsAvailable(true);
				}
			} catch (error) {
				console.error("Error fetching published site:", error);
				toast.error("Failed to load published site info");
			}
		};
		fetchSubdomain();
	}, [projectId]);

	const handleCheckAvailability = async () => {
		if (!subdomain) {
			toast.error("Please enter a subdomain");
			return;
		}
		setIsChecking(true);
		try {
			const available = await checkSubdomain(subdomain, projectId);
			setIsAvailable(available);
			toast.success(
				available ? "Subdomain is available!" : "Subdomain is already taken."
			);
		} catch (error) {
			toast.error("Failed to check subdomain availability");
			console.error(error);
		} finally {
			setIsChecking(false);
		}
	};

	const handleCopySubdomain = () => {
		if (existingSubdomain) {
			const url = `https://${existingSubdomain}.${process.env.NEXT_PUBLIC_DOMAIN}`;
			navigator.clipboard.writeText(url);
			toast.success("Subdomain URL copied to clipboard!");
		}
	};

	const handlePublish = async () => {
		if (!isAvailable) {
			toast.error("Please check subdomain availability first");
			return;
		}

		// Get all pages
		const pages = editor.Pages.getAll().reduce((acc: any, page: any) => {
			const pageName =
				page.get("name")?.toLowerCase().split(" ").join("-") || "index";
			const sanitizedName =
				pageName.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "index";
			acc[sanitizedName] = page;
			return acc;
		}, {});

		// Check for index page
		if (!pages["index"] && Object.keys(pages).length > 0) {
			if (Object.keys(pages).length === 1) {
				// Only one page, use it as index
				const singlePageName = Object.keys(pages)[0];
				pages["index"] = pages[singlePageName];
				delete pages[singlePageName];
				proceedWithPublish(pages);
			} else {
				// Multiple pages, prompt user
				setPagesList(Object.keys(pages));
				setIndexDialogOpen(true);
			}
		} else {
			proceedWithPublish(pages);
		}
	};

	const proceedWithPublish = async (pages: any) => {
		setIsPublishing(true);
		try {
			// Generate HTML for each page with embedded CSS and JS
			const pagesHtml = Object.entries(pages).reduce(
				(acc: any, [pageName, page]: [string, any]) => {
					const htmlContent =
						editor.getHtml({ component: page.getMainComponent() }) || "";
					const cssContent =
						editor.getCss({ component: page.getMainComponent() }) || "";
					const jsContent =
						editor.getJs({ component: page.getMainComponent() }) || "";

					// Use DOMParser to ensure proper structure
					const parser = new DOMParser();
					const doc = parser.parseFromString(htmlContent, "text/html");

					// Ensure head exists
					let head = doc.querySelector("head");
					if (!head) {
						head = doc.createElement("head");
						doc.documentElement.insertBefore(head, doc.body);
					}

					// Add page-specific CSS
					if (cssContent) {
						const styleTag = doc.createElement("style");
						styleTag.textContent = cssContent;
						head.appendChild(styleTag);
					}

					// Add page-specific JS
					const body = doc.querySelector("body") || doc.createElement("body");
					if (jsContent) {
						const scriptTag = doc.createElement("script");
						scriptTag.textContent = jsContent;
						body.appendChild(scriptTag);
					}

					// Ensure body is in the document
					if (!doc.querySelector("body")) {
						doc.documentElement.appendChild(body);
					}

					// Serialize HTML
					const modifiedHtml =
						"<!DOCTYPE html>" + doc.documentElement.outerHTML;
					acc[pageName] = modifiedHtml;
					return acc;
				},
				{}
			);

			// Publish site
			await publishSite(projectId, subdomain, pagesHtml);

			// Refetch published site data
			const site = await getPublishedSite(projectId);
			if (site) {
				setExistingSubdomain(site.subdomain);
				setSubdomain(site.subdomain);
				setIsAvailable(true);
			}

			toast.success("Site published successfully!");
			if (!existingSubdomain) {
				setSubdomain("");
				setIsAvailable(null);
			}
		} catch (error) {
			toast.error("Failed to publish site");
			console.error(error);
		} finally {
			setIsPublishing(false);
		}
	};

	const handleSelectIndex = () => {
		if (!selectedIndex) {
			toast.error("Please select an index page");
			return;
		}
		const pages = editor.Pages.getAll().reduce((acc: any, page: any) => {
			const pageName =
				page.get("name")?.toLowerCase().split(" ").join("-") || "index";
			const sanitizedName =
				pageName.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "index";
			acc[sanitizedName] = page;
			return acc;
		}, {});

		// Rename selected page to index
		pages["index"] = pages[selectedIndex];
		if (selectedIndex !== "index") {
			delete pages[selectedIndex];
		}

		setIndexDialogOpen(false);
		proceedWithPublish(pages);
	};

	return (
		<div className="p-4 flex flex-col gap-4">
			<h2 className="text-lg font-semibold">
				{existingSubdomain ? "Manage Your Site" : "Publish Your Site"}
			</h2>
			{existingSubdomain ? (
				<div className="flex items-center gap-2">
					<p className="text-gray-600">
						Published at:{" "}
						<a
							href={`https://${existingSubdomain}.${process.env.NEXT_PUBLIC_DOMAIN}`}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline flex items-center gap-1"
						>
							{existingSubdomain}
							<ExternalLink className="h-4 w-4" />
						</a>
					</p>
					<Button
						variant="ghost"
						size="icon"
						onClick={handleCopySubdomain}
						title="Copy URL"
					>
						<Copy className="h-4 w-4" />
					</Button>
				</div>
			) : (
				<div className="flex gap-2">
					<Input
						type="text"
						value={subdomain}
						onChange={(e) => {
							setSubdomain(
								e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "")
							);
							setIsAvailable(null);
						}}
						placeholder="Enter subdomain (e.g., mysite)"
						className="flex-1"
						disabled={isPublishing}
					/>
					<Button
						onClick={handleCheckAvailability}
						disabled={isChecking || !subdomain || isPublishing}
						variant={isChecking ? "outline" : "default"}
					>
						{isChecking ? (
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						) : null}
						{isChecking ? "Checking..." : "Check Availability"}
					</Button>
				</div>
			)}
			{isAvailable !== null && !existingSubdomain && (
				<p className={isAvailable ? "text-green-500" : "text-red-500"}>
					{isAvailable ? "Subdomain is available" : "Subdomain is taken"}
				</p>
			)}
			<Button
				onClick={handlePublish}
				disabled={isPublishing || (!existingSubdomain && !isAvailable)}
				className="w-full bg-indigo-500"
				variant={"ghost"}
				style={{
					backgroundColor: "white",
					color: "black"
				}}
			>
				{isPublishing ? (
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				) : null}
				<RocketIcon color="#c800ff" />
				{isPublishing
					? "Publishing..."
					: existingSubdomain
					? "Republish Site"
					: "Publish Site"}
			</Button>

			{/* Dialog for selecting index page */}
			<Dialog open={indexDialogOpen} onOpenChange={setIndexDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Select Index Page</DialogTitle>
					</DialogHeader>
					<div className="flex flex-col gap-2">
						{pagesList.map((pageName) => (
							<label key={pageName} className="flex items-center gap-2">
								<input
									type="radio"
									name="index-page"
									value={pageName}
									checked={selectedIndex === pageName}
									onChange={(e) => setSelectedIndex(e.target.value)}
								/>
								{pageName}
							</label>
						))}
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setIndexDialogOpen(false)}>
							Cancel
						</Button>
						<Button onClick={handleSelectIndex} disabled={!selectedIndex}>
							Confirm
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
