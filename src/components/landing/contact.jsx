"use client"

import Image from "next/image"
import FrameImage from "@/components/images/contact-frame-img.webp"
import { useDarkSectionRef } from "@/context/HeaderColorContext"
import Link from "next/link"
import Footer from "./footer"

export default function Contact() {
  const sectionRef = useDarkSectionRef()

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className="bg-black text-white relative px-sectionX-m md:px-sectionX pb-8 w-full md:h-[90vh] h-full -mt-[75dvh]"
      >
        <div className="relative w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-16 xl:gap-32 overflow-hidden py-sectionY-m-half">
          <div className="flex flex-col w-full h-full md:justify-start gap-8 sm:gap-16 md:gap-20 xl:gap-32 overflow-hidden order-2 md:order-1">
            <h2 className="h2 w-fit text-left">
              Let&apos;s bring
              <br /> your vision
              <br />
              to life
            </h2>
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="font-light">
                Book your appointment in 2 minutes with the short template
                <br />
                we&apos;ve set for you.
              </p>
              <Link
                className="button"
                href="https://www.linkedin.com/in/emregnd/"
                target="_blank"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[300px] md:w-[40%] md:h-full order-1 md:order-2">
            <Image
              src={FrameImage}
              alt="Man making tattoo"
              className="object-cover"
              placeholder="blur"
              loading="lazy"
              decoding="async"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAM0lEQVR4nAEoANf/ANvz9OX//wANCQDr7eJiYF89T08Aipear6ytnq2nADBFQxkqKBUmI6kvEahy3xmeAAAAAElFTkSuQmCC"
              fill
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
