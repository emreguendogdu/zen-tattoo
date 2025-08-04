"use client"

import { motion } from "motion/react"
import Image from "next/image"
import PlantsImage from "@/../public/images/plants.webp"

export default function Plants({
  isHovered = false,
  left = true,
  right = true,
  className = "",
}) {
  return (
    <>
      {left && (
        <motion.div
          className={`absolute inset-0 -z-20 w-10 -10 origin-bottom-left ${className}`}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          <Image
            src={PlantsImage}
            alt="Plants"
            fill
            className="object-cover object-center min-w-8 min-h-8 w-1/2 h-1/2"
            style={{ filter: isHovered ? "invert(1)" : "invert(0)" }}
            priority
            placeholder="blur"
          />
        </motion.div>
      )}

      {right && (
        <motion.div
          className={`absolute top-0 bottom-0 -right-4 -z-20 w-10 -10 origin-bottom-right ${className}`}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
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
            className="object-cover object-center min-w-8 min-h-8 w-1/2 h-1/2"
            style={{ filter: isHovered ? "invert(1)" : "invert(0)" }}
            priority
            placeholder="blur"
          />
        </motion.div>
      )}
    </>
  )
}
