"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface PyramidVisualizationProps {
  layers?: number
  showNumbers?: boolean
  animated?: boolean
  highlightLayer?: number
  className?: string
}

export function PyramidVisualization({
  layers = 5,
  showNumbers = true,
  animated = false,
  highlightLayer,
  className,
}: PyramidVisualizationProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentLayer, setCurrentLayer] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate bricks per layer using the pattern n²
  const bricksPerLayer = Array.from({ length: layers }, (_, i) => Math.pow(layers - i, 2))

  const startAnimation = () => {
    if (animated && !isAnimating) {
      setIsAnimating(true)
      setCurrentLayer(0)
    }
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isAnimating && currentLayer < layers) {
      timeout = setTimeout(() => {
        setCurrentLayer(currentLayer + 1)
      }, 800)
    } else if (currentLayer >= layers) {
      setIsAnimating(false)
    }

    return () => clearTimeout(timeout)
  }, [isAnimating, currentLayer, layers])

  return (
    <div ref={containerRef} className={cn("flex flex-col items-center justify-center py-4", className)}>
      <div className="relative flex flex-col items-center justify-center">
        {Array.from({ length: layers }).map((_, layerIndex) => {
          const layer = layers - layerIndex
          const brickCount = Math.pow(layer, 2)
          const isHighlighted = highlightLayer === layerIndex + 1

          // Calculate width based on the widest layer (bottom layer)
          const maxWidth = Math.pow(layers, 2) * 20 // 20px per brick in the widest row
          const layerWidth = (brickCount / Math.pow(layers, 2)) * maxWidth

          return (
            <motion.div
              key={layerIndex}
              className={cn(
                "mb-2 flex flex-wrap justify-center rounded-sm",
                isHighlighted ? "bg-yellow-200" : "bg-orange-300",
              )}
              style={{
                width: `${layerWidth}px`,
                opacity: animated ? (currentLayer > layerIndex ? 1 : 0) : 1,
              }}
              initial={animated ? { opacity: 0 } : {}}
              animate={animated && currentLayer > layerIndex ? { opacity: 1 } : animated ? { opacity: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {Array.from({ length: brickCount }).map((_, brickIndex) => (
                <div
                  key={brickIndex}
                  className={cn(
                    "m-0.5 h-4 w-4 rounded-sm border border-orange-600 bg-orange-400",
                    isHighlighted ? "border-yellow-600 bg-yellow-400" : "",
                  )}
                />
              ))}
              {showNumbers && (
                <div className="absolute -right-16 flex items-center text-sm font-medium">
                  <span>{brickCount} bricks</span>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {animated && (
        <button
          onClick={startAnimation}
          className="mt-4 rounded-md bg-primary px-4 py-2 text-white"
          disabled={isAnimating}
        >
          {isAnimating ? "Building..." : "Build the Pyramid!"}
        </button>
      )}
    </div>
  )
}
