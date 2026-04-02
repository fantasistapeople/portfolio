import { motion } from "framer-motion"
import { FiGithub } from "react-icons/fi"
import { SiFigma } from "react-icons/si"
import SectionHeader from "./SectionHeader"
import { projects } from "../data"

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
        <SectionHeader label="What I've Built" title="Projects" sub="A selection of projects I've worked on — from backend APIs to UI/UX design." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginTop: 56 }}>
          {projects.map((p, i) => (
            <motion.div
              key={i} className="glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 16px 48px rgba(0,0,0,0.4), 0 0 30px rgba(79,142,247,0.1)" }}
              style={{ padding: 32, cursor: "default" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, rgba(79,142,247,0.2), rgba(155,114,247,0.2))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>
                  {p.emoji}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      title="View on GitHub"
                      style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--border)", background: "transparent", color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "1rem", transition: "all 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "var(--blue-light)"; e.currentTarget.style.borderColor = "var(--blue-light)"; e.currentTarget.style.background = "var(--glass)" }}
                      onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "transparent" }}
                    >
                      <FiGithub />
                    </a>
                  )}
                  {p.figma && (
                    <a href={p.figma} target="_blank" rel="noreferrer"
                      title="View on Figma"
                      style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--border)", background: "transparent", color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "1rem", transition: "all 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "#A78BFA"; e.currentTarget.style.borderColor = "#A78BFA"; e.currentTarget.style.background = "var(--glass)" }}
                      onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "transparent" }}
                    >
                      <SiFigma />
                    </a>
                  )}
                </div>
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: 10, color: "var(--text)" }}>
                {p.name}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: 20, lineHeight: 1.65 }}>
                {p.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {p.tech.map(t => (
                  <span key={t} className="chip-blue" style={{ fontSize: "0.72rem", fontWeight: 600, padding: "3px 12px", borderRadius: 50, letterSpacing: "0.2px" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}