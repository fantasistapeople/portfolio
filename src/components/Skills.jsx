import { motion } from "framer-motion"
import SectionHeader from "./SectionHeader"
import { skills } from "../data"

const themeMap = {
  blue: "chip-blue", cyan: "chip-cyan",
  purple: "chip-purple", indigo: "chip-indigo", pink: "chip-pink"
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
        <SectionHeader label="What I Work With" title="Skills & Technologies" sub="A curated set of technologies and tools I've worked with across networking, cloud, and security domains." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 56 }}>
          {skills.map((s, i) => (
            <motion.div
              key={s.category} className="glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ padding: 28 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", marginBottom: 20 }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: "var(--glass)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                  {s.icon}
                </div>
                {s.category}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {s.items.map(item => (
                  <span key={item} className={themeMap[s.theme]} style={{ padding: "5px 14px", borderRadius: 50, fontSize: "0.78rem", fontWeight: 500 }}>
                    {item}
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