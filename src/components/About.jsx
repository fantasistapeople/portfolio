import { motion } from "framer-motion"
import SectionHeader from "./SectionHeader"
import { personalInfo } from "../data"

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
        <SectionHeader label="Who I Am" title="About Me" />
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 60, alignItems: "start", marginTop: 56 }}>

            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ position: "relative" }}
            >
            <div style={{
                width: "100%", aspectRatio: "1",
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "linear-gradient(135deg, rgba(79,142,247,0.15), rgba(155,114,247,0.15))",
                boxShadow: "0 0 40px rgba(79,142,247,0.15)"
            }}>
                <img
                src="/profile.jpg"
                alt="Jeremy David Alexander"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 80%", display: "block" }}
                />
            </div>
            <div style={{
                position: "absolute", bottom: 16, left: "50%",
                transform: "translateX(-50%)", whiteSpace: "nowrap",
                background: "rgba(6,11,23,0.7)", backdropFilter: "blur(8px)",
                border: "1px solid var(--border-accent)", borderRadius: 50,
                padding: "6px 16px", fontSize: "0.75rem",
                fontWeight: 600, color: "var(--blue-light)"
            }}>
                📍 Bekasi, Indonesia
            </div>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {personalInfo.about.map((p, i) => (
              <p key={i} style={{ color: "var(--text-muted)", marginBottom: 20, fontSize: "0.97rem" }}>{p}</p>
            ))}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
              {[
                { icon: "💼", text: "Junior Engineer @ XecureIT" },
                { icon: "🛡️", text: "Network Security" },
                { icon: "☁️", text: "Google ACE Certified" },
                { icon: "📍", text: "Bekasi, Indonesia" }
              ].map((chip, i) => (
                <div key={i} className="glass" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 18px", borderRadius: 50, fontSize: "0.8rem", fontWeight: 500, color: "var(--text-muted)" }}>
                  <span>{chip.icon}</span> {chip.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}