import { ScrollProvider } from "./ScrollContext"
import { SectionInViewProvider } from "./SectionInViewContext"

export default function GlobalProvider({ children }) {
  return (
    <ScrollProvider>
      <SectionInViewProvider>{children}</SectionInViewProvider>
    </ScrollProvider>
  )
}
