"use client"
import { motion } from "motion/react"
import { anim } from "@/utils/utils"
import Image from "next/image"
import PatternsImage from "@/../public/images/patterns.png"
import { useScrollContext } from "@/context/ScrollContext"

export const PRELOADER_DURATION = 2

const OVERFLOW_VARIANTS = {
  initial: { overflow: "hidden" },
  animate: {
    overflow: "visible",
    transition: {
      delay: PRELOADER_DURATION,
      ease: [0.64, 0, 0.78, 0],
    },
  },
}

const SECTION_VARIANTS = {
  initial: { y: 0, overflow: "hidden" },
  animate: {
    y: [0, 0, "-100%"], //! 0, 0.5, 1 --> 3/2 = 1.5s boyunca 0'da kalacak
    overflow: "visible",
    transition: {
      duration: PRELOADER_DURATION,
      ease: [0.64, 0, 0.78, 0],
    },
  },
}

const TEXT_VARIANTS = {
  initial: { y: "200%" },
  animate: (i) => ({
    y: ["200%", "0%", "0%", "-800%"],
    scale: [1, 1, 1, 0.8],
    opacity: [1, 1, 1, 0],
    transition: {
      delay: i,
      duration: PRELOADER_DURATION + 0.5,
      ease: [0.35, 0, 0.35, 1],
      times: [0, 0.3, 0.84, 1],
    },
  }),
}

export default function PreLoader() {
  const { setAllowScroll } = useScrollContext()

  function handleAnimationComplete() {
    if (!window) return
    setAllowScroll(true)

    window.scrollTo(0, 0)
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 w-full h-[110dvh] bg-black flex flex-col items-center justify-center text-center z-50 select-none"
      id="preloader"
      {...anim(SECTION_VARIANTS)}
      onAnimationComplete={handleAnimationComplete}
    >
      <div
        id="background-patterns"
        className="absolute w-full h-full flex flex-wrap"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={`plptrn_${index}`}
            className="relative w-1/2 h-1/2 brightness-[0.1]"
          >
            <Image
              src={PatternsImage}
              alt="Preloader Japanese style pattern background"
              fill
              priority
              placeholder="blur"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <motion.div className="overflow-hidden" {...anim(OVERFLOW_VARIANTS)}>
        <motion.p
          className="relative uppercase h1 text-neutral-100 drop-shadow-custom leading-none"
          {...anim(TEXT_VARIANTS)}
        >
          Zen Tattoo
        </motion.p>
      </motion.div>
      <motion.div className="overflow-hidden" {...anim(OVERFLOW_VARIANTS)}>
        <motion.p
          className="relative lowercase text-xl tracking-tight font-light text-neutral-100 drop-shadow-custom leading-none"
          {...anim(TEXT_VARIANTS, 0.1)}
        >
          - since 2005 -
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
