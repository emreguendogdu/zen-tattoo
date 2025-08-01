"use client"

import Image from "next/image"
import FrameImage from "@/components/images/contact-frame-img.webp"
import { useDarkSectionRef } from "@/context/HeaderColorContext"
import Footer from "./footer"
import Button from "../ui/Button"

export default function Contact() {
  const sectionRef = useDarkSectionRef()

  return (
    <>
      <div className="relative z-50">
        <section
          ref={sectionRef}
          id="contact"
          className="relative px-sectionX-m md:px-sectionX pb-8 w-full md:h-[85dvh] h-full -mt-[75dvh] bg-white text-black rounded-t-3xl md:rounded-t-[4rem]"
        >
          <div className="relative w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-16 xl:gap-32 overflow-hidden py-sectionY-m-half">
            <div className="flex flex-col w-fit h-full md:justify-between gap-2 overflow-hidden order-2 md:order-1">
              <h2 className="h2 w-fit text-left">
                Let&apos;s bring
                <br /> your vision
                <br />
                to life
              </h2>
              <Button
                href="https://www.linkedin.com/in/emregnd/"
                target="_blank"
              >
                Book Now
              </Button>
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
      </div>
      <Footer />
    </>
  )
}
