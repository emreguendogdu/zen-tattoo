"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function Quality({
  quality,
  index,
  range,
  targetScale,
  globalProgress,
}) {
  const qualityTargetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: qualityTargetRef,
    offset: ["start end", "start start"],
  })
  const IMAGE_SCALE = useTransform(scrollYProgress, [0, 1], [2, 1])
  const CARD_SCALE = useTransform(globalProgress, range, [1, targetScale])

  return (
    <div
      className="sticky top-0 h-screen flex justify-center items-center"
      ref={qualityTargetRef}
    >
      <motion.div
        className="relative w-[1024px] h-[530px] border border-gray-400 rounded-2xl p-2 bg-white text-black top-[-25%]"
        style={{ scale: CARD_SCALE, top: `calc(-5vh + ${index * 25}px)` }}
      >
        <div className="relative h-80 w-full overflow-hidden">
          <motion.div
            className="relative w-full h-full"
            style={{ scale: IMAGE_SCALE }}
          >
            <Image
              src={`/images/_${index + 1}.webp`}
              className="object-cover rounded-3xl"
              alt=""
              aria-hidden
              fill
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl mt-6 mb-3 font-PPMonumentBlack uppercase text-center">
            {quality.title}
          </h1>
          <p className="max-w-screen-md text-lg pb-12 text-center">
            {quality.content}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
