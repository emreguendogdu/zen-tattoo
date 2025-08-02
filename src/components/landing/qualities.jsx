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
import MarqueeText from "@/components/ui/MarqueeText"

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

export default function Qualities() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const { scrollYProgress: scaleProgress } = useScroll({
    target: targetRef,
    offset: ["80% start", "end 25%"],
  })

  const sectionScale = useTransform(scaleProgress, [0, 1], [1, 0.8])
  const sectionY = useTransform(scaleProgress, [0, 1], [0, 1024])

  return (
    <>
      <motion.section
        id="qualities"
        className="relative w-full bg-white border-neutral-400 border-y border-b-0 rounded-3xl md:rounded-[4rem] z-20 py-sectionY-m md:py-0"
        ref={targetRef}
      >
        <motion.div
          className="flex flex-col relative pb-sectionY-m-half"
          style={{ scale: sectionScale, y: sectionY }}
        >
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
          <motion.div className="absolute bottom-[100px] left-0 right-0 flex justify-center items-center w-[200dvw] -translate-x-1/4">
            <MarqueeText text="Zen Tattoo" speed={160} />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}
