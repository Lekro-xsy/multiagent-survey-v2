"use client"

import { useCallback } from "react"
import confetti from "canvas-confetti"

export function useConfetti() {
  const fireConfetti = useCallback((options?: confetti.Options) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      ...options,
    })
  }, [])

  return { fireConfetti }
}
