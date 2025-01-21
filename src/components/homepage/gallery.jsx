"use client"
import { useScroll, useTransform, motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const imagesLength = 8

export default function Gallery() {
  const targetRef = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (window === undefined) return
    setWidth(window.innerWidth)
  }, [window.innerWidth])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["10% start", "end end"],
  })

  const isMobile = width < 768

  const X_FOR_HORIZONTAL_SCROLL = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "-450%" : "-130%"]
  )

  const SMALLER_ON_LAST_PART = useTransform(
    scrollYProgress,
    [0.75, 1],
    [1, 0.45]
  )

  // TODO: FIX - %99 images not appearing as useDimensions is not working properly

  return (
    <motion.section
      className="min-h-[600vh] relative bg-black px-2"
      id="images"
      ref={targetRef}
    >
      <motion.div
        className="sticky top-0 h-screen overflow-hidden pt-16 md:pt-24"
        style={{
          scale: SMALLER_ON_LAST_PART,
        }}
      >
        <h2 className="text-white md:mb-8">Gallery</h2>
        <motion.ul
          style={{ x: X_FOR_HORIZONTAL_SCROLL }}
          className="relative flex gap-2"
        >
          {Array.from({ length: imagesLength }).map((_, i) => (
            <li
              key={i}
              className="relative min-w-[250px] md:min-w-[400px] min-h-[75vh] h-full"
            >
              <Image
                src={`/images/${i + 1}.webp`}
                className="w-full h-full object-cover"
                alt="Tattoo project"
                aria-hidden
                fill
                blurDataURL={`/images/lazy-loading/${i + 1}-small.webp`}
              />
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  )
}
