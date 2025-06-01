"use client"

import Image from "next/image"
import FrameImage from "@/../public/images/contact-frame-img.webp"
import { useDarkSectionRef } from "@/context/HeaderColorContext"
import Link from "next/link"

const months = [
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

export default function Contact() {
  const sectionRef = useDarkSectionRef()

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className="bg-black text-white relative px-sectionX-m md:px-sectionX pb-8 w-full md:h-[90vh] h-full"
      >
        <div className="relative w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-32 overflow-hidden">
          <div className="flex flex-col overflow-hidden order-2 md:order-1">
            <h2 className="h2 w-fit text-left">
              Let&apos;s make
              <br /> your vision
              <br /> come to life
            </h2>
            <p className="font-light">
              Book your appointment in 2 minutes with the short template
              <br />
              we&apos;ve set for you.
            </p>
            <Link
              className="button text-white mt-8 "
              href="https://www.linkedin.com/in/emregnd/"
              target="_blank"
            >
              Book Now
            </Link>
          </div>

          <div className="relative w-full h-[300px] md:w-[40%] md:h-full order-1 md:order-2">
            <Image
              src={FrameImage}
              alt="Man making tattoo"
              className="object-cover "
              placeholder="blur"
              loading="lazy"
              decoding="async"
              blurDataURL="U57K*k_4EKMw_4?bM{IAEgtSR69FyESiIUD%"
              fill
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

function Footer() {
  return (
    <footer className="relative left-0 right-0 py-4 flex flex-col md:flex-row justify-between items-end md:items-center px-sectionX-m md:px-sectionX text-justify md:text-left [&>p]:font-light [&>p]:text-xs bg-black text-white">
      <Availability />
      <p>
        © 2024 — All rights reserved. Made by{" "}
        <Link
          href="https://www.linkedin.com/in/emregnd/"
          target="_blank"
          className="font-semibold underline underline-offset-2"
        >
          emregnd
        </Link>
        .
      </p>
    </footer>
  )
}

function Availability() {
  const today = new Date()
  const monthName = months[today.getMonth() + 1]
  const dayOfMonth = today.getDate()
  const weekOfMonth = Math.ceil(dayOfMonth / 7)
  const spotsByWeek = { 1: 4, 2: 3, 3: 2, 4: 1 }
  const spots = spotsByWeek[weekOfMonth] ?? 0

  return (
    <p>
      Available @ <span className="font-semibold">{monthName}</span>{" "}
      {spots > 0 ? (
        <span>
          (Last {spots} spot{spots !== 1 ? "s" : ""}!)
        </span>
      ) : (
        <span>(Fully booked!)</span>
      )}
    </p>
  )
}
