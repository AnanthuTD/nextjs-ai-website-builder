import React from "react";
import Footer from "./Footer";
import Benefits from "./Benifits";
import Demo from "./Demo";
import TechAndStack from "./TechAndStack";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const LandingPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<Navbar />

			{/* Hero Section */}
			<HeroSection />

			{/* Features Section */}
			<FeaturesSection />

			{/* Technology Stack Section */}
			<TechAndStack />

			{/* Demo Videos Section */}
			<Demo
				videos={[
					{
						url: "https://www.youtube.com/watch?v=EFRV0BIWyRg",
						title: "Travel Vlogue",
						description:
							"Explore a travel-themed website built with AI Web Builder",
					},
					{
						url: "https://www.youtube.com/watch?v=YPu1MobZA6E",
						title: "Portfolio",
						description: "Showcase your work with a sleek portfolio page",
					},
					{
						url: "https://www.youtube.com/watch?v=9FlUylCMUJU",
						title: "Bean Bliss",
						description: "Create an online coffee store",
					},
					{
						url: "https://www.youtube.com/watch?v=abjLmyS3ItM",
						title: "E-commerce",
						description: "Create an online store effortlessly",
					},
				]}
			/>

			{/* Benefits Section */}
			<Benefits />

			{/* Footer */}
			<Footer />
		</div>
	);
};
export default LandingPage;
