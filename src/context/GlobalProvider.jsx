import { ScrollProvider } from "./ScrollContext"
import { HeaderColorProvider } from "./HeaderColorContext"

export default function GlobalProvider({ children }) {
  return (
    <ScrollProvider>
      <HeaderColorProvider>{children}</HeaderColorProvider>
    </ScrollProvider>
  )
}
