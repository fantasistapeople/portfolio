import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [hiding, setHiding] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const duration = 1800
    const interval = 16
    const steps = duration / interval
    let current = 0

    const timer = setInterval(() => {
      current++
      setProgress(Math.min((current / steps) * 100, 100))
      if (current >= steps) {
        clearInterval(timer)
        setTimeout(() => setHiding(true), 200)
        setTimeout(() => setHidden(true), 900)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  if (hidden) return null

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#060B17",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      opacity: hiding ? 0 : 1,
      transition: "opacity 0.7s ease",
      pointerEvents: hiding ? "none" : "all"
    }}>
      {/* Subtle aurora behind loader */}
      <div style={{
        position: "absolute", inset: 0, overflow: "hidden",
        opacity: 0.4
      }}>
        <div style={{
          position: "absolute", width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,142,247,0.5) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
          animation: "pulse 2s ease-in-out infinite"
        }} />
      </div>

      {/* Logo */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 40
      }}>
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "3.5rem", fontWeight: 800,
          letterSpacing: "-2px",
          background: "linear-gradient(135deg, #7EB3FF, #C4A8FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "fadeScaleIn 0.6s ease forwards",
          opacity: 0
        }}>
          JDA.
        </div>

        {/* Progress bar container */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: 200 }}>
          <div style={{
            width: "100%", height: 1,
            background: "rgba(255,255,255,0.08)",
            borderRadius: 2, overflow: "hidden"
          }}>
            <div style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #4F8EF7, #9B72F7)",
              borderRadius: 2,
              transition: "width 0.1s linear",
              boxShadow: "0 0 8px rgba(79,142,247,0.8)"
            }} />
          </div>
          <div style={{
            fontSize: "0.7rem", fontWeight: 500,
            color: "rgba(221,230,255,0.3)",
            letterSpacing: "2px", fontFamily: "'DM Sans', sans-serif"
          }}>
            {Math.round(progress)}%
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeScaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}