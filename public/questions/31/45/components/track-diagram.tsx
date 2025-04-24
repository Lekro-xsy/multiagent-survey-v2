"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface TrackDiagramProps {
  animate?: boolean
  onAnimationComplete?: () => void
  showLabels?: boolean
  interactive?: boolean
}

export function TrackDiagram({
  animate = false,
  onAnimationComplete,
  showLabels = true,
  interactive = false,
}: TrackDiagramProps) {
  const [highlightedElement, setHighlightedElement] = useState<string | null>(null)

  const handleElementHover = (element: string) => {
    if (interactive) {
      setHighlightedElement(element)
    }
  }

  return (
    <div className="relative mx-auto h-64 w-full max-w-2xl overflow-hidden rounded-lg bg-slate-100">
      {/* Track */}
      <div className="absolute left-1/2 top-1/2 h-32 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-slate-400" />

      {/* Start line */}
      <div
        className={`absolute left-[15%] top-1/2 h-40 w-0.5 -translate-y-1/2 bg-${highlightedElement === "start" ? "green-500" : "slate-500"}`}
        onMouseEnter={() => handleElementHover("start")}
        onMouseLeave={() => setHighlightedElement(null)}
      />

      {/* Finish line */}
      <div
        className={`absolute left-[85%] top-1/2 h-40 w-0.5 -translate-y-1/2 bg-${highlightedElement === "finish" ? "red-500" : "slate-500"}`}
        onMouseEnter={() => handleElementHover("finish")}
        onMouseLeave={() => setHighlightedElement(null)}
      />

      {/* Road */}
      <div
        className={`absolute left-1/2 top-[20%] h-1 w-[80%] -translate-x-1/2 bg-${highlightedElement === "road" ? "blue-500" : "slate-700"}`}
        onMouseEnter={() => handleElementHover("road")}
        onMouseLeave={() => setHighlightedElement(null)}
      />

      {/* Car */}
      {animate ? (
        <motion.div
          className="absolute top-[18%] h-6 w-10 -translate-y-1/2"
          initial={{ left: "15%" }}
          animate={{ left: "85%" }}
          transition={{ duration: 4.1, ease: "linear" }}
          onAnimationComplete={onAnimationComplete}
        >
          <div className="h-full w-full rounded bg-red-500" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs font-bold">🚗</div>
        </motion.div>
      ) : (
        <div
          className="absolute left-[15%] top-[18%] h-6 w-10 -translate-y-1/2"
          onMouseEnter={() => handleElementHover("car")}
          onMouseLeave={() => setHighlightedElement(null)}
        >
          <div className="h-full w-full rounded bg-red-500" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs font-bold">🚗</div>
        </div>
      )}

      {/* Runner */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 text-2xl">🏃‍♂️</div>

      {/* Labels */}
      {showLabels && (
        <>
          <div
            className={`absolute left-[15%] top-[70%] -translate-x-1/2 text-sm font-medium ${highlightedElement === "start" ? "text-green-600" : ""}`}
          >
            Start Line
          </div>
          <div
            className={`absolute left-[85%] top-[70%] -translate-x-1/2 text-sm font-medium ${highlightedElement === "finish" ? "text-red-600" : ""}`}
          >
            Finish Line (50 yards)
          </div>
          <div
            className={`absolute left-1/2 top-[10%] -translate-x-1/2 text-sm font-medium ${highlightedElement === "road" ? "text-blue-600" : ""}`}
          >
            Parallel Road
          </div>
          <div className="absolute left-[50%] top-[40%] -translate-x-1/2 text-sm font-medium">Track</div>
        </>
      )}
    </div>
  )
}
