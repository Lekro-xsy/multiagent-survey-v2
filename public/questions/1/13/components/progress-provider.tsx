"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

type ProgressContextType = {
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
}

const ProgressContext = createContext<ProgressContextType>({
  currentPage: 1,
  totalPages: 9,
  setCurrentPage: () => {},
  nextPage: () => {},
  prevPage: () => {},
})

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 9

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <ProgressContext.Provider
      value={{
        currentPage,
        totalPages,
        setCurrentPage,
        nextPage,
        prevPage,
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

export const useProgress = () => useContext(ProgressContext)
