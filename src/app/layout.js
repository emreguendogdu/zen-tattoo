import { Inter } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"
import GlobalProvider from "@/context/GlobalProvider"

const inter = Inter({ subsets: ["latin"] })

export const PPMonument = localFont({
  src: [
    {
      path: "../../public/fonts/PP Monument Extended/black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/PP Monument Extended/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PP Monument Extended/light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-display",
  subsets: ["latin"],
})

export const metadata = {
  title: "Zen Tattoo",
  description:
    "Zen Tattoo, located in Izmir Turkey, offers a unique experience with experienced artists, personalized designs, and high-quality equipment. Touch ups, cover ups, and custom designs are available.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative ${PPMonument.variable} ${inter.className}`}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  )
}
