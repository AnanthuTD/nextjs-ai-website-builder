import { Separator } from "@/components/ui/separator";

function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-300 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
					<div>
						<div className="flex items-center mb-4">
							<i className="fas fa-cube text-indigo-400 text-2xl mr-2"></i>
							<span className="font-bold text-xl text-white">AIWebBuilder</span>
						</div>
						<p className="text-gray-400 mb-4">
							Build beautiful websites in minutes with the power of AI.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
							>
								<i className="fab fa-twitter text-lg"></i>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
							>
								<i className="fab fa-facebook text-lg"></i>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
							>
								<i className="fab fa-instagram text-lg"></i>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
							>
								<i className="fab fa-github text-lg"></i>
							</a>
						</div>
					</div>
					<div>
						<h4 className="font-semibold text-white text-lg mb-4">Product</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									Features
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									Templates
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									AI Models
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									Roadmap
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold text-white text-lg mb-4">Resources</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									Documentation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									Tutorials
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									Community
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									API
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold text-white text-lg mb-4">Company</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									Careers
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
								>
									Terms of Service
								</a>
							</li>
						</ul>
					</div>
				</div>
				<Separator className="bg-gray-700 mb-8" />
				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm">
						© 2025 AIWebBuilder. All rights reserved.
					</p>
					<div className="flex items-center space-x-4 mt-4 md:mt-0">
						<i className="fab fa-cc-visa text-gray-400 text-2xl"></i>
						<i className="fab fa-cc-mastercard text-gray-400 text-2xl"></i>
						<i className="fab fa-cc-paypal text-gray-400 text-2xl"></i>
						<i className="fab fa-cc-apple-pay text-gray-400 text-2xl"></i>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
