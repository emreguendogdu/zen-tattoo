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
        <h2 className="md:text-left h3 w-fit">
          One last touch to
          <br /> bring your vision
          <br /> into life
        </h2>
        <p className="font-light">
          Book your appointment in 2 minutes with the short template we&apos;ve
          set for you.
        </p>
        <button className="button mt-4">Book Now</button>
      </div>
      <footer className="absolute left-0 right-0 bottom-2 flex flex-col md:flex-row justify-between items-center px-sectionX-m md:px-sectionX text-justify md:text-left [&>p]:font-light [&>p]:text-xs">
        <p className="mb-2 md:mb-0">
          Available:{" "}
          <span className="font-semibold">{months[new Date().getMonth()]}</span>{" "}
          (Filling up fast, book now!)
        </p>
        <p>
          2024 - Made by{" "}
          <a
            href="https://emregnd.com"
            className="font-semibold underline underline-offset-2"
          >
            emregnd
          </a>{" "}
        </p>
      </footer>
    </section>
  )
}
