import { Button } from "@/components/ui/button";
import Link from "next/link";
import AuthButtons from "../auth-buttons";

function Navbar() {
	return (
		<nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0 flex items-center">
							<i className="fas fa-cube text-indigo-600 text-2xl mr-2"></i>
							<span className="font-bold text-xl text-gray-900">
								AIWebBuilder
							</span>
						</div>
						<div className="hidden sm:ml-10 sm:flex sm:space-x-8">
							<a
								href="#features"
								className="border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
							>
								Features
							</a>
							<a
								href="#technology"
								className="border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
							>
								Technology
							</a>
							<a
								href="#demo"
								className="border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
							>
								Demo
							</a>
							<a
								href="#benefits"
								className="border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
							>
								Benefits
							</a>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<Link href="/dashboard">
							<Button className="bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap">
								Try now
							</Button>
						</Link>
						<AuthButtons />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
