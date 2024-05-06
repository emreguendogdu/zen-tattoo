"use client"

import {
  useScroll,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
} from "framer-motion"
import { useRef, useState } from "react"
import { Heart } from "./icons/heart"
import { Diamond } from "./icons/diamond"
import { anim } from "@/utils/anim"
const firstTitle = "Who We Are"
const firstText = `Our journey, which began in a small sculpture workshop back in 2002, has evolved ever since we crossed paths with the art of tattooing in 2005. From Istanbul to Izmir, we have been passionately sharing the art of tattooing with enthusiasts across the regions. With a dedication to quality craftsmanship, we strive to deliver excellence in every design we create. Whether you're seeking intricate detail or bold statements, our team is committed to bringing your vision to life on your skin. Get in touch with us to experience the fusion of artistry and professionalism in the world of tattoos.`
const secondTitle = "Our Mission"
const secondText = `Our mission is to create a safe and welcoming space for tattoo enthusiasts to explore their creativity. We believe that tattoos are more than just ink on skin; they are a form of self-expression and art. Our team of talented artists is dedicated to providing you with the highest quality tattoos that reflect your unique personality and style. Whether you're looking for a small, delicate design or a large, intricate piece, we have the skills and experience to bring your vision to life. We are committed to providing you with a positive and memorable tattoo experience that you will cherish for a lifetime.`

export default function About() {
  const [secondPart, setSecondPart] = useState(false)
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    return latest < 0.5 ? setSecondPart(false) : setSecondPart(true)
  })

  const backgroundImage = useMotionTemplate`url('${
    secondPart ? "/images/dogmakingtattoo.gif" : "/images/manmakingtattoo.gif"
  }')`

  const ICON_VARIANTS = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  }
  const TEXT_VARIANTS = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  }

  return (
    <section
      ref={targetRef}
      className="min-h-[400vh] w-full px-8 [&_h1]:font-PPMonumentBlack my-24"
    >
      <div className="sticky top-0 flex pt-32">
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="basis-[10%] hidden md:block">
            {!secondPart ? (
              <motion.div key={secondPart} {...anim(ICON_VARIANTS)}>
                <Heart width="96px" height="96px" style={{ color: "red" }} />
              </motion.div>
            ) : (
              <motion.div key={secondPart} {...anim(ICON_VARIANTS)}>
                <Diamond
                  width="96px"
                  height="96px"
                  fill="rgba(0, 0, 255, 0.6)"
                />
              </motion.div>
            )}
          </div>
          <div className="md:basis-1/3 relative min-h-[650px] overflow-hidden">
            <motion.div
              className={`bg-[url('/images/manmakingtattoo.gif')] absolute top-0 md:top-auto md:relative w-full h-full bg-cover bg-center`}
              style={{ backgroundImage }}
            />
          </div>
          <motion.div key={secondPart} {...anim(TEXT_VARIANTS)} className="md:basis-1/3 absolute md:relative p-2 text-white md:p-0 md:text-black md:block">
            <h1 className="text-3xl md:text-4xl uppercase mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:drop-shadow-none">
              {!secondPart ? firstTitle : secondTitle}
            </h1>
            <p className="leading-relaxed text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:drop-shadow-none">
              {!secondPart ? firstText : secondText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
