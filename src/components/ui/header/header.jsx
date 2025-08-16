"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import Nav from "./nav"
import { AnimatePresence, motion } from "motion/react"
import { opacity, background, hover } from "./anim"
import { useHeaderColor } from "@/context/HeaderColorContext"
import { anim, getDelay } from "@/utils/utils"
import { HEADER_VARIANTS } from "@/components/landing/hero"

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()
  const { isDarkBg } = useHeaderColor()

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
    <motion.header
      className={` z-[9999] p-sectionX-m md:p-sectionX w-full fixed box-border transition-all bg-white text-black ${
        isDarkBg && "!bg-black !text-white"
      }`}
      {...anim(HEADER_VARIANTS, getDelay("header"))}
    >
      <div
        className={
          "relative flex justify-between items-center text-left md:text-center text-xs uppercase md:text-base [&>p]:m-0"
        }
      >
        <div className="flex items-center gap-4 md:gap-16">
          <Link
            href="/"
            className="font-display font-light tracking-tighter no-underline"
          >
            Zen Tattoo
          </Link>
          <p className="text-xs font-display font-light normal-case hidden md:block">
            1923 N Michigan St, Plymouth, IN
          </p>
        </div>
        <div
          onMouseDown={() => setIsActive(!isActive)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <motion.div
            className={`w-6 relative flex flex-col justify-center items-center gap-1`}
            whileHover="hover"
          >
            <motion.div
              className={`w-full h-[1px] bg-black transition-all duration-1000 ease-[cubic-bezier(0.76, 0, 0.24, 1)] ${
                isActive ? "rotate-45 translate-y-[5px]" : ""
              } ${isDarkBg && "!bg-white"}`}
              variants={hover}
            />

            <div
              className={`w-full h-[1px] bg-black transition-all duration-1000 ease-[cubic-bezier(0.76, 0, 0.24, 1)] ${
                isActive ? "-rotate-45 -translate-y-[5px]" : ""
              } ${isDarkBg && "!bg-white"}`}
              variants={hover}
            />
          </motion.div>
          <div className="relative flex [&>p:nth-of-type(2)]:absolute [&>p:nth-of-type(2)]:opacity-0">
            <motion.p
              variants={opacity}
              animate={isActive ? "closed" : "open"}
              className="font-display font-light tracking-tighter"
            >
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={!isActive ? "closed" : "open"}
              className="font-display font-light tracking-tighter"
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
    </motion.header>
  )
}
