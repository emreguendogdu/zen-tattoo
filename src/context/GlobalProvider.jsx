import { ScrollProvider } from "./ScrollContext"
import { HeaderColorProvider } from "./HeaderColorContext"
import HeroTitleProvider from "./HeroTitleContext"

export default function GlobalProvider({ children }) {
  return (
    <ScrollProvider>
      <HeaderColorProvider>
        <HeroTitleProvider>{children}</HeroTitleProvider>
      </HeaderColorProvider>
    </ScrollProvider>
  )
}
