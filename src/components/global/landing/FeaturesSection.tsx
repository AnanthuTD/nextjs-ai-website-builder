import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							Powerful Features
						</h2>
						<p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
							Our AI-powered website builder combines cutting-edge technology
							with intuitive design to make website creation faster and easier
							than ever.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Feature 1 */}
						<Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
									<i className="fas fa-magic text-indigo-600 text-xl"></i>
								</div>
								<CardTitle>Prompt-Based Generation</CardTitle>
								<CardDescription>
									Simply describe what you want, and our AI creates it for you.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="bg-gray-50 p-4 rounded-lg">
									<p className="text-sm text-gray-500 mb-2">Example prompt:</p>
									<p className="text-sm font-medium text-gray-700">
										"Create a blog page with a dark theme and sidebar
										navigation"
									</p>
								</div>
								<img
									src="https://readdy.ai/api/search-image?query=A%20computer%20screen%20showing%20a%20website%20builder%20interface%20with%20an%20AI%20prompt%20input%20field%20and%20a%20website%20being%20generated%20in%20real-time%2C%20with%20code%20appearing%20on%20one%20side%20and%20visual%20elements%20on%20the%20other%2C%20clean%20modern%20UI%2C%20soft%20lighting%2C%20minimalist%20design&width=400&height=200&seq=feature1&orientation=landscape"
									alt="Prompt-Based Generation"
									className="w-full h-48 object-cover object-top mt-4 rounded-lg"
								/>
							</CardContent>
						</Card>
						{/* Feature 2 */}
						<Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
									<i className="fas fa-th-large text-indigo-600 text-xl"></i>
								</div>
								<CardTitle>Template Selection</CardTitle>
								<CardDescription>
									Choose from predefined templates to kickstart your design.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="bg-gray-50 p-4 rounded-lg">
									<p className="text-sm text-gray-500 mb-2">
										Available templates:
									</p>
									<div className="flex space-x-2">
										<Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
											Blog
										</Badge>
										<Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
											Portfolio
										</Badge>
										<Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
											E-commerce
										</Badge>
									</div>
								</div>
								<img
									src="https://readdy.ai/api/search-image?query=A%20grid%20of%20website%20templates%20showcasing%20different%20designs%20like%20blog%2C%20portfolio%2C%20and%20e-commerce%20layouts%2C%20with%20hover%20effects%20highlighting%20selection%2C%20modern%20UI%20design%2C%20soft%20shadows%2C%20organized%20grid%20layout%2C%20professional%20appearance&width=400&height=200&seq=feature2&orientation=landscape"
									alt="Template Selection"
									className="w-full h-48 object-cover object-top mt-4 rounded-lg"
								/>
							</CardContent>
						</Card>
						{/* Feature 3 */}
						<Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
									<i className="fas fa-palette text-indigo-600 text-xl"></i>
								</div>
								<CardTitle>Language & Colors</CardTitle>
								<CardDescription>
									Customize language and color schemes to match your brand.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="bg-gray-50 p-4 rounded-lg">
									<p className="text-sm text-gray-500 mb-2">
										Customization options:
									</p>
									<div className="flex flex-wrap gap-2 mt-2">
										<div className="w-6 h-6 rounded-full bg-indigo-600 cursor-pointer"></div>
										<div className="w-6 h-6 rounded-full bg-emerald-500 cursor-pointer"></div>
										<div className="w-6 h-6 rounded-full bg-amber-500 cursor-pointer"></div>
										<div className="w-6 h-6 rounded-full bg-rose-500 cursor-pointer"></div>
									</div>
								</div>
								<img
									src="https://readdy.ai/api/search-image?query=A%20color%20palette%20interface%20showing%20website%20customization%20options%20with%20different%20color%20schemes%20being%20applied%20to%20a%20website%20in%20real-time%2C%20color%20swatches%2C%20language%20selection%20dropdown%2C%20visual%20editor%20UI%2C%20clean%20design%2C%20professional%20look&width=400&height=200&seq=feature3&orientation=landscape"
									alt="Language & Colors"
									className="w-full h-48 object-cover object-top mt-4 rounded-lg"
								/>
							</CardContent>
						</Card>
						{/* Feature 4 */}
						<Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
									<i className="fas fa-brain text-indigo-600 text-xl"></i>
								</div>
								<CardTitle>AI Prompt Refinement</CardTitle>
								<CardDescription>
									Our AI helps refine your prompts for better results.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="bg-gray-50 p-4 rounded-lg">
									<p className="text-sm text-gray-500 mb-2">Before:</p>
									<p className="text-sm text-gray-700 mb-2">
										"Make me a website"
									</p>
									<p className="text-sm text-gray-500 mb-2">After:</p>
									<p className="text-sm text-gray-700">
										"Create a professional business website with about,
										services, and contact sections"
									</p>
								</div>
								<img
									src="https://readdy.ai/api/search-image?query=An%20AI%20interface%20showing%20prompt%20refinement%20process%20with%20before%20and%20after%20examples%2C%20suggesting%20improvements%20to%20user%20input%2C%20with%20a%20conversational%20UI%2C%20helpful%20suggestions%20appearing%20in%20real-time%2C%20clean%20modern%20design%2C%20professional%20appearance&width=400&height=200&seq=feature4&orientation=landscape"
									alt="AI Prompt Refinement"
									className="w-full h-48 object-cover object-top mt-4 rounded-lg"
								/>
							</CardContent>
						</Card>
						{/* Feature 5 */}
						<Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
									<i className="fas fa-edit text-indigo-600 text-xl"></i>
								</div>
								<CardTitle>Page Refinement</CardTitle>
								<CardDescription>
									Modify existing pages with additional AI prompts.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="bg-gray-50 p-4 rounded-lg">
									<p className="text-sm text-gray-500 mb-2">
										Refinement prompt:
									</p>
									<p className="text-sm text-gray-700">
										"Add a sidebar with categories and a newsletter signup form"
									</p>
								</div>
								<img
									src="https://readdy.ai/api/search-image?query=A%20split-screen%20interface%20showing%20before%20and%20after%20of%20a%20webpage%20being%20refined%20through%20AI%20prompts%2C%20with%20new%20elements%20appearing%20highlighted%2C%20drag%20and%20drop%20functionality%2C%20editing%20tools%20visible%2C%20professional%20UI%20design%2C%20clean%20layout&width=400&height=200&seq=feature5&orientation=landscape"
									alt="Page Refinement"
									className="w-full h-48 object-cover object-top mt-4 rounded-lg"
								/>
							</CardContent>
						</Card>
						{/* Feature 6 */}
						<Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
									<i className="fas fa-robot text-indigo-600 text-xl"></i>
								</div>
								<CardTitle>Dual AI Models</CardTitle>
								<CardDescription>
									Choose between Gemini and Deepseek for diverse outputs.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="bg-gray-50 p-4 rounded-lg">
									<p className="text-sm text-gray-500 mb-2">
										Available models:
									</p>
									<div className="flex space-x-2">
										<Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
											Gemini
										</Badge>
										<Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
											Deepseek
										</Badge>
									</div>
								</div>
								<img
									src="https://readdy.ai/api/search-image?query=Two%20AI%20models%20represented%20side%20by%20side%20with%20different%20output%20styles%20for%20the%20same%20website%20prompt%2C%20showing%20the%20unique%20strengths%20of%20each%20model%2C%20with%20technical%20UI%20elements%2C%20model%20comparison%20metrics%2C%20professional%20interface%20design%2C%20clean%20layout&width=400&height=200&seq=feature6&orientation=landscape"
									alt="Dual AI Models"
									className="w-full h-48 object-cover object-top mt-4 rounded-lg"
								/>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
  )
}

export default FeaturesSection