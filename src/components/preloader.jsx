"use client"
import { motion } from "framer-motion"
import { anim } from "@/utils/anim"

//TODO: Remove ease out
//TODO: Fix overflow not working

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

const bg = "bg-preloader-pattern bg-repeat"
export default function PreLoader() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-[110vh] bg-contain flex flex-col items-center justify-center text-center bg-black z-40 font-PPMonumentBlack select-none rounded-b-[4rem]"
      {...anim(SECTION_VARIANTS)}
    >
      <motion.div className="overflow-hidden" {...anim(OVERFLOW_VARIANTS)}>
        <motion.h1
          className="relative text-3xl md:text-6xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          {...anim(TEXT_VARIANTS, 0)}
        >
          Zen Tattoo
        </motion.h1>
      </motion.div>
      <motion.div className="overflow-hidden" {...anim(OVERFLOW_VARIANTS)}>
        <motion.h1
          className="relative text-3xl md:text-6xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          {...anim(TEXT_VARIANTS, 0.1)}
        >
          2024®
        </motion.h1>
      </motion.div>
    </motion.div>
  )
}
