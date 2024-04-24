import { Inter } from "next/font/google"
import "./globals.css"
import {
  PPMonumentBlack,
  PPMonumentLight,
  PPMonumentRegular,
} from "@/utils/fonts"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zen Tattoo",
  description:
    "Zen Tattoo, located in Izmir Turkey, offers a unique experience with experienced artists, personalized designs, and high-quality equipment. Touch ups, cover ups, and custom designs are available.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${PPMonumentBlack.variable} ${PPMonumentRegular.variable} ${PPMonumentLight.variable} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  )
}
