"use client"
import { createContext, useContext, useState } from "react"

const HeroTitleContext = createContext()

export const useHeroTitle = () => {
  const context = useContext(HeroTitleContext)
  if (!context) {
    throw new Error("useHeroTitle must be used within a HeroTitleProvider")
  }
  return context
}

export default function HeroTitleProvider({ children }) {
  const [heroTitleWidth, setHeroTitleWidth] = useState(0)

  return (
    <HeroTitleContext.Provider value={{ heroTitleWidth, setHeroTitleWidth }}>
      {children}
    </HeroTitleContext.Provider>
  )
}
