import Aurora from "./components/Aurora"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Training from "./components/Training"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect } from "react"
import LoadingScreen from "./components/LoadingScreen"
import BackToTop from "./components/BackToTop"

const Divider = () => (
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
    <div className="section-divider" />
  </div>
)

export default function App() {
  useEffect(() => {
  const script = document.createElement("script")
  script.type = "application/ld+json"
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jeremy David Alexander",
    "jobTitle": "Network Security Engineer",
    "url": "https://www.jeremydavidalexander.com",
    "sameAs": [
      "https://www.linkedin.com/in/jeremy-david-alexander-8b6944213",
      "https://github.com/fantasistapeople"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bekasi",
      "addressCountry": "ID"
    },
    "knowsAbout": [
      "Network Security",
      "Cloud Computing",
      "Cybersecurity",
      "Google Cloud Platform",
      "Firewall Management"
    ]
  })
  document.head.appendChild(script)
  return () => document.head.removeChild(script)
}, [])

  return (
    <>
      <LoadingScreen />
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
      <Training />
      <Divider />
      <Projects />
      <Divider />
      <Certifications />
      <Divider />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}