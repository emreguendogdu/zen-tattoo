import styles from "./contact.module.css"
import Image from "next/image"

const monthNames = [
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

const currentDate = new Date()
const monthIndex = currentDate.getMonth() // Get month (0-11)
const monthName = monthNames[monthIndex]
const formattedMonth = `${monthName}`

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="min-h-screen py-16 md:py-0 bg-black text-white flex flex-col md:flex-row justify-center items-center w-full px-16">
        <div className="md:flex-1 flex justify-center items-center">
          <div className={styles.frame}>
            <Image
              src="/images/contact-frame-img.webp"
              alt="Man making tattoo."
              className={styles.img}
              fill
            />
          </div>
        </div>
        <div className="mt-16 flex-1">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className='h3 md:text-left'>
                One last touch to let your vision come true
              </h2>
              <p className="md:text-lg font-light">
                Hit the button below and book your appointment with the short
                template we&apos;ve set for you.
              </p>
            </div>
            <button className="button">Book Now</button>
          </div>
        </div>
      </div>
      <footer className="text-white md:absolute md:right-0 md:left-0 md:bottom-2 font-display font-light spacing text-[.65rem] px-sectionX-m md:px-sectionX md:flex md:justify-between md:items-center [&_span]:text-xs [&_span]:md:text-base">
        <p>
          Available:{" "}
          <span className="text-primary">{formattedMonth}</span>{" "}
          (Filling up fast, book now!)
        </p>
        <p>
          Made by <a href="https://osmangund.tech">osmangund®</a> with 💗 - 2024
        </p>
      </footer>
    </section>
  )
}
