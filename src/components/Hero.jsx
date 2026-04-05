import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { personalInfo } from "../data"

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 0 80px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.85rem", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", color: "var(--blue)", marginBottom: 20 }}>
            <span style={{ display: "block", width: 40, height: 1, background: "var(--blue)" }} />
            Hello, I'm
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 16 }} className="gradient-text">
            Jeremy David<br />Alexander
          </h1>

          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1rem, 2.2vw, 1.35rem)", fontWeight: 600, color: "var(--text-muted)", marginBottom: 28, letterSpacing: "0.3px" }}>
            {personalInfo.title}
          </p>

          <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "var(--text)", fontStyle: "italic", fontWeight: 300, marginBottom: 48, paddingLeft: 20, borderLeft: "2px solid var(--purple)", lineHeight: 1.5 }}>
            "{personalInfo.tagline}"
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="projects" smooth duration={600} offset={-70}>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 30px", borderRadius: 50, background: "var(--gradient)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", border: "none", cursor: "pointer", boxShadow: "0 4px 24px rgba(79,142,247,0.3)", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(79,142,247,0.4)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(79,142,247,0.3)" }}
              >
                🚀 View My Work
              </button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-70}>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 50, background: "transparent", color: "var(--text)", fontWeight: 600, fontSize: "0.9rem", border: "1px solid var(--border)", cursor: "pointer", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "var(--blue-light)"; e.currentTarget.style.background = "var(--glass)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "transparent" }}
              >
                ✉️ Get In Touch
              </button>
            </Link>
            <a
                href="/cv.pdf"
                download="CV_Jeremy_David_Alexander.pdf"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 50, background: "transparent", color: "var(--text)", fontWeight: 600, fontSize: "0.9rem", border: "1px solid var(--border)", cursor: "pointer", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "#4ADE80"; e.currentTarget.style.color = "#4ADE80"; e.currentTarget.style.background = "var(--glass)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.background = "transparent" }}
              >
                📄 Download CV
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "var(--text-dim)", fontSize: "0.72rem", letterSpacing: "1.5px", textTransform: "uppercase" }}
      >
        <span>Scroll</span>
        <span>↓</span>
      </motion.div>
    </section>
  )
}