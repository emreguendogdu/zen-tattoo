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
          <Image
            src="/images/contact-frame-img.webp"
            alt="Man making tattoo."
            className="object-cover rounded-custom-contact"
            width={252}
            height={360}
            blurDataURL={`/images/lazy-loading/contact-frame-img-small.webp`}
          />
        </div>
        <div className="mt-16 flex-1">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="h3 md:text-left">
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
      <footer className="absolute left-0 right-0 bottom-2 text-white font-display font-light flex justify-between items-center px-sectionX-m md:px-sectionX text-xs text-justify md:text-left md:text-sm">
        <p>
          Available: <span className="text-primary">{formattedMonth}</span>{" "}
          (Filling up fast, book now!)
        </p>
        <p>
          Made by <a href="https://osmangund.tech">osmangund®</a> with 💗 - 2024
        </p>
      </footer>
    </section>
  )
}
