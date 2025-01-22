"use client"

import { useSectionInView } from "@/context/SectionInViewContext"
import { motion } from "framer-motion"
import { useScroll } from "framer-motion"

export default function ScrollTracker() {
  const { scrollYProgress } = useScroll()
  const { galleryAndContactIsInView } = useSectionInView()

  return (
    <motion.div
      id="scroll-tracker"
      className={`fixed bottom-0 left-0 bg-black w-screen h-2 z-[50] origin-bottom-left ${
        galleryAndContactIsInView ? "bg-neutral-900" : "bg-black"
      }`}
      //   only y
      style={{
        scaleX: scrollYProgress,
      }}
      aria-hidden
    />
  )
}
