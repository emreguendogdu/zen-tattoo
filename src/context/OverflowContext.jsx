"use client"
import { createContext, useState, useEffect, ReactNode } from "react"

const OverflowContext = createContext()

export default function OverflowProvider({ children }) {
  const [overflow, setOverflow] = useState("hidden")

  return (
    <OverflowContext.Provider value={{ overflow, setOverflow }}>
      {children}
    </OverflowContext.Provider>
  )
}
