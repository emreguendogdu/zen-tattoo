import Link from "next/link"

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

function Footer() {
  return (
    <footer className="absolute left-0 right-0 bottom-0 py-4 flex flex-col md:flex-row justify-between items-end md:items-center px-sectionX-m md:px-sectionX text-justify md:text-left bg-white text-black z-50">
      <Availability />
      <p>
        © 2024 — All rights reserved. Made by{" "}
        <Link
          href="https://www.linkedin.com/in/emregnd/"
          target="_blank"
          className="font-semibold underline underline-offset-2"
        >
          emregnd
        </Link>
        .
      </p>
    </footer>
  )
}

const Availability = () => {
  const today = new Date()

  const dayOfMonth = today.getDate()
  const weekOfMonth = Math.ceil(dayOfMonth / 7)
  const spotsByWeek = { 1: 4, 2: 3, 3: 2, 4: 1 }
  const spots = spotsByWeek[weekOfMonth] ?? 0

  const monthName =
    spots > 0 ? months[today.getMonth()] : months[today.getMonth() + 1]

  return (
    <>
      <p>
        Available @ <span>{monthName}</span>{" "}
        {spots > 0 ? (
          <span>
            (Last {spots} spot{spots !== 1 ? "s" : ""}!)
          </span>
        ) : (
          <span>(Fully booked for this month!)</span>
        )}
      </p>
    </>
  )
}

export default Footer
