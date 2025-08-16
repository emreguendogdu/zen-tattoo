"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"
import Plants from "./ButtonPlants"

export default function Button({ href, children, onOpacityStart }, props) {
  const [hovered, setHovered] = useState(false)

  return (
    <MotionLink
      href={href}
      className="button text-white relative overflow-hidden w-1/2"
      whileHover={{
        backgroundColor: "#ffffff",
        border: "1px solid #000000",
        color: "#000000",
      }}
      initial={{
        backgroundColor: "#ffffff",
      }}
      animate={{
        backgroundColor: onOpacityStart ? "#000000" : "#ffffff",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
      <Plants isHovered={hovered} left right />
    </MotionLink>
  )
}

const MotionLink = motion.create(Link)
