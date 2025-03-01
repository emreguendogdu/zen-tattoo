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
      className={`fixed bottom-0 right-0 bg-black h-screen w-1 md:w-2 z-[50] origin-top-right ${
        galleryAndContactIsInView ? "bg-neutral-900" : "bg-black"
      }`}
      //   only y
      style={{
        scaleY: scrollYProgress,
      }}
      aria-hidden
    />
  )
}
