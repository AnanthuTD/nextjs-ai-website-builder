import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

function HeroSection() {
	return (
		<section className="relative overflow-hidden">
			<div className="absolute inset-0 z-0">
				<img
					src="https://readdy.ai/api/search-image?query=A%20modern%20tech%20workspace%20with%20a%20sleek%20computer%20setup%2C%20holographic%20UI%20elements%20floating%20in%20the%20air%2C%20showing%20website%20builder%20interface%20with%20drag%20and%20drop%20components%2C%20soft%20purple%20and%20blue%20gradient%20lighting%2C%20minimalist%20design%2C%20high%20tech%20atmosphere%2C%20photorealistic&width=1440&height=600&seq=hero-bg&orientation=landscape"
					alt="AI Website Builder"
					className="w-full h-full object-cover object-top"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-indigo-800/70 to-transparent"></div>
			</div>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="py-20 md:py-28 lg:py-32 flex flex-col items-start">
					<Badge className="mb-6 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors duration-300">
						New Release 2025
					</Badge>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
						Build Websites with AI Power
					</h1>
					<p className="mt-6 text-xl text-indigo-100 max-w-2xl">
						Create stunning, custom web pages effortlessly with our AI-powered
						builder. Just describe what you want, and watch your website come to
						life in seconds.
					</p>
					<div className="mt-10 flex flex-col sm:flex-row gap-4">
						<Link href={"/dashboard"}>
							<Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
								Get Started Free
							</Button>
						</Link>

						<a href="#demo">
							<Button
								variant="outline"
								className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer"
							>
								<PlayCircle className="w-5 h-5 mr-2" />
								Watch Demo
							</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
