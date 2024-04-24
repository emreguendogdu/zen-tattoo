import Link from "next/link"
import { motion } from "framer-motion"
import { blur, translate } from "../header/anim"

const getChars = (title) => {
  let chars = []

  title.split("").forEach((char, i) => {
    chars.push(
      <motion.span
        variants={translate}
        custom={[i * 0.02, (title.length - i) * 0.01]}
        initial="initial"
        animate="enter"
        exit="exit"
        key={`c__${i}`}
      >
        {char}
      </motion.span>
    )
  })
  return chars
}

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
}) {
  return (
    <div className="flex gap-16 flex-wrap md:max-w-screen-xl mt-20">
      {links.map((link, index) => {
        const { title, href } = link
        return (
          <Link
            key={index}
            href={href}
            onMouseOver={() => setSelectedLink({ isActive: true, index })}
            onMouseDown={() => setIsActive((prev) => !prev)}
            onMouseLeave={() => setSelectedLink({ isActive: false, index })}
            className="no-underline text-black text-3xl font-light uppercase md:text-8xl"
          >
            <motion.p
              variants={blur}
              initial="initial"
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "nothovered"
                  : "hovered"
              }
              className="flex"
            >
              {getChars(title)}
            </motion.p>
          </Link>
        )
      })}
    </div>
  )
}
