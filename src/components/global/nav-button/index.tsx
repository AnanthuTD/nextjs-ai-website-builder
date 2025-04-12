"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";

interface NavButtonProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
	inactiveClassName?: string;
	exact?: boolean;
	[key: string]: any;
}

function NavButton({
	href,
	children,
	className = "",
	activeClassName = "bg-[hsl(238,87%,67%)] text-white",
	inactiveClassName = "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
	exact = true,
	...linkProps
}: NavButtonProps) {
	const path = usePathname();

	const isActive = exact ? path === href : path.startsWith(href);

	return (
		<Link
			href={href}
			className={cn(
				"px-4 py-2 rounded-md text-sm font-medium transition-colors",
				isActive ? activeClassName : inactiveClassName,
				className
			)}
			{...linkProps}
		>
			{children}
		</Link>
	);
}

export default NavButton;
