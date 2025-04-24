"use client"

import { useEffect, useState } from "react"

export function useLessonProgress() {
  const [progress, setProgress] = useState<number[]>([])

  useEffect(() => {
    // Load progress from localStorage on mount
    const savedProgress = localStorage.getItem("lessonProgress")
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
  }, [])

  const updateProgress = (step: number) => {
    if (!progress.includes(step)) {
      const newProgress = [...progress, step]
      setProgress(newProgress)
      localStorage.setItem("lessonProgress", JSON.stringify(newProgress))
    }
  }

  const resetProgress = () => {
    setProgress([])
    localStorage.removeItem("lessonProgress")
  }

  const isStepCompleted = (step: number) => {
    return progress.includes(step)
  }

  return { progress, updateProgress, resetProgress, isStepCompleted }
}
