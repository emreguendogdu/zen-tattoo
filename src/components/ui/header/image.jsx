import { motion } from "motion/react"
import Image from "next/image"
import HomeImage from "@/../public/images/home.webp"
import ContactImage from "@/../public/images/contact.webp"

const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.35 } },
  closed: { opacity: 0, transition: { duration: 0.35 } },
}

const imageSelect = (src) => {
  switch (src) {
    case "home":
      return HomeImage
    case "contact":
      return ContactImage
    default:
      return HomeImage
  }
}

export default function NavImage({ isActive, src, alt }) {
  return (
    <motion.div
      className="hidden md:block md:w-[400px] md:h-[450px] relative"
      variants={opacity}
      animate={isActive ? "open" : "closed"}
    >
      <Image
        src={imageSelect(src)}
        alt={alt}
        loading="lazy"
        decoding="async"
        placeholder="blur"
        fill
        className="object-cover"
      />
    </motion.div>
  )
}
