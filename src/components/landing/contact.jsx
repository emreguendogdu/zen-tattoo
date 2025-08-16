"use client"

import Image from "next/image"
import FrameImage from "@/components/images/contact-frame-img.webp"
import { useDarkSectionRef } from "@/context/HeaderColorContext"
import Footer from "./footer"
import Button from "../ui/Button"
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "motion/react"
import { useState, useRef } from "react"

export default function Contact() {
  const sectionRef = useDarkSectionRef()
  const containerRef = useRef(null)
  const [titleAnimationCompleted, setTitleAnimationCompleted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  const imageParallaxScale = useTransform(scrollYProgress, [0, 1], [1.4, 1])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest)
  })

  return (
    <>
      <div className="relative z-50">
        <section
          ref={sectionRef}
          id="contact"
          className="relative px-sectionX-m md:px-sectionX pb-8 w-full md:h-[85dvh] h-full min-h-[85dvh] -mt-[75dvh] bg-white text-black rounded-t-3xl md:rounded-t-[4rem] z-60"
        >
          <div
            className="relative w-full h-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-32 sm:gap-32 xl:gap-32 overflow-hidden py-4 sm:py-8 lg:py-16"
            ref={containerRef}
          >
            <div className="flex flex-col w-fit h-full sm:justify-start gap-2 md:gap-8 overflow-hidden order-2 md:order-1">
              <AnimatedTitle
                targetRef={sectionRef}
                onAnimationComplete={setTitleAnimationCompleted}
              />
              <Button
                href="https://www.emregnd.com/"
                target="_blank"
                onOpacityStart={titleAnimationCompleted}
              >
                Book Now
              </Button>
            </div>

            <div className="relative w-full h-[300px] md:w-[40%] md:h-full order-1 md:order-2 overflow-hidden">
              <MotionImage
                src={FrameImage}
                alt="Man making tattoo"
                className="object-cover rounded-lg"
                placeholder="blur"
                loading="lazy"
                decoding="async"
                style={{
                  scale: imageParallaxScale,
                }}
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAM0lEQVR4nAEoANf/ANvz9OX//wANCQDr7eJiYF89T08Aipear6ytnq2nADBFQxkqKBUmI6kvEahy3xmeAAAAAElFTkSuQmCC"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

const titleText = "Let's bring your vision to life"

const AnimatedTitle = ({ targetRef, onAnimationComplete }) => {
  const [animatedChars, setAnimatedChars] = useState(new Set())

  const titleRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center end", "98% end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalChars = titleText.replace(/\s/g, "").length
    const currentCharIndex = Math.floor(latest * totalChars)

    // Reset animation state when scrolling away (progress < 0.1)
    if (latest < 0.1) {
      setAnimatedChars(new Set())
      if (onAnimationComplete) {
        onAnimationComplete(false)
      }
      return
    }

    const newAnimatedChars = new Set()
    for (let i = 0; i < currentCharIndex; i++) {
      newAnimatedChars.add(i)
    }
    setAnimatedChars(newAnimatedChars)

    // Check if animation is complete
    if (currentCharIndex >= totalChars && onAnimationComplete) {
      onAnimationComplete(true)
    }
  })

  const words = titleText.split(" ")
  let lineBreakIndices = [2, 5] // after "Let's bring" and "your vision"
  let charIndex = 0

  return (
    <motion.h2 ref={titleRef} className="h2 w-fit text-left">
      {words.map((word, i) => {
        const chars = Array.from(word)
        const wordSpan = (
          <motion.span
            key={`word-${i}`}
            className="inline-block mr-2 align-middle"
          >
            {chars.map((char, j) => {
              const isAnimated = animatedChars.has(charIndex)
              charIndex++
              return (
                <motion.span
                  key={`char-${i}-${j}`}
                  className="inline-block align-middle"
                  animate={{
                    opacity: isAnimated ? 1 : 0.2,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {char}
                </motion.span>
              )
            })}
          </motion.span>
        )
        const shouldBreak = lineBreakIndices.includes(i)
        return (
          <span key={`word-wrap-${i}`}>
            {wordSpan}
            {shouldBreak && <br />}
          </span>
        )
      })}
    </motion.h2>
  )
}

const MotionImage = motion.create(Image)
