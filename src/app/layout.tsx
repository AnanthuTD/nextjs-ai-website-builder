import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "AI Web Builder",
	description: "Website builder powered by AI",
	icons: "/transparent-icon.png"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<Provider>
				<html lang="en">
					<body
						className={`${geistSans.variable} ${geistMono.variable} antialiased`}
					>
						<div className="min-h-screen flex flex-col bg-white">
							<main className="flex-1 relative z-0">{children}</main>
						</div>
					</body>
				</html>
			</Provider>
		</ClerkProvider>
	);
}
