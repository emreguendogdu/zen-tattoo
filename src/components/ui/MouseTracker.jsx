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
      className="fixed pointer-events-none transition-opacity duration-200 border border-neutral-500 z-[999999]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  )
}

export default MouseTracker
