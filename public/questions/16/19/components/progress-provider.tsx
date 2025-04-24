"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type ProgressContextType = {
  progress: {
    [key: string]: any
  }
  updateProgress: (page: string, data: any) => void
  getProgress: (page: string) => any
}

const ProgressContext = createContext<ProgressContextType>({
  progress: {},
  updateProgress: () => {},
  getProgress: () => null,
})

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<{ [key: string]: any }>({})

  const updateProgress = (page: string, data: any) => {
    setProgress((prev) => ({
      ...prev,
      [page]: data,
    }))
  }

  const getProgress = (page: string) => {
    return progress[page]
  }

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, getProgress }}>{children}</ProgressContext.Provider>
  )
}

export const useProgress = () => useContext(ProgressContext)
