import About from "@/components/about"
import Contact from "@/components/contact/contact"
import Header from "@/components/header/header"
import Hero from "@/components/hero"
import Images from "@/components/photos"
import PreLoader from "@/components/preloader"
import Qualities from "@/components/qualities"
import Testimonials from "@/components/testimonials"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <PreLoader />
      <Header />
      <main id="home" className="pt-4">
        <Hero />
        <About />
        <Qualities />
        <Testimonials />
        <Images />
        <Contact />
      </main>
    </>
  )
}
