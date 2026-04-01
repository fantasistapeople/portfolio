import { useEffect, useState } from "react"
import { Link } from "react-scroll"

const links = ["home", "about", "skills", "experience", "projects", "certifications", "contact"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "18px 0",
      background: scrolled ? "rgba(6,11,23,0.75)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.3s ease"
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.4rem", letterSpacing: "-0.5px" }} className="gradient-text">
          JDA.
        </div>
        <ul style={{ display: "flex", gap: 6, listStyle: "none" }}>
          {links.map(link => (
            <li key={link}>
              <Link
                to={link} spy smooth duration={600} offset={-70}
                style={{
                  cursor: "pointer", textDecoration: "none",
                  color: "var(--text-muted)", fontSize: "0.82rem",
                  fontWeight: 500, padding: "6px 14px", borderRadius: 20,
                  textTransform: "capitalize", transition: "color 0.2s, background 0.2s",
                  display: "block"
                }}
                activeStyle={{ color: "var(--text)", background: "var(--glass)" }}
              >
                {link === "home" ? "Home" : link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}