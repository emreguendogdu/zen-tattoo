"use client"
import { useScroll, useTransform, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useMediaQuery } from "react-responsive"

export default function Images() {
  const containerRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const desktop = useMediaQuery({ query: "(min-width: 768px)" })

  useEffect(() => {
    setIsDesktop(desktop)
  }, [desktop])

  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const X_FOR_HORIZONTAL_SCROLL = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? ["1%", "-95%"] : ["1%", "-600%"]
  )

  return (
    <section className="min-h-[600vh] relative" ref={containerRef}>
      <div className="sticky top-0 h-screen items-center overflow-hidden">
        <motion.div
          style={{ x: X_FOR_HORIZONTAL_SCROLL }}
          className="flex gap-2 mt-24"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative min-w-[400px] min-h-[600px]">
              <Image
                src={`/images/${i + 1}.jpg`}
                fill={true}
                className="w-full h-full object-cover"
                alt=""
                aria-hidden
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
