"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Page1() {
  const [animating, setAnimating] = useState(false)
  const [position, setPosition] = useState(0)

  const startAnimation = () => {
    if (animating) return
    setAnimating(true)
    setPosition(0)

    // Animation will run through all 4 sides
    const duration = 4000 // 4 seconds total
    const sideTime = duration / 4

    // Side 1 (bottom)
    setTimeout(() => setPosition(1), 0)
    // Side 2 (right)
    setTimeout(() => setPosition(2), sideTime)
    // Side 3 (top)
    setTimeout(() => setPosition(3), sideTime * 2)
    // Side 4 (left)
    setTimeout(() => setPosition(4), sideTime * 3)
    // Complete
    setTimeout(() => {
      setPosition(0)
      setAnimating(false)
    }, duration)
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">📏 Measuring Around Shapes!</h1>

      <div className="mb-8 text-center max-w-xl">
        <p className="text-lg mb-4">
          Imagine you need to put a fence around your garden. How much fencing would you need?
        </p>
        <p className="text-lg font-medium text-green-700">
          That's called finding the <span className="font-bold">perimeter</span> — the distance around a shape!
        </p>
      </div>

      <div className="relative w-full max-w-md h-64 mb-8 border-4 border-green-300 bg-green-100 rounded-lg">
        {/* Garden rectangle */}
        <div className="absolute inset-4 bg-green-200 rounded border-2 border-dashed border-green-400">
          {/* Plants */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 text-2xl">🌷</div>
          <div className="absolute top-2/3 left-1/2 w-8 h-8 text-2xl">🌱</div>
          <div className="absolute top-1/3 left-2/3 w-8 h-8 text-2xl">🌿</div>
        </div>

        {/* Person with measuring tape */}
        {position > 0 && (
          <motion.div
            className="absolute w-10 h-10 text-2xl z-10"
            initial={getPositionCoordinates(0)}
            animate={getPositionCoordinates(position)}
            transition={{ duration: 1 }}
          >
            👷‍♀️📏
          </motion.div>
        )}

        {/* Highlighted borders based on position */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-red-500 ${position === 1 ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        ></div>
        <div
          className={`absolute top-0 bottom-0 right-0 w-1 bg-red-500 ${position === 2 ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        ></div>
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-red-500 ${position === 3 ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        ></div>
        <div
          className={`absolute top-0 bottom-0 left-0 w-1 bg-red-500 ${position === 4 ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        ></div>
      </div>

      <Button onClick={startAnimation} disabled={animating} className="bg-green-600 hover:bg-green-700">
        <Play className="mr-2 h-4 w-4" />
        Walk around the garden
      </Button>
    </div>
  )

  function getPositionCoordinates(pos: number) {
    switch (pos) {
      case 0:
        return { bottom: 0, left: 0 }
      case 1:
        return { bottom: 0, left: "90%" }
      case 2:
        return { bottom: "90%", left: "90%" }
      case 3:
        return { bottom: "90%", left: 0 }
      case 4:
        return { bottom: 0, left: 0 }
      default:
        return { bottom: 0, left: 0 }
    }
  }
}
