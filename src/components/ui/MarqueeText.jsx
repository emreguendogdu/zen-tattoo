"use client"

import { motion } from "motion/react"

const MarqueeText = ({ text, speed = 60 }) => {
  return (
    <div className="flex overflow-hidden select-none">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={`marquee-${index}`}
            className="h0 whitespace-nowrap inline-block opacity-10 px-4"
          >
            {text}
          </span>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={`marquee-duplicate-${index}`}
            className="h0 whitespace-nowrap inline-block opacity-10 px-4"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default MarqueeText
