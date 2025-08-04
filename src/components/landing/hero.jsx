"use client"
import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
} from "motion/react"
import React, { useRef } from "react"
import Image from "next/image"
import { anim, getDelay } from "@/utils/utils"
import { PRELOADER_DURATION } from "../ui/preloader"

import PlantsImage from "@/../public/images/plants.webp"

export const transition = {
  duration: 1,
  ease: [0, 0.55, 0.45, 1],
  delay: PRELOADER_DURATION,
}

const transitionWithChildren = (i) => ({
  ...transition,
  delay: i + PRELOADER_DURATION,
})

export const HEADER_VARIANTS = {
  initial: { y: "-100%" },
  animate: { y: 0, transition },
}

const H0_SCALE_VARIANTS = {
  initial: { scale: 1.077 },
  animate: { scale: 1, transition },
}

const Y_VARIANTS = {
  initial: { y: "200%" },
  animate: (i) => ({
    y: 0,
    transition: transitionWithChildren(i),
  }),
}
const PLANTS_X_VARIANTS = {
  initial: { opacity: 0, x: "100%" },
  animate: {
    opacity: 1,
    x: 0,
    transition,
  },
}

const DESCRIPTION_TEXT = `We offer a unique experience with experienced artists, personalized designs, and high-quality equipment. 

Whether you're looking to get your first tattoo or adding to your collection, our team is dedicated to bringing your vision to life.`

export default function Hero() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "80% end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest)
  })

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.9], [0, 50])

  return (
    <section id="hero" className="relative min-h-[200dvh]" ref={targetRef}>
      <motion.div
        className="sticky top-0 h-[100dvh] flex px-2 md:px-0 justify-center items-center"
        style={{ opacity }}
      >
        <div className="overflow-hidden absolute inset-0">
          <motion.div
            className="absolute right-0 top-0"
            {...anim(PLANTS_X_VARIANTS, getDelay("plants"))}
          >
            <motion.div
              initial={{ x: -5 }}
              animate={{ x: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: PRELOADER_DURATION + 0.2,
              }}
              className="relative -z-10"
              style={{
                opacity,
                scale,
                y,
              }}
            >
              <Image
                src={PlantsImage}
                alt="Plants"
                width={400}
                height={500}
                className="-rotate-90 translate-x-24 relative -z-10 object-scale-down"
                priority
                placeholder="blur"
              />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="max-w-screen-md flex flex-col gap-4"
          style={{ opacity, scale, y }}
        >
          <div className="overflow-hidden">
            <motion.h1
              {...anim(Y_VARIANTS, getDelay("title"))}
              className="text-center mb-0"
            >
              Experience ink artistry.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p className="font-light text-balance text-xs md:text-base overflow-hidden text-center">
              {DESCRIPTION_TEXT.split(" ").map((word, i) => {
                return (
                  <React.Fragment key={`dsc__${i}`}>
                    <span className="relative inline-flex overflow-hidden">
                      <motion.span
                        {...anim(Y_VARIANTS, getDelay("description"))}
                      >
                        {word}
                      </motion.span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                  </React.Fragment>
                )
              })}
            </motion.p>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 flex gap-4 justify-between items-end px-sectionX-m md:px-sectionX overflow-hidden">
          <motion.div
            className="relative mb-1 md:mb-2"
            style={{ opacity, scale, y }}
          >
            <motion.p
              className="text-left text-xs md:text-sm font-display font-light leading-loose w-full block md:hidden"
              {...anim(Y_VARIANTS, getDelay("address"))}
            >
              1923 N Michigan St, Plymouth, IN
            </motion.p>
            <div className="relative w-full md:w-80">
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/videos/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
          <motion.p
            className="h0 mb-0 text-right"
            style={{ opacity, scale, y }}
            {...anim(H0_SCALE_VARIANTS, getDelay("h0"))}
          >
            Zen Tattoo
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
