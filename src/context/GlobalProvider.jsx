import { LazyMotion, domAnimation } from "motion/react"
import { ScrollProvider } from "./ScrollContext"
import { HeaderColorProvider } from "./HeaderColorContext"
import HeroTitleProvider from "./HeroTitleContext"

export default function GlobalProvider({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      <ScrollProvider>
        <HeaderColorProvider>
          <HeroTitleProvider>{children}</HeroTitleProvider>
        </HeaderColorProvider>
      </ScrollProvider>
    </LazyMotion>
  )
}
