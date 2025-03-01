"use client"

import { useInView } from "motion/react"
import React, { createContext, useContext, useRef } from "react"

const SectionInViewContext = createContext()

export const SectionInViewProvider = ({ children }) => {
  const galleryAndContactRef = useRef(null)
  const galleryAndContactIsInView = useInView(galleryAndContactRef, {})

  return (
    <SectionInViewContext.Provider
      value={{ galleryAndContactRef, galleryAndContactIsInView }}
    >
      {children}
    </SectionInViewContext.Provider>
  )
}

export const useSectionInView = () => {
  return useContext(SectionInViewContext)
}
