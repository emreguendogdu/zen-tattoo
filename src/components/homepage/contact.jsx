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
    <section
      id="contact"
      className="bg-black text-white relative px-sectionX-m md:px-sectionX w-full h-screen flex justify-center items-center gap-8"
    >
      <Image
        src="/images/contact-frame-img.webp"
        alt="Man making tattoo."
        className="object-cover rounded-custom-contact"
        width={252}
        height={360}
        blurDataURL={`/images/lazy-loading/contact-frame-img-small.webp`}
      />
      <div className='max-w-screen-sm'>
        <h2 className="h3 w-fit">
          One last touch to let your vision come true
        </h2>
        <p className="md:text-lg font-light">
          Hit the button below and book your appointment with the short template
          we&apos;ve set for you.
        </p>
        <button className="button mt-4">Book Now</button>
      </div>
      <footer className="absolute left-0 right-0 bottom-2 [&>p]:font-display [&>p]:font-light flex justify-between items-center px-sectionX-m md:px-sectionX [&>p]:text-xs text-justify md:text-left">
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
