import { motion } from "framer-motion"

export default function SectionHeader({ label, title, sub }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--blue)", marginBottom: 14 }}>
        <span style={{ display: "block", width: 24, height: 1, background: "var(--blue)" }} />
        {label}
      </div>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.15, color: "var(--text)", marginBottom: sub ? 16 : 0 }}>
        {title}
      </h2>
      {sub && <p style={{ color: "var(--text-muted)", maxWidth: 520, fontSize: "0.95rem" }}>{sub}</p>}
    </motion.div>
  )
}