"use client"

import About from "@/components/homepage/about"
import Contact from "@/components/homepage/contact"
import Header from "@/components/ui/header/header"
import Hero from "@/components/homepage/hero"
import Gallery from "@/components/homepage/gallery"
import PreLoader from "@/components/ui/preloader"
import Qualities from "@/components/homepage/qualities"
import ScrollTracker from "@/components/ui/scrollTracker"

export default function Home() {
  return (
    <>
      <ScrollTracker />
      <PreLoader />
      <Header />
      <Hero />
      <About />
      <Qualities />
      <Gallery />
      <Contact />
    </>
  )
}
