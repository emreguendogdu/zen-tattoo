"use client"
import useDeviceSize from "@/hooks/useDeviceSize"
import { useScroll, useTransform, motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import Image1 from "@/../public/images/gallery/1.webp"
import Image2 from "@/../public/images/gallery/2.webp"
import Image3 from "@/../public/images/gallery/3.webp"
import Image4 from "@/../public/images/gallery/4.webp"
import Image5 from "@/../public/images/gallery/5.webp"
import Image6 from "@/../public/images/gallery/6.webp"
import Image7 from "@/../public/images/gallery/7.webp"
import Image8 from "@/../public/images/gallery/8.webp"

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8]

export default function Gallery() {
  const targetRef = useRef(null)
  const [width, height] = useDeviceSize()

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["10% start", "end end"],
  })

  const isMobile = width < 768

  const X_FOR_HORIZONTAL_SCROLL = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "-450%" : "-130%"]
  )

  const SMALLER_ON_LAST_PART = useTransform(
    scrollYProgress,
    [0.75, 1],
    [1, 0.45]
  )

  // TODO: FIX - %99 images not appearing as useDimensions is not working properly

  return (
    <motion.section
      className="min-h-[600vh] relative bg-black px-2"
      id="images"
      ref={targetRef}
    >
      <motion.div
        className="sticky top-0 h-screen overflow-hidden pt-16 md:pt-24"
        style={{
          scale: SMALLER_ON_LAST_PART,
        }}
      >
        <h2 className="text-white md:mb-8">Gallery</h2>
        <motion.ul
          style={{ x: X_FOR_HORIZONTAL_SCROLL }}
          className="relative flex gap-2"
        >
          {Array.from({ length: images.length }).map((_, i) => (
            <li
              key={i}
              className="relative min-w-[250px] md:min-w-[400px] min-h-[75vh] h-full"
            >
              <Image
                src={images[i]}
                className="w-full h-full object-cover"
                alt="Tattoo project"
                aria-hidden
                fill
                placeholder="blur"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  )
}
