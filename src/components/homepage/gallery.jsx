"use client"
import useDimensions from "@/hooks/useDimensions"
import { useScroll, useTransform, motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const imagesLength = 8

const MOBILE_BREAKPOINT = 768
const MOBILE_IMAGE_RATIO = 1.25
const DESKTOP_IMAGE_RATIO = 3.25

const imageWidth = (width) =>
  width < MOBILE_BREAKPOINT
    ? width / MOBILE_IMAGE_RATIO
    : width / DESKTOP_IMAGE_RATIO

export default function Gallery() {
  const targetRef = useRef(null)
  const dimensions = useDimensions()

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["10% start", "end end"],
  })

  const X_FOR_HORIZONTAL_SCROLL = useTransform(
    scrollYProgress,
    [0, 1],
    [
      0,
      -imageWidth(dimensions.width) *
        (dimensions.width < MOBILE_BREAKPOINT
          ? imagesLength - MOBILE_IMAGE_RATIO + 0.225
          : imagesLength - DESKTOP_IMAGE_RATIO + 0.17),
    ]
  )

  const SMALLER_ON_LAST_PART = useTransform(scrollYProgress, [0.75, 1], [1, 0.45])

  return (
    <motion.section
      className="min-h-[600vh] relative bg-black px-2"
      id="images"
      ref={targetRef}
    >
      <motion.div
        className="sticky top-0 h-screen overflow-hidden pt-8 md:pt-24"
        style={{
          scale: SMALLER_ON_LAST_PART,
        }}
      >
        <h2 className="text-white md:mb-8">Gallery</h2>
        <motion.ul
          style={{ x: X_FOR_HORIZONTAL_SCROLL }}
          className="flex gap-2"
        >
          {Array.from({ length: imagesLength }).map((_, i) => (
            <li
              key={i}
              className="relative min-h-[75vh] h-full"
              style={{ minWidth: imageWidth(dimensions.width) }}
            >
              <Image
                src={`/images/${i + 1}.webp`}
                className="w-full h-full object-cover"
                alt="Tattoo project"
                aria-hidden
                fill
              />
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  )
}
