"use client"

import { useRef, useState, useLayoutEffect, useEffect } from "react"
import { useScroll, useTransform, motion, useInView } from "motion/react"
import Image from "next/image"
import { images } from "@/data/gallery"
import { useDarkSectionRef } from "@/context/HeaderColorContext"
import useIsMobile from "@/hooks/useIsMobile"

const titleVariants = {
  hidden: {
    y: "-200%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

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

    // Cap the maximum height for smaller viewports
    const maxHeight = Math.min(
      computedMax * 1.618 + window.innerHeight,
      window.innerHeight * 3
    )
    setMaxTranslate(computedMax)
    setSectionHeight(maxHeight)
  }, [isMobile])

  useEffect(() => {
    const handleResize = () => {
      if (!ulRef.current) return
      const totalWidth = ulRef.current.scrollWidth
      const viewportWidth =
        ulRef.current.parentElement?.clientWidth || window.innerWidth
      const computedMax = totalWidth - viewportWidth

      // Cap the maximum height for smaller viewports
      const maxHeight = Math.min(
        computedMax * 1.618 + window.innerHeight,
        window.innerHeight * 3
      )
      setMaxTranslate(computedMax)
      setSectionHeight(maxHeight)
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
    [0, 0.65],
    [0, -maxTranslate]
  )

  const SECTION_SCALE_END = useTransform(scrollYProgress, [0.75, 1], [1, 0.5])

  return (
    <>
      <motion.section
        ref={targetRef}
        id="gallery"
        className="relative bg-black px-2 -mt-[10dvh] z-30"
        style={{ height: sectionHeight }}
      >
        <motion.div
          className="sticky top-0 h-[100dvh] overflow-hidden py-sectionY-m-half"
          style={{
            scale: SECTION_SCALE_END,
          }}
        >
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            className="text-white md:mb-8"
          >
            Gallery
          </motion.h2>
          <motion.ul
            ref={ulRef}
            style={{ x: X_FOR_HORIZONTAL_SCROLL }}
            className="relative flex gap-2"
          >
            {Array.from({ length: images.length }).map((_, i) => (
              <li
                key={i}
                className="relative min-w-[80vw] md:min-w-[35vw] min-h-[85vh] md:min-h-[80dvh] h-full"
              >
                <Image
                  src={images[i]}
                  className="w-full h-full object-cover"
                  alt="Tattoo project"
                  aria-hidden
                  fill
                  sizes="(max-width: 768px) 80vw, 35vw"
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
