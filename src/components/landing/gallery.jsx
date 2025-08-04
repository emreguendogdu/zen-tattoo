"use client"

import { useRef, useState, useLayoutEffect, useEffect } from "react"
import { useScroll, useTransform, motion } from "motion/react"
import Image from "next/image"
import { images } from "@/data/gallery"
import { useDarkSectionRef } from "@/context/HeaderColorContext"
import useIsMobile from "@/hooks/useIsMobile"

export default function Gallery() {
  const targetRef = useDarkSectionRef()
  const isMobile = useIsMobile()
  const ulRef = useRef(null)
  const [maxTranslate, setMaxTranslate] = useState(0)
  const [sectionHeight, setSectionHeight] = useState(0)

  useLayoutEffect(() => {
    if (!ulRef.current) return
    const totalWidth = ulRef.current.scrollWidth
    const viewportWidth =
      ulRef.current.parentElement?.clientWidth || window.innerWidth
    const computedMax = Math.max(0, totalWidth - viewportWidth)
    setMaxTranslate(computedMax)
    // Adjust height calculation to prevent empty space
    const baseHeight = window.innerHeight
    const scrollHeight = computedMax * 0.8 // Reduced multiplier
    setSectionHeight(baseHeight + scrollHeight)
  }, [isMobile])

  useEffect(() => {
    const handleResize = () => {
      if (!ulRef.current) return
      const totalWidth = ulRef.current.scrollWidth
      const viewportWidth =
        ulRef.current.parentElement?.clientWidth || window.innerWidth
      const computedMax = Math.max(0, totalWidth - viewportWidth)
      setMaxTranslate(computedMax)
      const baseHeight = window.innerHeight
      const scrollHeight = computedMax * 0.8
      setSectionHeight(baseHeight + scrollHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobile])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const X_FOR_HORIZONTAL_SCROLL = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -maxTranslate]
  )

  const SECTION_SCALE_END = useTransform(scrollYProgress, [0.75, 1], [1, 0.5])

  return (
    <>
      <motion.section
        ref={targetRef}
        id="gallery"
        className="relative bg-black px-2 -mt-[10dvh] z-30 overflow-hidden"
        style={{ height: sectionHeight }}
      >
        <motion.div
          className="sticky top-0 h-screen overflow-hidden pt-16 md:pt-24"
          style={{
            scale: SECTION_SCALE_END,
          }}
        >
          <h2 className="text-white md:mb-8">Gallery</h2>
          <motion.ul
            ref={ulRef}
            style={{ x: X_FOR_HORIZONTAL_SCROLL }}
            className="relative flex gap-2"
          >
            {Array.from({ length: images.length }).map((_, i) => (
              <li
                key={i}
                className="relative min-w-[80vw] md:min-w-[52vw] min-h-[75vh] h-full flex-shrink-0"
              >
                <Image
                  src={images[i]}
                  className="w-full h-full object-cover"
                  alt="Tattoo project"
                  aria-hidden
                  fill
                  placeholder="blur"
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>
    </>
  )
}
