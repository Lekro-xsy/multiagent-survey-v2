"use client"

import { useEffect, useRef, useState } from "react"

export function HighlightShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [highlightRectangle, setHighlightRectangle] = useState(false)
  const [highlightSemicircles, setHighlightSemicircles] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match container
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
      drawField()
    }

    // Initial resize
    resizeCanvas()

    // Listen for window resize
    window.addEventListener("resize", resizeCanvas)

    function drawField() {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Field dimensions (in yards)
      const fieldLength = 120
      const fieldWidth = 50
      const radius = fieldWidth / 2

      // Scale to fit canvas (with padding)
      const padding = 40
      const scale = Math.min(
        (canvas.width - padding * 2) / (fieldLength + fieldWidth),
        (canvas.height - padding * 2) / fieldWidth,
      )

      // Center the field
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Calculate field coordinates
      const fieldLeft = centerX - (fieldLength * scale) / 2
      const fieldRight = centerX + (fieldLength * scale) / 2
      const fieldTop = centerY - (fieldWidth * scale) / 2
      const fieldBottom = centerY + (fieldWidth * scale) / 2

      // Draw the field base
      ctx.fillStyle = "#4ade80" // Light green

      // Draw rectangle
      ctx.fillRect(fieldLeft, fieldTop, fieldLength * scale, fieldWidth * scale)

      // Draw left semicircle
      ctx.beginPath()
      ctx.arc(fieldLeft, centerY, radius * scale, Math.PI * 1.5, Math.PI * 0.5, false)
      ctx.fill()

      // Draw right semicircle
      ctx.beginPath()
      ctx.arc(fieldRight, centerY, radius * scale, Math.PI * 0.5, Math.PI * 1.5, false)
      ctx.fill()

      // Draw field markings
      ctx.strokeStyle = "white"
      ctx.lineWidth = 2

      // Rectangle outline
      ctx.beginPath()
      ctx.moveTo(fieldLeft, fieldTop)
      ctx.lineTo(fieldRight, fieldTop)
      ctx.lineTo(fieldRight, fieldBottom)
      ctx.lineTo(fieldLeft, fieldBottom)
      ctx.closePath()
      ctx.stroke()

      // Left semicircle
      ctx.beginPath()
      ctx.arc(fieldLeft, centerY, radius * scale, Math.PI * 1.5, Math.PI * 0.5, false)
      ctx.stroke()

      // Right semicircle
      ctx.beginPath()
      ctx.arc(fieldRight, centerY, radius * scale, Math.PI * 0.5, Math.PI * 1.5, false)
      ctx.stroke()

      // Draw yard lines
      for (let i = 1; i < 12; i++) {
        const x = fieldLeft + (i * fieldLength * scale) / 12
        ctx.beginPath()
        ctx.moveTo(x, fieldTop)
        ctx.lineTo(x, fieldBottom)
        ctx.stroke()
      }

      // Highlight rectangle if needed
      if (highlightRectangle) {
        ctx.fillStyle = "rgba(255, 0, 0, 0.3)"
        ctx.fillRect(fieldLeft, fieldTop, fieldLength * scale, fieldWidth * scale)

        // Rectangle label
        ctx.fillStyle = "black"
        ctx.font = "bold 16px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Rectangle", centerX, centerY)

        ctx.font = "14px Arial"
        ctx.fillText("50 × 120 yards", centerX, centerY + 20)
      }

      // Highlight semicircles if needed
      if (highlightSemicircles) {
        ctx.fillStyle = "rgba(0, 0, 255, 0.3)"

        // Left semicircle
        ctx.beginPath()
        ctx.arc(fieldLeft, centerY, radius * scale, Math.PI * 1.5, Math.PI * 0.5, false)
        ctx.fill()

        // Right semicircle
        ctx.beginPath()
        ctx.arc(fieldRight, centerY, radius * scale, Math.PI * 0.5, Math.PI * 1.5, false)
        ctx.fill()

        // Semicircle labels
        ctx.fillStyle = "black"
        ctx.font = "bold 14px Arial"
        ctx.textAlign = "center"

        ctx.fillText("Semicircle", fieldLeft - (radius * scale) / 2, centerY)

        ctx.fillText("Semicircle", fieldRight + (radius * scale) / 2, centerY)

        ctx.font = "12px Arial"
        ctx.fillText("r = 25 yards", fieldLeft - (radius * scale) / 2, centerY + 15)

        ctx.fillText("r = 25 yards", fieldRight + (radius * scale) / 2, centerY + 15)
      }
    }

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [highlightRectangle, highlightSemicircles])

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />

      <div className="absolute bottom-4 left-4 flex gap-2">
        <button
          className={`px-3 py-2 rounded-lg ${highlightRectangle ? "bg-red-500 text-white" : "bg-white/80"}`}
          onClick={() => setHighlightRectangle(!highlightRectangle)}
        >
          Highlight Rectangle
        </button>

        <button
          className={`px-3 py-2 rounded-lg ${highlightSemicircles ? "bg-blue-500 text-white" : "bg-white/80"}`}
          onClick={() => setHighlightSemicircles(!highlightSemicircles)}
        >
          Highlight Semicircles
        </button>
      </div>
    </div>
  )
}
