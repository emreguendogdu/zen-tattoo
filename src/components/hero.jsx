"use client"
import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Hero() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0.65, 0.85], [1, 0])
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
        <div className="absolute right-0 top-0 overflow-hidden">
          <Image
            src="/images/plants.png"
            alt="Plants"
            width={400}
            height={500}
            objectFit="scale-down"
            className="-rotate-90 translate-x-24 relative -z-10"
          />
        </div>
        <div className="max-w-screen-md">
          <h1>Experience the artistry of Zen Tattoo.</h1>
          <p className="font-PPMonumentLight mt-4 text-sm md:text-base">
            At our tattoo studio, we offer a unique experience with experienced
            artists, personalized designs, and high-quality equipment. Whether
            you&apos;re looking to get your first tattoo or adding to your
            collection, our team is dedicated to bringing your vision to life.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 -translate-y-2">
          <h1 className="text-4xl text-right md:text-left md:text-8xl uppercase">
            Zen Tattoo
          </h1>
        </div>
      </motion.div>
    </section>
  )
}
