"use client"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import { useRef } from "react"
import Quality1Image from "@/../public/images/qualities/1.webp"
import Quality2Image from "@/../public/images/qualities/2.webp"
import Quality3Image from "@/../public/images/qualities/3.webp"
import Quality4Image from "@/../public/images/qualities/4.webp"
import Quality5Image from "@/../public/images/qualities/5.webp"

const images = [
  Quality1Image,
  Quality2Image,
  Quality3Image,
  Quality4Image,
  Quality5Image,
]

const qualities = [
  {
    title: "Whatever You Want",
    content:
      "We offer a wide range of services to meet your unique tattoo needs. From custom designs to cover-ups and touch-ups, our talented artists are here to bring your vision to life. Top-notch quality and customer satisfaction are our top priorities.",
  },
  {
    title: "Top Quality For: YOU",
    content:
      "We understand the importance of getting a tattoo that truly reflects you. That’s why we use only the highest quality equipment and handcrafted inks to ensure every tattoo is flawless. Your experience is our priority, and we strive to make it unforgettable.",
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
    title: "VR, Kindle, Drink & Music",
    content:
      "We offer VR glasses to watch your favorite movie or series, and e-readers to read your favorite book while getting inked. You can also choose from a wide range of music and drinks to enjoy like it's your home.",
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
      className="sticky top-0 h-[80vh] flex justify-center py-sectionY-half-m md:py-sectionY-half"
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
              src={images[index]}
              className="object-cover rounded-t-2xl"
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
          <h3 className="mt-4 mb-2 text-center">{quality.title}</h3>
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

  return (
    <section
      id="qualities"
      className="relative w-full bg-white border-neutral-400 border-y border-b-0 rounded-3xl md:rounded-[4rem] z-20"
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
