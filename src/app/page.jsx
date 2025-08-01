"use client"

import About from "@/components/landing/about"
import Contact from "@/components/landing/contact"
import Header from "@/components/ui/header/header"
import Hero from "@/components/landing/hero"
import Gallery from "@/components/landing/gallery"
import PreLoader from "@/components/ui/preloader"
import Qualities from "@/components/landing/qualities"
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
