"use client"

import { motion, useScroll } from "motion/react"
import { useHeaderColor } from "@/context/HeaderColorContext"

export default function ScrollTracker() {
  const { scrollYProgress } = useScroll()
  const { isDarkBg } = useHeaderColor()

  return (
    <motion.div
      id="scroll-tracker"
      className={`fixed bottom-0 right-0 h-screen w-1 md:w-2 z-[99998] origin-top-right ${
        isDarkBg ? "bg-neutral-800" : "bg-black"
      }`}
      style={{
        scaleY: scrollYProgress,
      }}
      aria-hidden
    />
  )
}
