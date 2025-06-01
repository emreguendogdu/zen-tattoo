"use client"

import { useScroll, useTransform, motion } from "motion/react"
import { forwardRef, useRef } from "react"
import { Heart } from "../icons/heart"
import { Diamond } from "../icons/diamond"
import Image from "next/image"
import { useDarkSectionRef } from "@/context/HeaderColorContext"
import useIsMobile from "@/hooks/useIsMobile"

import AboutImage1 from "@/../public/images/about/1.webp"
import AboutImage2 from "@/../public/images/about/2.jpg"

const YParallaxAmount = 128 - 50
const CONTENT = [
  {
    title: "Mission",
    icon: <Heart className="w-[0.75em] h-[0.75em] md:h-[1em] md:w-[1em]" />,
    imageSrc: AboutImage1,
    blurDataURL: "L8D9#O~q00-;ofD%j[_39FM{Rjj[",
    description: (
      <>
        At Zen Tattoo, we turn your ideas into lasting works of art.
        <strong>
          {" "}
          Every tattoo is designed with care, reflecting your personality,
          story, and style.{" "}
        </strong>
        <br />
        <br />
        Our skilled artists are dedicated to precision, creativity, and
        craftsmanship, ensuring that each piece is as unique as the person
        wearing it.
        <br />
        <br />
        From intricate designs to minimalist details, we bring your vision to
        life with <strong>expertise and passion.</strong> Let&apos;s create
        something meaningful <strong>— art that stays with you.</strong>
      </>
    ),
    values: ["Love", "Passion", "Expertise"],
  },
  {
    title: "Dedication",
    icon: <Diamond className="w-[0.75em] h-[0.75em] md:h-[1em] md:w-[1em]" />,
    imageSrc: AboutImage2,
    blurDataURL: "L57w?1IUD%Rj_34nay?b9FD%j[~q",
    description: (
      <>
        Our journey began in a small sculpture workshop back in 2002, and has
        evolved ever since we crossed paths with the art of tattooing in 2005.
        <br />
        <br />
        From Istanbul to Izmir, we&apos;ve been passionately sharing our art
        with enthusiasts across the regions.
        <br />
        <br />
        With a dedication to quality artisanship,{" "}
        <strong>
          we strive to deliver excellence in every design we create.
        </strong>{" "}
        Whether you&apos;re seeking intricate detail or bold statements,
        we&apos;re committed to make your vision come to life.
      </>
    ),
    values: ["Vision", "Details", "Artisanship"],
  },
]

export default function About() {
  const sectionRef = useDarkSectionRef()
  const parallaxRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end end"],
  })

  const isMobile = useIsMobile()
  // Parallax for each block
  const y1 = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0px", isMobile ? `-${YParallaxAmount / 2}px` : `-${YParallaxAmount}px`]
  )
  const y2 = useTransform(
    scrollYProgress,
    [0.25, 1],
    ["0px", isMobile ? `-${YParallaxAmount}px` : `-${YParallaxAmount * 2}px`]
  )

  const imgScale1 = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const imgScale2 = useTransform(scrollYProgress, [0.5, 1.5], [1, 1.2])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[250dvh] md:h-[180dvh] bg-black text-white z-10 py-sectionY-half-m md:py-sectionY-half -mt-[100dvh]"
      aria-label="About Zen Tattoo"
      tabIndex={0}
    >
      <div
        ref={parallaxRef}
        className="w-full flex flex-col gap-sectionY-m-half md:gap-sectionY-half px-sectionX-m md:px-sectionX"
      >
        {CONTENT.map((item, index) => (
          <motion.div
            key={index}
            style={{ y: index === 0 ? y1 : y2 }}
            className="w-full flex flex-col md:flex-row gap-8 h-[120dvh] md:h-[75dvh]"
          >
            <div
              className="relative h-full w-full md:basis-1/2 overflow-hidden"
              style={{ order: isMobile ? 1 : index === 0 ? 1 : 2 }}
            >
              <MotionImage
                src={item.imageSrc}
                placeholder="blur"
                blurDataURL={item.blurDataURL}
                fill
                className="object-cover rounded-lg"
                style={{ scale: index === 0 ? imgScale1 : imgScale2 }}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div
              className="flex flex-col md:basis-1/2 gap-4 justify-between"
              style={{ order: index === 0 ? 2 : 1 }}
            >
              <div
                className="flex flex-col gap-4 w-full"
                style={{
                  alignItems: index === 0 ? "flex-start" : "flex-end",
                  justifyContent: isMobile && index === 0 ? "start" : "end",
                }}
              >
                <div className="flex justify-between gap-4 items-center w-full">
                  <h2
                    className="text-2xl font-bold w-fit md:self-start mb-0"
                    style={{ order: index === 0 ? 1 : 2 }}
                  >
                    {item.title}
                  </h2>
                  <div
                    className="text-5xl self-center md:self-start text-neutral-500"
                    aria-label="Mission icon"
                    style={{ order: index === 0 ? 2 : 1 }}
                  >
                    {item.icon}
                  </div>
                </div>
                <p
                  className="text-justify md:max-w-lg"
                  style={{
                    textAlign: index === 0 ? "left" : "right",
                    alignSelf: index === 0 ? "flex-start" : "flex-end",
                  }}
                >
                  {item.description}
                </p>
              </div>
              <ul
                className="flex gap-4 md:gap-2 md:flex-col mt-2 w-full"
                style={{
                  alignItems:
                    !isMobile && index === 0 ? "flex-start" : "flex-end",
                  justifyContent: isMobile && index === 0 ? "start" : "end",
                }}
              >
                {item.values.map((value) => (
                  <li key={value}>
                    <p className="about-value-text">✦ {value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const motionImageRef = forwardRef(function ExoticImageWrapper(props, ref) {
  return <Image {...props} ref={ref} alt="Tattoo related" />
})

const MotionImage = motion(motionImageRef)
