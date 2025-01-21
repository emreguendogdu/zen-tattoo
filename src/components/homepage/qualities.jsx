"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const qualities = [
  {
    title: "Whatever You Want",
    content:
      "We offer a wide range of services to meet your unique tattoo needs. From custom designs to cover-ups and touch-ups, our talented artists are here to bring your vision to life.",
  },
  {
    title: "Top Quality For: YOU",
    content:
      "We know how a bad tattoo feels. Thus, we offer you a special experience with high quality equipments and handmade inks.",
  },
  {
    title: "Designing Your New Buddy",
    content:
      "Our experienced artists specialize in creating one-of-a-kind custom tattoo designs that reflect your individual style and personality. We work closely with you to create your new lifelong buddy.",
  },
  {
    title: "Cover-Ups? No Worries.",
    content:
      "You want to transform or enhance your tat into next level? No worries. We offer the same creative, aesthetic guidance as we do with your tattoos. Book an appointment and we'll work on your next ink.",
  },
  {
    title: "Have Fun: VR Glasses & Kindles",
    content:
      "Wait.. what's with the VRs in tattoo studio? Well, to make you the relaxest, we offer VR glasses to watch your favorite movie or series, and e-readers to read your favorite book while getting inked. Besides that, you can choose from a wide range of music and drinks to make yourself feel at home.",
  },
]

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
      className="sticky top-0 h-screen flex justify-center items-center"
      ref={qualityTargetRef}
    >
      <motion.div
        className="relative md:w-[1024px] md:h-fit border border-neutral-400 pb-4 rounded-2xl bg-white text-black"
        style={{ scale: CARD_SCALE, top: `calc(-5vh + ${(index + 1) * 25}px)` }}
      >
        <div className="relative h-80 w-full overflow-hidden">
          <motion.div
            className="relative w-full h-full"
            style={{ scale: IMAGE_SCALE }}
          >
            <Image
              src={`/images/_${index + 1}.webp`}
              className="object-cover rounded-t-2xl"
              alt=""
              aria-hidden
              fill
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="mt-4">{quality.title}</h3>
          <p className="max-w-screen-md text-lg text-center">
            {quality.content}
          </p>
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

  // TODO: Odd idx numbers not visible while scrolling

  return (
    <section
      id="qualities"
      className="relative w-full bg-white border-neutral-400 border-y border-b-0 rounded-[4rem] -my-[100vh] z-20"
      ref={targetRef}
    >
      <div className="flex flex-col">
        {qualities.map((quality, i) => {
          const targetScale = 1 - (qualities.length - i) * 0.05
          return (
            <Quality
              quality={quality}
              index={i}
              key={`quality-${i}`}
              globalProgress={scrollYProgress}
              range={[i * (1 / qualities.length), 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </section>
  )
}
