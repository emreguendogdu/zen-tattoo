import { SectionInViewProvider } from "./SectionInViewContext"

export default function GlobalProvider({ children }) {
  return <SectionInViewProvider>{children}</SectionInViewProvider>
}
