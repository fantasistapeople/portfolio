import { motion } from "framer-motion"
import SectionHeader from "./SectionHeader"
import { experiences } from "../data"

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
        <SectionHeader label="Where I've Worked" title="Work Experience" />
        <div className="timeline" style={{ marginTop: 56 }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ position: "relative", marginBottom: 36 }}
            >
              <div className="timeline-dot" />
              <div className="glass" style={{ padding: "28px 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 6 }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "var(--text)" }}>
                    {exp.company}
                  </div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--blue-light)", background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.2)", padding: "4px 14px", borderRadius: 50 }}>
                    {exp.period}
                  </div>
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--purple-light)", marginBottom: 18 }}>
                  {exp.role}
                </div>
                <ul style={{ listStyle: "none" }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ color: "var(--text-muted)", fontSize: "0.9rem", padding: "4px 0 4px 20px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, top: 6, color: "var(--blue)", fontSize: "0.7rem" }}>▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}