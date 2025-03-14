import HeroSection from "./components/HeroSection";
import CareerSection from "./components/CareerSection";
import LecturesSection from "./components/LecturesSection";
import EventsSection from "./components/EventsSection";
import ConsultingSection from "./components/ConsultingSection";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";

export default function HomePage() {
	return (
		<main className="container mx-auto px-4 py-12">
			<HeroSection />
			<CareerSection />
			<LecturesSection />
			<EventsSection />
			<ConsultingSection />
			<StatsSection />
			<CTASection />
		</main>
	);
}