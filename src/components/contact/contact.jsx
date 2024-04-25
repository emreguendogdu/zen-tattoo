"use client"

import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react"
import styles from "./contact.module.css"
import Image from "next/image"
import Footer from "./footer"

const currentDate = new Date()

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const day = currentDate.getDate() // Get day of the month (1-31)
const monthIndex = currentDate.getMonth() // Get month (0-11)

const monthName = monthNames[monthIndex]

const formattedDate = `${monthName}`

export default function Contact() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  return (
    <section id="contact" className="relative" ref={targetRef}>
      <div className="min-h-screen py-16 md:py-0 bg-black text-white flex flex-col md:flex-row justify-center items-center w-full px-16">
        <div className="md:flex-1 flex justify-center items-center">
          <div className={styles.frame}>
            <Image
              src="/images/contact-frame-img.jpg"
              alt="Man making tattoo."
              className={styles.img}
              fill
            />
          </div>
        </div>
        <motion.div className="mt-16 flex-1">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-4xl uppercase font-PPMonumentBlack max-w-screen-sm">
                One last touch to let your vision come true
              </h1>
              <p className="text-sm md:text-base font-PPMonumentLight">
                Hit the button below and book your appointment with the short
                template we&apos;ve set for you.
              </p>
            </div>
            <button className={styles.button}>Book Now</button>
          </div>
          <div className="md:absolute md:left-0 md:bottom-0 md:px-8 mt-40 font-PPMonumentLight">
            <p>
              <span className="font-extrabold text-xs md:text-base">
                Available:
              </span>{" "}
              <span className="text-red-500 text-xs md:text-base">
                {formattedDate}
              </span>{" "}
              <span className="text-[0.5rem] md:text-xs">
                (Filling up fast, book now!)
              </span>
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  )
}
