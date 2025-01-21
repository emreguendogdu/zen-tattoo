"use client"
import { motion } from "framer-motion"
import { anim } from "@/utils/anim"

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
  initial: { y: "125%" },
  animate: (i) => ({
    y: ["125%", "0%", "0%", "-800%"],
    scale: [1, 1, 1, 0.8],
    transition: {
      delay: i,
      duration: PRELOADER_DURATION,
      ease: [0.35, 0, 0.35, 1],
      times: [0, 0.3, 0.84, 1],
    },
  }),
}

const onAnimationComplete = () => {
  document.body.style.overflow = "visible"
  window.scrollTo(0, 0)
}

export default function PreLoader() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-[110vh] bg-black flex flex-col items-center justify-center text-center z-50 font-display font-bold select-none"
      id="loader"
      {...anim(SECTION_VARIANTS)}
      onAnimationComplete={onAnimationComplete}
    >
      <div className="absolute w-1/2 h-full top-0 left-0 bg-preloader-pattern bg-repeat bg-contain brightness-[0.25]" />
      <div className="absolute w-1/2 h-full top-0 right-0 bg-preloader-pattern bg-repeat bg-contain brightness-[0.25]" />
      <motion.div className="overflow-hidden" {...anim(OVERFLOW_VARIANTS)}>
        <motion.p
          className="relative capitalize h1 text-neutral-100 drop-shadow-custom"
          {...anim(TEXT_VARIANTS, 0)}
        >
          Zen Tattoo
        </motion.p>
      </motion.div>
      <motion.div className="overflow-hidden" {...anim(OVERFLOW_VARIANTS)}>
        <motion.p
          className="relative capitalize h2 text-neutral-100 drop-shadow-custom"
          {...anim(TEXT_VARIANTS, 0.1)}
        >
          2024®
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
