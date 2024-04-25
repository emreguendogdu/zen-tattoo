"use client"

import Image from "next/image"
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion"
import { useRef } from "react"

export default function About() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const IMAGE = useTransform(scrollYProgress, (pos) => {
    return pos < 0.5
      ? "/images/manmakingtattoo.gif"
      : "/images/dogmakingtattoo.gif"
  })
  const backgroundImage = useMotionTemplate`url('${IMAGE}')`
  return (
    <section
      ref={targetRef}
      className="min-h-[400vh] w-full px-8 [&_h1]:font-PPMonumentBlack my-24"
    >
      <div className="sticky top-0 flex pt-32">
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="basis-[10%] hidden md:block"></div>
          <div className="md:basis-1/2 relative min-h-[650px] overflow-hidden">
            <motion.div
              className={`bg-[url('/images/manmakingtattoo.gif')] absolute top-0 md:top-auto md:relative w-full h-full bg-cover bg-center`}
              style={{ backgroundImage }}
            />
          </div>
          <div className="md:basis-1/3 absolute md:relative p-2 text-white md:p-0 md:text-black md:block">
            <h1 className="text-3xl md:text-4xl uppercase mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:drop-shadow-none">
              Who We Are
            </h1>
            <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:drop-shadow-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              doloremque? Exercitationem libero asperiores, eveniet repudiandae
              dolorem modi, fuga alias consequuntur sequi est veniam labore,
              illum quod cum accusantium ad tenetur?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
