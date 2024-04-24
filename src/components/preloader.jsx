"use client"
import { motion } from "framer-motion"

function animate(variants, custom = null) {
  return {
    initial: "initial",
    animate: "animate",
    variants,
    custom,
  }
}

//TODO: Remove ease out
//TODO: Fix overflow not working

const SECTION_VARIANTS = {
  initial: { y: 0, overflow: "hidden" },
  animate: {
    y: [0, 0, "-100%"], //! 0, 0.5, 1 --> 8/2 = 4s boyunca 0'da kalacak
    overflow: "visible",
    transition: {
      duration: 3.4,
      ease: [0.64, 0, 0.78, 0],
    },
  },
}

const easeOut = [0.22, 1, 0.36, 1]
const easeInOutCubic = [0.65, 0, 0.35, 1]

const TEXT_VARIANTS = {
  initial: { y: "125%", opacity: 1, scale: 1 },
  animate: (i) => ({
    y: ["125%", "0%", "0%", "-400%"],
    opacity: [1],
    scale: [1],
    transition: {
      delay: i,
      duration: 4,
      ease: [0.35, 0, 0.35, 1],
      times: [0, 0.1, 0.5, 0.75, 1],
    },
  }),
}

export default function PreLoader() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-contain flex flex-col items-center justify-center text-center bg-preloader-pattern bg-repeat z-40 font-PPMonumentBlack"
      {...animate(SECTION_VARIANTS)}
    >
      <div className="overflow-hidden">
        <motion.h1
          className="relative text-8xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          {...animate(TEXT_VARIANTS, 0)}
        >
          Zen Tattoo
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h1
          className="relative text-8xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          {...animate(TEXT_VARIANTS, 0.1)}
        >
          2024®
        </motion.h1>
      </div>
    </motion.div>
  )
}
