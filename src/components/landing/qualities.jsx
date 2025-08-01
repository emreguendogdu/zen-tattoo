"use client"

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react"
import Image from "next/image"
import { useRef } from "react"

import { qualities, images } from "@/data/qualities"

function Quality({ quality, index, range, targetScale, globalProgress }) {
  const qualityTargetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: qualityTargetRef,
    offset: ["start end", "start start"],
  })
  const IMAGE_SCALE = useTransform(scrollYProgress, [0, 1], [2, 1])
  const CARD_SCALE = useTransform(globalProgress, range, [1, targetScale])

  return (
    <div
      className="sticky top-0 md:h-[100dvh] flex justify-center items-center md:py-sectionY-half z-30"
      ref={qualityTargetRef}
    >
      <motion.div
        className="relative md:w-[1024px] md:h-fit border border-t-0 border-neutral-100 shadow-xl pb-4 rounded-2xl bg-white text-black z-40"
        style={{ scale: CARD_SCALE, top: `calc(-5vh + ${(index + 1) * 25}px)` }}
      >
        <div className="relative h-80 w-full overflow-hidden rounded-t-2xl">
          <motion.div
            className="relative w-full h-full overflow-hidden"
            style={{ scale: IMAGE_SCALE }}
          >
            <Image
              src={images[index]}
              className="object-cover overflow-hidden"
              alt="Tattoo related"
              aria-hidden
              fill
              placeholder="blur"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center px-2 md:px-0">
          <h3 className="h2 mt-4 mb-6 text-center">{quality.title}</h3>
          <p className="max-w-screen-md text-center">{quality.content}</p>
        </div>
      </motion.div>
    </div>
  )
}

function GalleryPreview({ scrollYProgress }) {
  const titleY = useTransform(scrollYProgress, [0, 1], [-500, 0])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest)
  })

  return (
    <motion.div className="absolute bottom-0 left-0 right-0 z-[10]">
      <motion.h3
        className="h0 mt-4 mb-6 text-center z-10"
        style={{ y: titleY }}
      >
        Gallery
      </motion.h3>
    </motion.div>
  )
}

export default function Qualities() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const { scrollYProgress: galleryProgress } = useScroll({
    target: targetRef,
    offset: ["center start", "end center"],
  })

  return (
    <>
      <section
        id="qualities"
        className="relative w-full bg-white border-neutral-400 border-y border-b-0 rounded-3xl md:rounded-[4rem] z-20 py-sectionY-m md:py-0"
        ref={targetRef}
      >
        <motion.div className="absolute bottom-[100px] left-0 right-0 flex justify-center items-center gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={`quality-${i}`}
              className="h0 whitespace-nowrap inline-block opacity-10"
            >
              Zen Tattoo
            </span>
          ))}
        </motion.div>
        <div className="flex flex-col relative">
          {qualities.map((quality, i) => {
            const targetScale = 1 - (qualities.length - i) * 0.05
            return (
              <Quality
                quality={quality}
                index={i}
                key={`quality-${i}`}
                globalProgress={scrollYProgress}
                range={[i * (1 / (qualities.length + 1)), 1]}
                targetScale={targetScale}
              />
            )
          })}
        </div>
      </section>

      {/* Placeholder div for the bottom of the section */}
      <div className="relative">
        <GalleryPreview scrollYProgress={galleryProgress} />
      </div>
      <div className="my-sectionY-m-half" />
    </>
  )
}
