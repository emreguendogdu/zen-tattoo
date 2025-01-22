"use client"
import { useScroll, motion, useTransform } from "framer-motion"
import React, { useRef } from "react"
import Image from "next/image"
import { anim } from "@/utils/utils"
import { PRELOADER_DURATION } from "../ui/preloader"

const delay = -0.75
const transition = (i) => ({
  delay: i + PRELOADER_DURATION,
  duration: 1,
  ease: [0, 0.55, 0.45, 1],
})

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
      transition: transition(i),
    }),
  }
  const PLANTS_X_VARIANTS = {
    initial: { opacity: 0, x: "100%" },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: transition(i),
    }),
  }
  const opacity = useTransform(scrollYProgress, [0.65, 0.85], [1, 0])

  return (
    <section id="hero" className="relative min-h-[250vh]" ref={targetRef}>
      <motion.div
        className="sticky top-0 h-screen flex px-2 md:px-0 justify-center items-center"
        style={{ opacity }}
      >
        <div className="overflow-hidden absolute inset-0">
          <motion.div
            className="absolute right-0 top-0"
            {...anim(PLANTS_X_VARIANTS, delay)}
          >
            <Image
              src="/images/plants.webp"
              alt="Plants"
              width={400}
              height={500}
              className="-rotate-90 translate-x-24 relative -z-10 object-scale-down"
              priority
              blurDataURL={`/images/lazy-loading/plants-small.webp`}
            />
          </motion.div>
        </div>
        <div className="max-w-screen-md flex flex-col gap-4">
          <div className="overflow-hidden">
            <motion.h1
              {...anim(Y_VARIANTS, delay + 0.75)}
              className="text-center mb-0"
            >
              Experience ink artistry.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p className="font-light text-balance md:text-base overflow-hidden text-center">
              {DESCRIPTION_TEXT.split(" ").map((word, i) => {
                return (
                  <React.Fragment key={`dsc__${i}`}>
                    <span className="relative inline-flex overflow-hidden">
                      <motion.span {...anim(Y_VARIANTS, delay + 0.7)}>
                        {word}
                      </motion.span>
                      <span className="inline-block">&nbsp;</span>
                    </span>
                  </React.Fragment>
                )
              })}
            </motion.p>
          </div>
          <div className="relative overflow-hidden flex justify-center items-center">
            <motion.svg
              width="40px"
              height="100%"
              viewBox="0 0 247 390"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 1.5,
              }}
              className="w-7 md:w-10 mb-2"
              {...anim(Y_VARIANTS, delay + 0.85)}
            >
              <path
                id="wheel"
                d="M123.359,79.775l0,72.843"
                className="fill-none stroke-black stroke-[30px] md:stroke-[20px] animate-scroll"
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                className="fill-none stroke-black stroke-[5px] md:stroke-[3px]"
              />
            </motion.svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-sectionX-m md:px-sectionX overflow-hidden">
          <div className="">
            {/* Display hours and minutes, and GMT + 3 */}
            <motion.p
              className="mb-2 text-left text-sm font-display font-light leading-loose"
              {...anim(Y_VARIANTS, delay)}
            >
              10AM - 8PM (mon - sat)
            </motion.p>
          </div>
          <motion.p
            className="h0 mb-0 text-right md:text-left"
            {...anim(Y_VARIANTS, delay)}
          >
            Zen Tattoo
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
