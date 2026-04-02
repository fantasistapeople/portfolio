import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import SectionHeader from "./SectionHeader"
import { personalInfo } from "../data"

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState(null) // null | "sending" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
      formRef.current.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" style={{ padding: "100px 0 120px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
        <SectionHeader label="Let's Talk" title="Get In Touch" />
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, marginTop: 56, alignItems: "start" }}>

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.5rem", marginBottom: 16, color: "var(--text)" }}>
              Have a project or<br />opportunity in mind?
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: 36 }}>
              Feel free to reach out — whether it's a collaboration, a question, or just a hello. I'll get back to you as soon as possible.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "✉️", text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: "💼", text: "linkedin.com/in/jeremy-david-alexander", href: personalInfo.linkedin }
              ].map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 14, color: "var(--text-muted)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 12, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", transition: "all 0.2s", flexShrink: 0 }}>
                    {link.icon}
                  </div>
                  {link.text}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="glass" style={{ padding: 36 }}>
            <form ref={formRef} onSubmit={handleSubmit}>
              {[
                { label: "Your Name", name: "from_name", type: "text", placeholder: "John Doe" },
                { label: "Email Address", name: "reply_to", type: "email", placeholder: "john@example.com" },
              ].map(field => (
                <div key={field.name} style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: 8, letterSpacing: "0.5px", textTransform: "uppercase" }}>
                    {field.label}
                  </label>
                  <input type={field.type} name={field.name} placeholder={field.placeholder} required className="form-input" />
                </div>
              ))}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: 8, letterSpacing: "0.5px", textTransform: "uppercase" }}>
                  Message
                </label>
                <textarea name="message" placeholder="Tell me about your project or inquiry..." required className="form-input" style={{ resize: "vertical", minHeight: 120 }} />
              </div>

              <button type="submit" disabled={status === "sending"}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 30px", borderRadius: 50, background: "var(--gradient)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", border: "none", cursor: status === "sending" ? "not-allowed" : "pointer", opacity: status === "sending" ? 0.7 : 1, fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s" }}>
                {status === "sending" ? "Sending..." : "✈️ Send Message"}
              </button>

              {status === "success" && (
                <p style={{ marginTop: 16, textAlign: "center", color: "#4ADE80", fontSize: "0.88rem" }}>
                  ✅ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p style={{ marginTop: 16, textAlign: "center", color: "#F87171", fontSize: "0.88rem" }}>
                  ❌ Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}