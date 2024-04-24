import Contact from "@/components/contact/contact"
import Header from "@/components/header/header/header"
import Hero from "@/components/hero"
import Images from "@/components/images"
import PreLoader from "@/components/preloader"
import Qualities from "@/components/qualities"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <PreLoader />
      <Header />
      <main id="home" className="pt-4">
        <Hero />
        <Qualities />
        <Images />
        <Contact />
      </main>
    </>
  )
}
