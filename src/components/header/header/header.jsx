"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import Nav from "./nav"
import { AnimatePresence, motion } from "framer-motion"
import { PPMonumentLight } from "@/utils/fonts"
import { opacity, background } from "./anim"

const transitions =
  "transition-all after:transition-all before:transition-all duration-1000 after:duration-1000 before:duration-1000 ease-[cubic-bezier(0.76, 0, 0.24, 1)] after:ease-[cubic-bezier(0.76, 0, 0.24, 1)] before:ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
const burgerIsActive =
  "after:-top-[1px] before:top-[1px] after:rotate-45 before:-rotate-45"

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsActive(false)
  }, [pathname])
  return (
    <header
      className={`${PPMonumentLight.variable} font-PPMonumentLight bg-[var(--header-bg-color)] text-[var(--header-text-color)] tracking-tighter z-20 p-3 w-full fixed box-border md:p-5`}
    >
      <div
        className={
          "relative flex justify-between text-center text-xs uppercase md:text-base [&>p]:m-0"
        }
      >
        <Link href="/" className="no-underline color(var(--header-text-color))">
          Zen Tattoo
        </Link>
        <div
          onMouseDown={() => setIsActive(!isActive)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div
            className={`w-6 after:block before:block after:w-full before:w-full after:h-[1px] before:h-[1px] after:bg-[var(--header-text-color)] before:bg-[var(--header-text-color)] after:relative before:relative after:-top-1 before:top-1 ${transitions} ${
              isActive ? burgerIsActive : ""
            }`}
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
      />
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </header>
  )
}
