"use client"

import About from "@/components/homepage/about"
import Contact from "@/components/contact/contact"
import Header from "@/components/ui/header/header"
import Hero from "@/components/homepage/hero"
import Gallery from "@/components/homepage/gallery"
import PreLoader from "@/components/ui/preloader"
import Qualities from "@/components/homepage/qualities"
import Testimonials from "@/components/testimonials"
import { useSectionInView } from "@/context/SectionInViewContext"

export default function Home() {
  const { galleryAndContactRef } = useSectionInView()
  return (
    <>
      {/* <PreLoader /> */}
      <Header />
      <Hero />
      <About />
      <Qualities />
      <Testimonials />
      <div ref={galleryAndContactRef}>
        <Gallery />
        <Contact />
      </div>
    </>
  )
}
