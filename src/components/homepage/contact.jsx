"use client"

import Image from "next/image"
import FrameImage from "@/../public/images/contact-frame-img.webp"
import { useDarkSectionRef } from "@/context/HeaderColorContext"

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
        className="bg-black text-white relative px-sectionX-m md:px-sectionX w-full h-screen flex justify-between items-center gap-8"
      >
        <div className="max-w-screen-sm flex flex-col overflow-hidden">
          <h2 className="h3 w-fit text-left">
            One last touch to
            <br /> bring your vision
            <br /> into life
          </h2>
          <p className="font-light">
            Book your appointment in 2 minutes with the short template
            we&apos;ve set for you.
          </p>
          <button className="button mt-8 transition-all duration-500 ease-in-out [background:linear-gradient(45deg,#172033,theme(colors.neutral.100)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.neutral.200/.48)_80%,_theme(colors.indigo.300)_86%,_theme(colors.indigo.100)_90%,_theme(colors.indigo.300)_94%,_theme(colors.neutral.200/.48))_border-box] rounded-2xl border border-transparent animate-border hover:brightness-125">
            Book Now
          </button>
        </div>

        <Image
          src={FrameImage}
          alt="Man making tattoo"
          className="object-cover rounded-custom-contact"
          width={252 * 1.618}
          height={360 * 1.618}
          placeholder="blur"
          loading="lazy"
          decoding="async"
        />
      </section>
      <Footer />
    </>
  )
}

function Footer() {
  return (
    <footer className="absolute left-0 right-0 bottom-2 flex flex-col md:flex-row justify-between items-center px-sectionX-m md:px-sectionX text-justify md:text-left [&>p]:font-light [&>p]:text-xs bg-black text-white">
      <Availability />
      <p>
        © 2024 — All rights reserved. Made by{" "}
        <a
          href="https://emregnd.com"
          className="font-semibold underline underline-offset-2"
        >
          emregnd
        </a>
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
    <p className="mb-2 md:mb-0">
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
