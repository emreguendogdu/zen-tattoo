"use client"
import { animate, motion, useMotionValue } from "motion/react"
import { anim } from "@/utils/utils"
import { useScrollContext } from "@/context/ScrollContext"
import { forwardRef, useEffect, useState } from "react"
import Image from "next/image"
import useIsMobile from "@/hooks/useIsMobile"

export const PRELOADER_DURATION = 1.777

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

  // Disable scroll on mount
  useEffect(() => {
    setAllowScroll(false)
  }, [])

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

const desktopTitlePathD = `M0.664 71V51.992L45.208 21.08H0.664V2.07199H77.848V21.08L33.016 51.992H77.848V71H0.664ZM85.8265 71V2.07199H156.291V19.064H108.386V28.76H154.371V44.216H108.386V54.008H156.291V71H85.8265ZM164.333 71V2.07199H197.741L232.973 49.304V2.07199H255.533V71H222.125L186.893 23.672V71H164.333ZM298.541 21.08V2.07199H380.525V21.08H350.861V71H328.301V21.08H298.541ZM370.954 71L406.282 2.07199H435.082L470.314 71H446.218L440.17 58.232H401.098L394.954 71H370.954ZM408.778 42.008H432.394L420.586 17.336L408.778 42.008ZM460.71 21.08V2.07199H542.694V21.08H513.03V71H490.47V21.08H460.71ZM548.779 21.08V2.07199H630.763V21.08H601.099V71H578.539V21.08H548.779ZM683.167 72.92C653.887 72.92 634.879 58.616 634.879 36.536C634.879 14.648 653.887 0.439999 683.167 0.439999C712.639 0.439999 731.551 14.648 731.551 36.536C731.551 58.616 712.639 72.92 683.167 72.92ZM658.399 36.536C658.399 47 668.095 53.912 683.167 53.912C698.431 53.912 708.127 47 708.127 36.536C708.127 26.168 698.431 19.352 683.167 19.352C667.999 19.352 658.399 26.168 658.399 36.536ZM786.048 72.92C756.768 72.92 737.76 58.616 737.76 36.536C737.76 14.648 756.768 0.439999 786.048 0.439999C815.52 0.439999 834.432 14.648 834.432 36.536C834.432 58.616 815.52 72.92 786.048 72.92ZM761.28 36.536C761.28 47 770.976 53.912 786.048 53.912C801.312 53.912 811.008 47 811.008 36.536C811.008 26.168 801.312 19.352 786.048 19.352C770.88 19.352 761.28 26.168 761.28 36.536Z`
const mobileTitlePathD = `M280.433 69V49.992L324.977 19.08H280.433V0.0719948H357.617V19.08L312.785 49.992H357.617V69H280.433ZM365.595 69V0.0719948H436.059V17.064H388.155V26.76H434.139V42.216H388.155V52.008H436.059V69H365.595ZM444.102 69V0.0719948H477.51L512.742 47.304V0.0719948H535.302V69H501.894L466.661 21.672V69H444.102ZM0.36025 115.08V96.072H82.3443V115.08H52.6803V165H30.1203V115.08H0.36025ZM72.7727 165L108.101 96.072H136.901L172.133 165H148.037L141.989 152.232H102.917L96.7728 165H72.7727ZM110.597 136.008H134.213L122.405 111.336L110.597 136.008ZM162.529 115.08V96.072H244.513V115.08H214.849V165H192.289V115.08H162.529ZM250.598 115.08V96.072H332.582V115.08H302.918V165H280.358V115.08H250.598ZM384.986 166.92C355.706 166.92 336.698 152.616 336.698 130.536C336.698 108.648 355.706 94.44 384.986 94.44C414.458 94.44 433.37 108.648 433.37 130.536C433.37 152.616 414.458 166.92 384.986 166.92ZM360.218 130.536C360.218 141 369.914 147.912 384.986 147.912C400.25 147.912 409.946 141 409.946 130.536C409.946 120.168 400.25 113.352 384.986 113.352C369.818 113.352 360.218 120.168 360.218 130.536ZM487.867 166.92C458.587 166.92 439.579 152.616 439.579 130.536C439.579 108.648 458.587 94.44 487.867 94.44C517.339 94.44 536.251 108.648 536.251 130.536C536.251 152.616 517.339 166.92 487.867 166.92ZM463.099 130.536C463.099 141 472.795 147.912 487.867 147.912C503.131 147.912 512.827 141 512.827 130.536C512.827 120.168 503.131 113.352 487.867 113.352C472.699 113.352 463.099 120.168 463.099 130.536Z`

const TitleSvg = (props) => {
  const isMobile = useIsMobile()

  return (
    <div
      style={{
        fontSize: "clamp(2.5rem, 6.5vw, 6rem)", // Dynamic scaling
        display: "inline-block",
        lineHeight: 1,
      }}
    >
      <div style={{ width: isMobile ? "6em" : "9em" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={isMobile ? "0 0 540 170" : "0 0 835 73"}
          width="100%"
          height="auto" // Maintain aspect ratio
          {...props}
        >
          <motion.path
            d={isMobile ? mobileTitlePathD : desktopTitlePathD}
            fill="transparent"
            strokeWidth={isMobile ? "1.5" : "1"}
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
      </div>
    </div>
  )
}

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

const ImageLoader = () => {
  const progress = useMotionValue(0)
  const [imageIndex, setImageIndex] = useState(0)
  const totalImages = images.length + 1 // Smoother animation ending (+1)

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: PRELOADER_DURATION,
      ease: "linear",
      onUpdate: (latest) => {
        const index = Math.floor(latest * totalImages)
        setImageIndex(index >= totalImages ? totalImages - 1 : index)
      },
    })

    return controls.stop
  }, [progress, totalImages])

  return (
    <div className="relative w-[100px] h-[150px] md:w-[200px] md:h-[300px]">
      {images.map((src, idx) => (
        <MotionImage
          key={src}
          src={src}
          fill
          initial={{ opacity: 0, zIndex: 0 }}
          animate={{
            opacity: imageIndex === idx ? 1 : 0,
            zIndex: imageIndex === idx ? 10 : 0,
            transition: { duration: 0.2, ease: "linear" },
          }}
          className="object-cover drag-none select-none absolute inset-0 transition-all"
          aria-hidden={imageIndex !== idx}
          tabIndex={imageIndex === idx ? 0 : -1}
        />
      ))}
    </div>
  )
}

const ExoticImage = forwardRef(function ExoticImageWrapper(props, ref) {
  return <Image {...props} ref={ref} alt="Preloader image" />
})

const MotionImage = motion.create(ExoticImage)
