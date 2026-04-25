import { motion } from "framer-motion"
import { FiExternalLink, FiDownload } from "react-icons/fi"
import SectionHeader from "./SectionHeader"
import { certifications } from "../data"

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
        <SectionHeader label="Credentials" title="Certifications" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 56 }}>
          {certifications.map((c, i) => (
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
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: c.theme === "google" ? "rgba(66,133,244,0.15)" : "rgba(239,68,68,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: 3 }}>
                    {c.name}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }}>
                    {c.issuer}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 18, borderTop: "1px solid var(--border)", flexWrap: "wrap", gap: 10 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-dim)" }}>
                    📅 {c.period}
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.72rem", fontWeight: 600, color: "#4ADE80", background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", padding: "4px 12px", borderRadius: 50, width: "fit-content" }}>
                    ✓ Active
                  </div>
                </div>

                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  download={c.credentialType === "download" ? true : undefined}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 50, fontSize: "0.78rem", fontWeight: 600, border: "1px solid var(--border-accent)", color: "var(--blue-light)", background: "rgba(79,142,247,0.07)", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(79,142,247,0.15)"; e.currentTarget.style.borderColor = "var(--blue)" }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(79,142,247,0.07)"; e.currentTarget.style.borderColor = "var(--border-accent)" }}
                >
                  {c.credentialType === "view"
                    ? <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><FiExternalLink size={13} /> View Credential</span>
                    : <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><FiDownload size={13} /> Download Certificate</span>
                  }
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}