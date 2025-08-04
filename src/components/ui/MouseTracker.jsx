"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"

const size = 64

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none transition-opacity duration-200 border border-neutral-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-[999999]"
      animate={{
        left: mousePosition.x,
        top: mousePosition.y,
        transition: {
          duration: 0.2,
          ease: "backOut",
        },
      }}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}

export default MouseTracker
