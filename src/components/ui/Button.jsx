"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import PlantsImage from "@/../public/images/plants.webp"

export default function Button({ href, children }, props) {
  const [hovered, setHovered] = useState(false)

  return (
    <MotionLink
      href={href}
      className="button text-white relative overflow-hidden"
      style={{ color: hovered ? "#000000" : "#ffffff" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          scale: hovered ? 1 : 0,
          opacity: hovered ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <Image
          src={PlantsImage}
          alt="Plants"
          fill
          className="object-cover object-center"
          priority
          placeholder="blur"
        />
      </motion.div>
    </MotionLink>
  )
}

const MotionLink = motion(Link)
