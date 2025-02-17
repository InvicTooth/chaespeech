import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

