"use client"

import {
  useScroll,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
} from "framer-motion"
import { useRef, useState } from "react"
import { Heart } from "../icons/heart"
import { Diamond } from "../icons/diamond"
import { anim } from "@/utils/anim"
import Image from "next/image"

const copy = {
  first: {
    title: "Who We Are",
    text: `Our journey, which began in a small sculpture workshop back in 2002, has evolved ever since we crossed paths with the art of tattooing in 2005. From Istanbul to Izmir, we have been passionately sharing the art of tattooing with enthusiasts across the regions. With a dedication to quality craftsmanship, we strive to deliver excellence in every design we create. Whether you're seeking intricate detail or bold statements, our team is committed to bringing your vision to life on your skin. Get in touch with us to experience the fusion of artistry and professionalism in the world of tattoos.`,
  },
  second: {
    title: "Our Mission",
    text: `Our mission is to create a safe and welcoming space for tattoo enthusiasts to explore their creativity. We believe that tattoos are more than just ink on skin; they are a form of self-expression and art. Our team of talented artists is dedicated to providing you with the highest quality tattoos that reflect your unique personality and style. Whether you're looking for a small, delicate design or a large, intricate piece, we have the skills and experience to bring your vision to life. We are committed to providing you with a positive and memorable tattoo experience that you will cherish for a lifetime.`,
  },
}
export default function About() {
  const [secondPart, setSecondPart] = useState(false)
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center start"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest)
    setSecondPart(latest >= 0.5)
  })

  const backgroundImage = useMotionTemplate`url('${
    secondPart ? "/images/dogmakingtattoo.gif" : "/images/manmakingtattoo.gif"
  }')`

  const ELEMENT_VARIANTS = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  }

  return (
    <section
      ref={targetRef}
      className="relative min-h-[400vh] w-full -my-[100vh] z-10 bg-white border-black border"
    >
      <div className="sticky top-0 flex pt-8 md:pt-32 px-sectionX-m md:px-sectionX">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="basis-[10%] absolute brightness-75 md:brightness-100 bottom-8 -translate-y-1/2 right-sectionX -z-10 md:z-0 md:static md:translate-y-0">
            <motion.div
              key={secondPart}
              {...anim(ELEMENT_VARIANTS)}
              className="text-5xl md:text-8xl"
            >
              {!secondPart ? <Heart /> : <Diamond />}
            </motion.div>
          </div>
          <div className="md:basis-1/3 relative h-[35vh] md:min-h-[650px] overflow-hidden">
            <motion.div
              className={`relative w-full h-full`}
              key={secondPart}
              {...anim(ELEMENT_VARIANTS)}
            >
              {/* TODO: set LazyLoadingImage, get first frames as blurred img */}
              {!secondPart ? (
                <Image
                  src="/images/manmakingtattoo.gif"
                  fill
                  className={`w-full h-full object-cover ${
                    secondPart && invisible
                  }`}
                  unoptimized // As animated, it won't be optimized
                />
              ) : (
                <Image
                  src="/images/dogmakingtattoo.gif"
                  fill
                  className={`w-full h-full object-cover ${
                    !secondPart && invisible
                  }`}
                  unoptimized // As animated, it won't be optimized
                />
              )}
            </motion.div>
          </div>
          <motion.div
            key={secondPart}
            {...anim(ELEMENT_VARIANTS)}
            className="md:basis-[40%] p-2 md:p-0 md:block h-[65vh] md:h-auto"
          >
            <h2 className="text-center md:text-left drop-shadow-sm">
              {secondPart ? copy.second.title : copy.first.title}
            </h2>
            <p className="leading-relaxed md:text-lg text-justify md:text-left">
              {secondPart ? copy.second.text : copy.first.text}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
