"use client"

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  useId,
} from "react"

const HeaderColorContext = createContext({
  isDarkBg: false,
  registerSection: () => {},
  unregisterSection: () => {},
})

export const HeaderColorProvider = ({ children }) => {
  const [sections, setSections] = useState(new Set())

  const registerSection = useCallback((id) => {
    setSections((prev) => {
      if (prev.has(id)) return prev
      const newSet = new Set(prev)
      newSet.add(id)
      return newSet
    })
  }, [])

  const unregisterSection = useCallback((id) => {
    setSections((prev) => {
      if (!prev.has(id)) return prev
      const newSet = new Set(prev)
      newSet.delete(id)
      return newSet
    })
  }, [])

  const isDarkBg = sections.size > 0

  return (
    <HeaderColorContext.Provider
      value={{ isDarkBg, registerSection, unregisterSection }}
    >
      {children}
    </HeaderColorContext.Provider>
  )
}

export const useHeaderColor = () => useContext(HeaderColorContext)

export const useDarkSectionRef = (options = {}) => {
  const { threshold = 0.2 } = options
  const ref = useRef(null)
  const id = useId()
  const { registerSection, unregisterSection } = useHeaderColor()

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) registerSection(id)
        else unregisterSection(id)
      },
      { threshold }
    )
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
      unregisterSection(id)
    }
  }, [id, registerSection, unregisterSection, threshold])

  return ref
}
