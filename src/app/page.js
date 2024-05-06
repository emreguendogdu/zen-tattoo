"use client"

import { useInView } from "framer-motion"
import React, { useEffect, useRef } from "react"
import About from "@/components/about"
import Contact from "@/components/contact/contact"
import Header from "@/components/header/header"
import Hero from "@/components/hero"
import Images from "@/components/photos"
import PreLoader from "@/components/preloader"
import Qualities from "@/components/qualities"
import Testimonials from "@/components/testimonials"

export default function Home() {
  const imagesAndContactRef = useRef(null)
  const imagesAndContactIsInView = useInView(imagesAndContactRef, {
    margin: "-40%",
  })

  return (
    <>
      <PreLoader />
      <main>
        <Header imagesAndContactIsInView={imagesAndContactIsInView} />
        <div id="home" className="pt-4">
          <Hero />
          <About />
          <Qualities />
          <Testimonials />
          <div ref={imagesAndContactRef}>
            <Images />
            <Contact />
          </div>
        </div>
      </main>
    </>
  )
}
