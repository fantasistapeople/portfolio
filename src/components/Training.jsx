import { motion } from "framer-motion"
import { FiExternalLink, FiCalendar, FiClock, FiBook } from "react-icons/fi"
import SectionHeader from "./SectionHeader"
import { trainings } from "../data"

export default function Training() {
  return (
    <section id="training" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
        <SectionHeader
          label="Learning Journey"
          title="Training & Programs"
          sub="Intensive programs and specialized training I've completed to sharpen my technical skills."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginTop: 56 }}>
          {trainings.map((t, i) => (
            <motion.div
              key={i}
              className="glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(79,142,247,0.25)" }}
              style={{ padding: "28px 32px" }}
            >
              {/* Top */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
                <div style={{ width: 46, height: 46, borderRadius: 14, background: "linear-gradient(135deg, rgba(79,142,247,0.2), rgba(155,114,247,0.2))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.1rem" }}>
                  <FiBook style={{ color: "var(--blue-light)" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: 4, lineHeight: 1.3 }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--purple-light)", fontWeight: 500 }}>
                    {t.organizer}
                  </div>
                </div>
              </div>

              {/* Meta */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: "var(--text-dim)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: 50, padding: "5px 14px" }}>
                  <FiCalendar size={11} style={{ color: "var(--blue)" }} />
                  {t.period}
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: "var(--text-dim)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: 50, padding: "5px 14px" }}>
                  <FiClock size={11} style={{ color: "var(--purple)" }} />
                  {t.duration}
                </div>
              </div>

              {/* Footer */}
              <div style={{ paddingTop: 16, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.72rem", fontWeight: 600, color: "#4ADE80", background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", padding: "4px 12px", borderRadius: 50 }}>
                  ✓ Completed
                </div>
                {t.credentialUrl && (
                  
                    <a href={t.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 50, fontSize: "0.78rem", fontWeight: 600, border: "1px solid var(--border-accent)", color: "var(--blue-light)", background: "rgba(79,142,247,0.07)", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(79,142,247,0.15)"; e.currentTarget.style.borderColor = "var(--blue)" }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(79,142,247,0.07)"; e.currentTarget.style.borderColor = "var(--border-accent)" }}
                  >
                    <FiExternalLink size={12} /> View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}