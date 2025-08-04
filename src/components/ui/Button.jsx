"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"
import Plants from "./ButtonPlants"

export default function Button({ href, children }, props) {
  const [hovered, setHovered] = useState(false)

  return (
    <MotionLink
      href={href}
      className="button text-white relative overflow-hidden w-1/2"
      style={{
        color: hovered ? "#000000" : "#ffffff",
        backgroundColor: hovered ? "#ffffff" : "#000000",
        border: hovered ? "1px solid #000000" : "1px solid #ffffff",
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
