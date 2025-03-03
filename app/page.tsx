import Hero from "./components/HeroSection"
import Career from "./components/CareerSection"
import Lectures from "./components/LecturesSection"
import Events from "./components/EventsSection"
import Consulting from "./components/ConsultingSection"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Career />
        <Lectures />
        <Events />
        <Consulting />
      </main>
    </>
  )
}

