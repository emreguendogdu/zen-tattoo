"use client"

import Image from "next/image"
import FrameImage from "@/components/images/contact-frame-img.webp"
import { useDarkSectionRef } from "@/context/HeaderColorContext"
import Footer from "./footer"
import Button from "../ui/Button"
import { motion } from "motion/react"

export default function Contact() {
  const sectionRef = useDarkSectionRef()

  return (
    <>
      <div className="relative z-50">
        <section
          ref={sectionRef}
          id="contact"
          className="relative px-sectionX-m md:px-sectionX pb-8 w-full md:h-[85dvh] h-full -mt-[75dvh] bg-white text-black rounded-t-3xl md:rounded-t-[4rem] z-60"
        >
          <div className="relative w-full h-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-32 sm:gap-32  xl:gap-32 overflow-hidden py-4">
            <div className="flex flex-col w-fit h-full md:justify-end gap-2 md:gap-8 overflow-hidden order-2 md:order-1">
              <AnimatedTitle />
              <Button
                href="https://www.linkedin.com/in/emregnd/"
                target="_blank"
              >
                Book Now
              </Button>
            </div>

            <div className="relative w-full h-[300px] md:w-[40%] md:h-full order-1 md:order-2">
              <Image
                src={FrameImage}
                alt="Man making tattoo"
                className="object-cover rounded-lg"
                placeholder="blur"
                loading="lazy"
                decoding="async"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAM0lEQVR4nAEoANf/ANvz9OX//wANCQDr7eJiYF89T08Aipear6ytnq2nADBFQxkqKBUmI6kvEahy3xmeAAAAAElFTkSuQmCC"
                fill
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

const AnimatedTitle = () => {
  const words = titleText.split(" ")
  let lineBreakIndices = [2, 5] // after "Let's bring" and "your vision"
  let wordIndex = 0

  return (
    <motion.h2
      className="h2 w-fit text-left"
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {words.map((word, i) => {
        const chars = Array.from(word)
        const wordSpan = (
          <motion.span
            key={`word-${i}`}
            className="inline-block mr-2 align-middle"
          >
            {chars.map((char, j) => (
              <motion.span
                key={`char-${i}-${j}`}
                className="inline-block align-middle"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        )
        wordIndex++
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
