import { useEffect, useState } from "react"
import { FiArrowUp } from "react-icons/fi"
import { animateScroll as scroll } from "react-scroll"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() => scroll.scrollToTop({ duration: 600, smooth: true })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title="Back to top"
      style={{
        position: "fixed", bottom: 32, right: 32, zIndex: 50,
        width: 46, height: 46, borderRadius: "50%",
        background: "linear-gradient(135deg, #4F8EF7, #9B72F7)",
        border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff", fontSize: "1.1rem",
        boxShadow: hovered
          ? "0 8px 32px rgba(79,142,247,0.5), 0 0 20px rgba(155,114,247,0.3)"
          : "0 4px 20px rgba(79,142,247,0.3)",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? "translateY(-4px)" : "translateY(0)"
          : "translateY(16px)",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        pointerEvents: visible ? "all" : "none"
      }}
    >
      <FiArrowUp strokeWidth={2.5} />
    </button>
  )
}