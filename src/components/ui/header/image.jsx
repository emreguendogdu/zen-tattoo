import { motion } from "framer-motion"
import Image from "next/image"
import HomeImage from "@/../public/images/home.webp"
import ContactImage from "@/../public/images/contact.webp"

const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.35 } },
  closed: { opacity: 0, transition: { duration: 0.35 } },
}

export default function NavImage({ isActive, src }) {
  return (
    <motion.div
      className="hidden md:block md:w-[400px] md:h-[450px] relative"
      variants={opacity}
      animate={isActive ? "open" : "closed"}
    >
      <Image
        src={src === "home" ? HomeImage : ContactImage}
        width={200}
        height={200}
        className="md:w-full md:h-full md:object-cover"
        alt={
          src === "home" ? "Zen Tattoo studio stairs" : "Two men handshaking"
        }
        aria-hidden
        loading="lazy"
        decoding="async"
        placeholder="blur"
      />
    </motion.div>
  )
}
