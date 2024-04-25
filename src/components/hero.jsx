"use client"
import { useScroll, motion, useTransform } from "framer-motion"
import React, { useRef } from "react"
import Image from "next/image"
import { anim } from "@/utils/anim"
import { PRELOADER_DURATION } from "./preloader"

const delay = -0.75

const DESCRIPTION_TEXT = `At our tattoo studio, we offer a unique experience with experienced artists, personalized designs, and high-quality equipment. Whether you're looking to get your first tattoo or adding to your collection, our team is dedicated to bringing your vision to life.`

export default function Hero() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const Y_VARIANTS = {
    initial: { y: "200%" },
    animate: (i) => ({
      y: 0,
      transition: {
        delay: i + PRELOADER_DURATION,
        duration: 1,
        ease: [0, 0.55, 0.45, 1],
      },
    }),
  }
  const PLANTS_X_VARIANTS = {
    initial: { opacity: 0, x: "100%" },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i + PRELOADER_DURATION, // 3 - (-0.75 + 0.3)
        duration: 1,
        ease: [0, 0.55, 0.45, 1],
      },
    }),
  }

  //TODO: Fix plant causing overflow-x
  const opacity = useTransform(scrollYProgress, [0.65, 0.85], [1, 0])
  const TEXT_Y = useTransform(scrollYProgress, [0.65, 0.85], [1, 0])
  const PLANTS_X = useTransform(scrollYProgress, [0.65, 0.85], [1, 0])
  return (
    <section
      id="hero"
      className={`font-PPMonumentBlack relative min-h-[200vh]
        `}
      ref={targetRef}
    >
      <motion.div
        className="sticky top-0 h-screen flex px-10 md:px-0 justify-center items-center"
        style={{ opacity }}
      >
        <div className="overflow-hidden absolute w-full h-full">
          <motion.div
            className="absolute right-0 top-0"
            {...anim(PLANTS_X_VARIANTS, delay)}
          >
            <Image
              src="/images/plants.png"
              alt="Plants"
              width={400}
              height={500}
              className="-rotate-90 translate-x-24 relative -z-10 object-scale-down"
            />
          </motion.div>
        </div>
        <div className="max-w-screen-md">
          <div className="overflow-hidden">
            <motion.h1 {...anim(Y_VARIANTS, delay + 1.25)}>
              Experience the artistry of Zen Tattoo.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p className="font-PPMonumentLight mt-4 text-balance text-start text-sm md:text-base overflow-hidden">
              {DESCRIPTION_TEXT.split(" ").map((word, i) => {
                return (
                  <React.Fragment key={`dsc__${i}`}>
                    <span className="relative inline-flex overflow-hidden">
                      <motion.span {...anim(Y_VARIANTS, delay + 1.2)}>
                        {word}
                      </motion.span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                  </React.Fragment>
                )
              })}
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 -translate-y-2 overflow-hidden">
          <motion.h1
            className="text-4xl text-right md:text-left md:text-8xl uppercase"
            {...anim(Y_VARIANTS, delay)}
          >
            Zen Tattoo
          </motion.h1>
        </div>
      </motion.div>
    </section>
  )
}
