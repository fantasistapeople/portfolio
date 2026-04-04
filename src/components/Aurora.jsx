import { useEffect } from "react"

export default function Aurora() {
  useEffect(() => {
    let scrollTimer = null
    const blobs = document.querySelectorAll(".blob")

    const pauseBlobs = () => {
      // Hanya aktif di mobile
      if (window.innerWidth > 768) return

      blobs.forEach(b => b.style.animationPlayState = "paused")
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        blobs.forEach(b => b.style.animationPlayState = "running")
      }, 150)
    }

    window.addEventListener("scroll", pauseBlobs, { passive: true })
    return () => {
      window.removeEventListener("scroll", pauseBlobs)
      clearTimeout(scrollTimer)
    }
  }, [])

  return (
    <div className="aurora">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
      <div className="blob b4" />
    </div>
  )
}