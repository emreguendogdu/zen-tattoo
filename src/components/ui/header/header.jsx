"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import Nav from "./nav"
import { AnimatePresence, motion } from "motion/react"
import { opacity, background } from "./anim"
import { useSectionInView } from "@/context/SectionInViewContext"

const burgerTransitions =
  "transition-all after:transition-all before:transition-all duration-1000 after:duration-1000 before:duration-1000 ease-[cubic-bezier(0.76, 0, 0.24, 1)] after:ease-[cubic-bezier(0.76, 0, 0.24, 1)] before:ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
const burgerIsActive =
  "after:-top-[1px] before:top-[1px] after:rotate-45 before:-rotate-45"

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()
  const { galleryAndContactIsInView } = useSectionInView()

  useEffect(() => {
    setIsActive(false)
  }, [pathname])

  // ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsActive(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])
  return (
    <header
      className={`font-display font-light tracking-tighter z-40 p-sectionX-m md:p-sectionX w-full fixed box-border transition-all bg-white text-black ${
        galleryAndContactIsInView && "!bg-black !text-white"
      }`}
    >
      <div
        className={
          "relative flex justify-between text-center text-xs uppercase md:text-base [&>p]:m-0"
        }
      >
        <Link href="/" className="no-underline">
          Zen Tattoo
        </Link>
        <div
          onMouseDown={() => setIsActive(!isActive)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div
            className={`w-6 after:block before:block after:w-full before:w-full after:h-[1px] before:h-[1px] after:bg-black before:bg-black after:relative before:relative after:-top-1 before:top-1 ${burgerTransitions} ${
              isActive ? burgerIsActive : ""
            } ${galleryAndContactIsInView && "before:!bg-white after:!bg-white"}`}
          />
          <div className="relative flex [&>p:nth-of-type(2)]:absolute [&>p:nth-of-type(2)]:opacity-0">
            <motion.p variants={opacity} animate={isActive ? "closed" : "open"}>
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={!isActive ? "closed" : "open"}
            >
              Close
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="h-full w-full absolute left-0 top-full bg-black opacity-50"
        onClick={() => setIsActive(false)}
      />
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </header>
  )
}
