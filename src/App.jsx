import Aurora from "./components/Aurora"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const Divider = () => (
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
    <div className="section-divider" />
  </div>
)

export default function App() {
  return (
    <>
      <Aurora />
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Certifications />
      <Divider />
      <Contact />
      <Footer />
    </>
  )
}