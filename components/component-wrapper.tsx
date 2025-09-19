"use client"

import { useEffect } from "react"

interface ComponentWrapperProps {
  children: React.ReactNode
  onLoad?: () => void
  delay?: number
}

export default function ComponentWrapper({ children, onLoad, delay = 100 }: ComponentWrapperProps) {
  useEffect(() => {
    // Mark as loaded after a short delay to ensure component is rendered
    const timer = setTimeout(() => {
      onLoad?.()
    }, delay)
    
    return () => clearTimeout(timer)
  }, [onLoad, delay])

  return <>{children}</>
}
