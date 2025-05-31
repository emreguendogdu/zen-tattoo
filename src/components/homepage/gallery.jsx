"use client"
import { useRef, useState, useLayoutEffect, useEffect } from "react"
import { useScroll, useTransform, motion } from "motion/react"
import Image from "next/image"
import Image1 from "@/../public/images/gallery/1.webp"
import Image2 from "@/../public/images/gallery/2.webp"
import Image3 from "@/../public/images/gallery/3.webp"
import Image4 from "@/../public/images/gallery/4.webp"
import Image5 from "@/../public/images/gallery/5.webp"
import Image6 from "@/../public/images/gallery/6.webp"
import Image7 from "@/../public/images/gallery/7.webp"
import Image8 from "@/../public/images/gallery/8.webp"
import { useDarkSectionRef } from "@/context/HeaderColorContext"
import useIsMobile from "@/hooks/useIsMobile"

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8]

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
    const computedMax = totalWidth - viewportWidth
    setMaxTranslate(computedMax)
    setSectionHeight(computedMax * 1.618 + window.innerHeight)
  }, [isMobile])

  useEffect(() => {
    const handleResize = () => {
      if (!ulRef.current) return
      const totalWidth = ulRef.current.scrollWidth
      const viewportWidth =
        ulRef.current.parentElement?.clientWidth || window.innerWidth
      const computedMax = totalWidth - viewportWidth
      setMaxTranslate(computedMax)
      setSectionHeight(computedMax * 1.618 + window.innerHeight)
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

  const SECTION_SCALE_END = useTransform(scrollYProgress, [0.75, 1], [1, 0.75])

  return (
    <motion.section
      ref={targetRef}
      id="gallery"
      className="relative bg-black px-2 pb-sectionY-m md:pb-sectionY"
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
              className="relative min-w-[300px] md:min-w-[400px] min-h-[75vh] h-full"
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
  )
}
