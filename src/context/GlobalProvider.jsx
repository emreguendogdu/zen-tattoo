import OverflowProvider from "./OverflowContext"
import { SectionInViewProvider } from "./SectionInViewContext"

export default function GlobalProvider({ children }) {
  return (
    <SectionInViewProvider>
      <OverflowProvider>{children}</OverflowProvider>
    </SectionInViewProvider>
  )
}
