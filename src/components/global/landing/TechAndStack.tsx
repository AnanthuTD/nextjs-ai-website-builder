import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function TechAndStack() {
  return (
    <section id="technology" className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							Powered by Modern Technology
						</h2>
						<p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
							Our platform leverages cutting-edge technologies to deliver a
							seamless website building experience.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Frontend */}
						<Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
									<i className="fab fa-react text-blue-600 text-xl"></i>
								</div>
								<CardTitle>Frontend</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Vite (React + TypeScript)</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Lightning-fast HMR for development</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>TypeScript for type safety</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Optimized production builds</span>
									</li>
								</ul>
							</CardContent>
						</Card>
						{/* Editor */}
						<Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
									<i className="fas fa-edit text-purple-600 text-xl"></i>
								</div>
								<CardTitle>Editor</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>GrapesJS for drag-and-drop editing</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Component-based page building</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Real-time preview</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Export to clean HTML/CSS</span>
									</li>
								</ul>
							</CardContent>
						</Card>
						{/* AI */}
						<Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
									<i className="fas fa-brain text-emerald-600 text-xl"></i>
								</div>
								<CardTitle>AI</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Custom Gemini model</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Deepseek via Hugging Face API</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Prompt refinement algorithms</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Context-aware code generation</span>
									</li>
								</ul>
							</CardContent>
						</Card>
						{/* UI Components */}
						<Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
									<i className="fas fa-paint-brush text-pink-600 text-xl"></i>
								</div>
								<CardTitle>UI Components</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Shadcn/ui components</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Tailwind CSS for styling</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Responsive design system</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Accessible components</span>
									</li>
								</ul>
							</CardContent>
						</Card>
						{/* Storage */}
						<Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
									<i className="fas fa-database text-amber-600 text-xl"></i>
								</div>
								<CardTitle>Storage</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3">
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>LocalStorage for project persistence</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Auto-save functionality</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Version history</span>
									</li>
									<li className="flex items-center">
										<i className="fas fa-check text-green-500 mr-2"></i>
										<span>Export/import capabilities</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
  )
}

export default TechAndStack