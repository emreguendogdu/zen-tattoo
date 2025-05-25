"use client"
import { animate, motion, useMotionValue } from "motion/react"
import { anim } from "@/utils/utils"
import { useScrollContext } from "@/context/ScrollContext"
import { forwardRef, useEffect, useState } from "react"
import Image from "next/image"

export const PRELOADER_DURATION = 3

const images = [
  "/images/preloader/1.webp",
  "/images/preloader/2.webp",
  "/images/preloader/3.webp",
  "/images/preloader/4.webp",
  "/images/preloader/5.webp",
  "/images/preloader/6.webp",
  "/images/preloader/7.webp",
]

const SECTION_VARIANTS = {
  initial: { opacity: 1, display: "flex" },
  animate: {
    opacity: [1, 1, 0],
    display: "none",
    transition: {
      duration: PRELOADER_DURATION,
      ease: [0.64, 0, 0.78, 0],
    },
  },
}

export default function PreLoader() {
  const { setAllowScroll } = useScrollContext()

  function handleAnimationComplete() {
    if (!window) return
    setAllowScroll(true)

    window.scrollTo(0, 0)
  }

  return (
    <motion.div
      className="
    fixed inset-0 bg-black flex items-center justify-center z-[99] select-none"
      id="preloader"
      onAnimationComplete={handleAnimationComplete}
      {...anim(SECTION_VARIANTS)}
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 select-none">
        <ImageLoader />
      </div>
      <div className="absolute bottom-1 md:bottom-2 left-0 right-0 w-full flex items-end justify-between px-sectionX-m md:px-sectionX">
        <NumberLoader />
        <div className="flex flex-col items-end">
          <motion.div
            className="border-b border-b-white w-full h-1 mb-4 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: PRELOADER_DURATION, ease: "easeInOut" }}
          />
          <TitleSvg />
        </div>
      </div>
    </motion.div>
  )
}

const TitleSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="835"
    height="73"
    fill="none"
    viewBox="0 0 835 73"
  >
    <motion.path
      d="M.664 71V51.992L45.208 21.08H.664V2.072h77.184V21.08L33.016 51.992h44.832V71zm85.163 0V2.072h70.464v16.992h-47.905v9.696h45.985v15.456h-45.985v9.792h47.905V71zm78.506 0V2.072h33.408l35.232 47.232V2.072h22.56V71h-33.408l-35.232-47.328V71zm134.208-49.92V2.072h81.984V21.08h-29.664V71h-22.56V21.08zM370.954 71l35.328-68.928h28.8L470.314 71h-24.096l-6.048-12.768h-39.072L394.954 71zm37.824-28.992h23.616l-11.808-24.672zM460.71 21.08V2.072h81.984V21.08H513.03V71h-22.56V21.08zm88.069 0V2.072h81.984V21.08h-29.664V71h-22.56V21.08zm134.388 51.84c-29.28 0-48.288-14.304-48.288-36.384 0-21.888 19.008-36.096 48.288-36.096 29.472 0 48.384 14.208 48.384 36.096 0 22.08-18.912 36.384-48.384 36.384m-24.768-36.384c0 10.464 9.696 17.376 24.768 17.376 15.264 0 24.96-6.912 24.96-17.376 0-10.368-9.696-17.184-24.96-17.184-15.168 0-24.768 6.816-24.768 17.184M786.048 72.92c-29.28 0-48.288-14.304-48.288-36.384C737.76 14.648 756.768.44 786.048.44c29.472 0 48.384 14.208 48.384 36.096 0 22.08-18.912 36.384-48.384 36.384M761.28 36.536c0 10.464 9.696 17.376 24.768 17.376 15.264 0 24.96-6.912 24.96-17.376 0-10.368-9.696-17.184-24.96-17.184-15.168 0-24.768 6.816-24.768 17.184"
      fill="transparent"
      strokeWidth="1"
      stroke="#fff"
      strokeLinecap="round"
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 1, pathLength: 1 }}
      transition={{
        duration: PRELOADER_DURATION * 3,
        opacity: {
          delay: 0.2,
          duration: 0.25,
        },
        delay: 0.2,
        ease: "easeInOut",
      }}
    />
  </svg>
)

const NumberLoader = () => {
  const count = useMotionValue(1) // motion value for the number
  const [number, setNumber] = useState(0)

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 3,
      ease: "easeInOut",
      onUpdate: (latest) => setNumber(Math.floor(latest)),
    })

    return controls.stop // cleanup on unmount
  }, [count])

  return (
    <div>
      <motion.h1 className="text-stroke-1 text-stroke-white leading-[0.3]">
        {number}
      </motion.h1>
    </div>
  )
}

const ImageLoader = ({ duration = 3 }) => {
  const progress = useMotionValue(0)
  const [imageIndex, setImageIndex] = useState(0)
  const totalImages = images.length

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        const index = Math.floor(latest * totalImages)
        setImageIndex(index >= totalImages ? totalImages - 1 : index)
      },
    })

    return controls.stop
  }, [progress, totalImages, duration])

  return (
    <MotionImage
      key={imageIndex}
      src={images[imageIndex]}
      width={200}
      height={300}
      className="object-cover drag-none select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  )
}

const ExoticImage = forwardRef(function ExoticImageWrapper(props, ref) {
  return <Image {...props} ref={ref} alt="Preloader image" />
})

const MotionImage = motion(ExoticImage)
