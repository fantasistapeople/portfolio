import { useEffect, useState } from "react"
import { Link } from "react-scroll"

const links = ["home", "about", "skills", "experience", "training", "projects", "certifications", "contact"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "18px 0",
        background: scrolled || menuOpen ? "rgba(6,11,23,0.95)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.4rem", letterSpacing: "-0.5px" }} className="gradient-text">
            JDA.
          </div>

          {/* Desktop Links */}
          <ul style={{ display: "flex", gap: 6, listStyle: "none", margin: 0, padding: 0 }} className="nav-links">
            {links.map(link => (
              <li key={link}>
                <Link
                  to={link} spy smooth duration={600} offset={-70}
                  style={{ cursor: "pointer", textDecoration: "none", color: "var(--text-muted)", fontSize: "0.82rem", fontWeight: 500, padding: "6px 14px", borderRadius: 20, textTransform: "capitalize", transition: "color 0.2s, background 0.2s", display: "block" }}
                  activeStyle={{ color: "var(--text)", background: "var(--glass)" }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "1px solid var(--border)", borderRadius: 8, padding: "8px 10px", cursor: "pointer", color: "var(--text)", flexDirection: "column", gap: 5, alignItems: "center", justifyContent: "center" }}
            className="hamburger-btn"
          >
            <span style={{ display: "block", width: 20, height: 2, background: "var(--text)", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: 20, height: 2, background: "var(--text)", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 20, height: 2, background: "var(--text)", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ padding: "16px 28px 24px", borderTop: "1px solid var(--border)" }}>
            {links.map(link => (
              <Link
                key={link}
                to={link} spy smooth duration={600} offset={-70}
                onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "12px 0", color: "var(--text-muted)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500, textTransform: "capitalize", borderBottom: "1px solid var(--border)", cursor: "pointer" }}
                activeStyle={{ color: "var(--blue-light)" }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}