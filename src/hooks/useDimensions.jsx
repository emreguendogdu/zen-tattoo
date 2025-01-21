"use client"

import { useEffect, useState } from "react"

export default function useDimensions() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  // TODO That's not working very well. Migrate it.

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [dimensions])

  return dimensions
}
