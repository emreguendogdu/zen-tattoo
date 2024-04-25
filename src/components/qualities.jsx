"use client"
import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

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

export default function Qualities() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0", "-400%"])
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 0.5 ? "relative" : "sticky"
  })

  return (
    <section id="qualities">
      <div
        className="px-8 py-8 w-full min-h-[250vh] bg-white border-gray-400 border-t-[1px] border-b-0 rounded-[4rem]"
        ref={targetRef}
      >
        <motion.div className="flex flex-col">
          {qualities.map((quality, index) => {
            return (
              <motion.div
                key={index}
                className="flex flex-col justify-center items-center w-full min-h-160 sticky top-0 bg-white text-black"
                style={{ position }}
              >
                <div className="relative min-h-80 w-full max-w-screen-md">
                  <Image
                    src={`/images/_${index + 1}.jpg`}
                    className="object-cover"
                    alt=""
                    aria-hidden
                    fill={true}
                  />
                </div>
                <h1 className="text-2xl md:text-4xl mt-6 mb-3 font-PPMonumentBlack uppercase">
                  {quality.title}
                </h1>
                <p className="max-w-screen-md text-lg pb-12">
                  {quality.content}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
