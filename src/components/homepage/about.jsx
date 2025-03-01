"use client"

import { useScroll, motion, useMotionValueEvent } from "framer-motion"
import { useRef, useState, useCallback } from "react"
import { Heart } from "../icons/heart"
import { Diamond } from "../icons/diamond"
import { anim } from "@/utils/utils"
import Image from "next/image"

const ELEMENT_VARIANTS = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
}

const CONTENT = [
  {
    title: "Our Mission",
    icon: <Heart />,
    imageSrc: "/images/manmakingtattoo.gif",
    imageAlt: "Man making tattoo gif",
    description: (
      <>
        At Zen Tattoo, we turn your ideas into lasting works of art.
        <strong>
          {" "}
          Every tattoo is designed with care, reflecting your personality,
          story, and style.{" "}
        </strong>
        Our skilled artists are dedicated to precision, creativity, and
        craftsmanship, ensuring that each piece is as unique as the person
        wearing it. From intricate designs to minimalist details, we bring your
        vision to life with <strong>expertise and passion.</strong> Your comfort
        and satisfaction are our top priorities. Let&apos;s create something
        meaningful <strong>— art that stays with you.</strong>
      </>
    ),
    values: ["Love", "Passion", "Expertise"],
  },
  {
    title: "Meet the Team",
    icon: <Diamond />,
    imageSrc: "/images/dogmakingtattoo.gif",
    imageAlt: "A man disguised as a dog making tattoo gif",
    description: (
      <>
        Our journey began in a small sculpture workshop back in 2002, and has
        evolved ever since we crossed paths with the art of tattooing in 2005.
        From Istanbul to Izmir, we&apos;ve been passionately sharing our art
        with enthusiasts across the regions. With a dedication to quality
        artisanship,{" "}
        <strong>
          we strive to deliver excellence in every design we create.
        </strong>{" "}
        Whether you&apos;re seeking intricate detail or bold statements, our
        team is committed to bringing your vision to life on your skin.
      </>
    ),
    values: ["Vision", "Details", "Artisanship"],
  },
]

export default function About() {
  const [index, setIndex] = useState(0)
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center start"],
  })

  useMotionValueEvent(
    scrollYProgress,
    "change",
    useCallback((latest) => setIndex(latest <= 0.5 ? 0 : 1), [])
  )

  const { title, icon, imageSrc, imageAlt, description, values } =
    CONTENT[index]

  return (
    <section
      ref={targetRef}
      className="relative min-h-[400dvh] w-full -my-[100dvh] z-10 bg-white border-black border"
    >
      <div className="sticky top-0 h-screen flex pt-12 md:pt-32 px-sectionX-m md:pl-sectionX-m md:pr-sectionX">
        <div className="relative w-full flex flex-col md:flex-row gap-2 md:gap-8 md:h-[70vh]">
          <div className="flex justify-center md:absolute md:right-0 md:top-0">
            <motion.div
              key={index}
              {...anim(ELEMENT_VARIANTS)}
              className="relative text-5xl md:text-5xl"
            >
              {icon}
            </motion.div>
          </div>
          <div className="md:basis-1/2 relative h-full max-h-[300px] md:max-h-none overflow-hidden">
            <motion.div key={index} {...anim(ELEMENT_VARIANTS)}>
              <Image
                src={imageSrc}
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                fill
                className="w-full h-full object-cover"
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                unoptimized
              />
            </motion.div>
          </div>
          <motion.div
            key={index}
            {...anim(ELEMENT_VARIANTS)}
            className="relative md:basis-1/2 md:flex-1 p-2 md:p-0 h-full md:h-auto [&_p]:text-justify flex flex-col gap-1 md:gap-4"
          >
            <h2 className="self-center md:self-baseline drop-shadow-sm border-b border-b-neutral-300 pb-1 md:pb-2 mb-0 w-fit">
              {title}
            </h2>
            <div className="flex-1">
              <p className="text-[0.925rem] md:text-base">{description}</p>
            </div>
            <ul className="absolute bottom-0 md:bottom-auto md:relative w-full flex gap-4 justify-start md:flex-col md:justify-end md:gap-2 [&>li>p]:about-value-text">
              {values.map((value) => (
                <li key={value}>
                  <p>✦ {value}</p>
                </li>
              ))}
            </ul>
            <div className="absolute bottom-0 right-0">
              <p className="text-neutral-400 text-xs md:text-sm font-display font-thin tracking-normal">
                {index + 1}/2
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
