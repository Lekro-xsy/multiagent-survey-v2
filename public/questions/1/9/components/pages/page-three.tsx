"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Axe } from "lucide-react"

interface PageThreeProps {
  onNext: () => void
}

export default function PageThree({ onNext }: PageThreeProps) {
  const [currentRound, setCurrentRound] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const rounds = [
    { round: 0, logs: 1 },
    { round: 1, logs: 2 },
    { round: 2, logs: 4 },
    { round: 3, logs: 8 },
    { round: 4, logs: 16 },
    { round: 5, logs: "?" },
  ]

  const handleSplitAgain = () => {
    if (currentRound < 5 && !isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentRound((prev) => prev + 1)
        setIsAnimating(false)
      }, 1000)
    }
  }

  const renderLogs = (count: number | string) => {
    if (count === "?") {
      return (
        <div className="flex justify-center items-center h-full">
          <span className="text-4xl font-bold text-amber-800">?</span>
        </div>
      )
    }

    // Calculate the size and layout based on count
    let size = "w-16 h-8"
    if (count > 4) size = "w-8 h-4"
    if (count > 8) size = "w-6 h-3"
    if (count > 16) size = "w-4 h-2"

    // Create a grid layout
    let cols = "grid-cols-2"
    if (count > 4) cols = "grid-cols-4"
    if (count > 8) cols = "grid-cols-8"
    if (count > 16) cols = "grid-cols-8"

    return (
      <div className={`grid ${cols} gap-1 justify-center items-center`}>
        {Array.from({ length: count as number }).map((_, i) => (
          <div
            key={i}
            className={`${size} bg-amber-800 rounded transition-all ${isAnimating ? "animate-pulse" : ""}`}
          ></div>
        ))}
      </div>
    )
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-green-800 mb-6">🎬 Watch How the Logs Multiply!</h1>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {rounds.map((item, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 ${index === currentRound ? "bg-green-50 border-green-500" : ""}`}
          >
            <h3 className="font-medium text-green-700 mb-2">Round {item.round}</h3>
            <div className="h-20 flex items-center justify-center">
              {index <= currentRound && renderLogs(item.logs)}
            </div>
            <p className="mt-2 font-bold">
              {item.logs} {item.logs === 1 ? "log" : "logs"}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Watch what happens as we split the logs in each round. Each log splits into 2 new logs!
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <Button
          size="lg"
          className="bg-green-700 hover:bg-green-800 gap-2"
          onClick={handleSplitAgain}
          disabled={currentRound >= 5 || isAnimating}
        >
          <Axe className="h-5 w-5" />
          Split Again
        </Button>

        <Button variant="outline" size="lg" onClick={onNext} disabled={currentRound < 5}>
          Continue
        </Button>
      </div>
    </div>
  )
}
