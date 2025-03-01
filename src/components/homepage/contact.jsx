import Image from "next/image"
import FrameImage from "@/../public/images/contact-frame-img.webp"

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
  return (
    <section
      id="contact"
      className="bg-black text-white relative px-sectionX-m md:px-sectionX w-full h-screen flex flex-col md:flex-row justify-center items-center gap-8"
    >
      <Image
        src={FrameImage}
        alt="Man making tattoo"
        className="object-cover rounded-custom-contact"
        width={252}
        height={360}
        placeholder="blur"
        loading="lazy"
        decoding="async"
      />
      <div className="max-w-screen-sm flex flex-col justify-center items-center md:items-start md:gap-4">
        <h2 className="h3 w-fit">
          One last touch to let your vision come true
        </h2>
        <p className="md:text-lg font-light">
          Book your appointment with the short template we&apos;ve set for you.
        </p>
        <button className="button mt-4">Book Now</button>
      </div>
      <footer className="absolute left-0 right-0 bottom-2 flex flex-col md:flex-row justify-between items-center px-sectionX-m md:px-sectionX text-justify md:text-left [&>p]:font-light [&>p]:text-xs">
        <p className="mb-2 md:mb-0">
          Available:{" "}
          <span className="text-primary">{months[new Date().getMonth()]}</span>{" "}
          (Filling up fast, book now!)
        </p>
        <p>
          Made by{" "}
          <a href="https://emregnd.com" className="text-primary">
            emregnd
          </a>{" "}
          with 💗 - 2024
        </p>
      </footer>
    </section>
  )
}
