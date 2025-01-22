"use client"

import { useScroll, motion, useMotionValueEvent } from "framer-motion"
import { useRef, useState } from "react"
import { Heart } from "../icons/heart"
import { Diamond } from "../icons/diamond"
import { anim } from "@/utils/utils"
import Image from "next/image"

export default function About() {
  const [firstPart, setFirstPart] = useState(true)
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center start"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setFirstPart(latest <= 0.5)
  })

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
      <div className="sticky top-0 flex pt-8 md:pt-32 px-sectionX-m md:pl-sectionX-m md:pr-sectionX">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 h-[70vh]">
          <div className="absolute brightness-75 md:brightness-100 bottom-8 -translate-y-1/2 right-sectionX -z-10 md:z-0 md:static md:translate-y-0">
            <motion.div
              key={firstPart}
              {...anim(ELEMENT_VARIANTS)}
              className="relative text-5xl md:text-8xl"
            >
              {firstPart ? <Heart /> : <Diamond />}
            </motion.div>
          </div>
          <div className="md:basis-1/3 relative h-[35vh] md:h-full overflow-hidden">
            <motion.div
              className={`relative w-full h-full`}
              key={firstPart}
              {...anim(ELEMENT_VARIANTS)}
            >
              <Image
                src="/images/manmakingtattoo.gif"
                fill
                className={`w-full h-full object-cover ${
                  firstPart && "invisible"
                }`}
                alt="Man making tattoo gif"
                unoptimized // As animated, it won't be optimized
              />
              <Image
                src="/images/dogmakingtattoo.gif"
                fill
                className={`w-full h-full object-cover ${
                  !firstPart && "invisible"
                }`}
                alt="A man disguised as a dog making tattoo gif"
                unoptimized // As animated, it won't be optimized
              />
              {/* TODO: set LazyLoadingImage, get first frames as blurred img */}
            </motion.div>
          </div>
          <motion.div
            key={firstPart}
            {...anim(ELEMENT_VARIANTS)}
            className="relative md:basis-1/2 md:flex-1 p-2 md:p-0 h-[65vh] md:h-auto [&_p]:text-justify flex flex-col gap-4"
          >
            <h2 className="text-center md:text-left drop-shadow-sm border-b border-b-neutral-300 pb-2 mb-0 w-fit">
              {firstPart ? "Our Mission" : "Meet the Team."}
            </h2>
            <div className="">
              {firstPart ? (
                <p>
                  At Zen Tattoo, we turn your ideas into lasting works of art.
                  <strong>
                    {" "}
                    Every tattoo is designed with care, reflecting your
                    personality, story, and style.{" "}
                  </strong>
                  Our skilled artists are dedicated to precision, creativity,
                  and craftsmanship, ensuring that each piece is as unique as
                  the person wearing it. From intricate designs to minimalist
                  details, we bring your vision to life with{" "}
                  <strong>expertise and passion.</strong> We’ve created a safe,
                  welcoming space where you can feel at ease throughout the
                  process. From consultation to the final result, your comfort
                  and satisfaction are our top priorities. Let us help you
                  create something meaningful{" "}
                  <strong>— art that stays with you.</strong>
                </p>
              ) : (
                <p>
                  Our journey, which began in a small sculpture workshop back in
                  2002, has evolved ever since we crossed paths with the art of
                  tattooing in 2005. From Istanbul to Izmir, we have been
                  passionately sharing the art of tattooing with enthusiasts
                  across the regions. With a dedication to quality artisanship,{" "}
                  <strong>
                    we strive to deliver excellence in every design we create.
                  </strong>{" "}
                  Whether you're seeking intricate detail or bold statements,
                  our team is committed to bringing your vision to life on your
                  skin. Get in touch with us to experience the fusion of
                  artistry and professionalism in the world of tattoos.
                </p>
              )}
            </div>
            <ul className="relative w-full h-full flex flex-col justify-end gap-2 [&>li>p]:about-value-text">
              {firstPart ? (
                <>
                  <li>
                    <p>✦ Love</p>
                  </li>
                  <li>
                    <p>✦ Passion</p>
                  </li>
                  <li>
                    <p>✦ Expertise</p>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <p>✦ Vision</p>
                  </li>
                  <li>
                    <p>✦ Details</p>
                  </li>
                  <li>
                    <p>✦ Artisanship</p>
                  </li>
                </>
              )}
            </ul>
            <div className="absolute bottom-0 right-0">
              <p className="text-neutral-400 text-sm font-display font-thin tracking-normal">
                {firstPart ? 1 : 2}/2
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
