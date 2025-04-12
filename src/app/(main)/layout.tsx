import AuthButtons from "@/components/global/auth-buttons";
import NavButton from "@/components/global/nav-button";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const links = [
	{ href: "/dashboard", label: "Dashboard" },
	{ href: "/editor", label: "Settings" },
];

function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<nav className="bg-white text-gray-900 px-4 flex justify-between items-center border-b border-gray-200 shadow-sm">
				<Link href={"/"} className="flex items-center cursor-pointer">
					<Image
						src="/logo.png"
						alt="Website Builder Logo"
						className="mr-2"
						height={80}
						width={120}
					/>
				</Link>

				<div className="flex space-x-4">
					{links.map((link) => (
						<NavButton key={link.href} href={link.href}>
							{link.label}
						</NavButton>
					))}

					<AuthButtons />
				</div>
			</nav>

			{children}
		</>
	);
}

export default Layout;
