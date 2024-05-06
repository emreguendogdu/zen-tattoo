"use client"
import { useScroll } from "framer-motion"
import { useRef } from "react"
import Quality from "./quality"

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
    offset: ["start start", "end end"],
  })

  return (
    <section
      id="qualities"
      className="mt-[50vh] relative px-8 py-8 w-full bg-white border-gray-400 border-t-[1px] border-b-0 rounded-[4rem] pt-24"
      ref={targetRef}
    >
      <div className="flex flex-col">
        {qualities.map((quality, i) => {
          const targetScale = 1 - (qualities.length - i) * 0.05
          return (
            <Quality
              quality={quality}
              index={i}
              key={i}
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
