"use client"

import { useEffect, useRef } from "react"

interface FootballFieldProps {
  showDimensions?: boolean
  showRadius?: boolean
  showPerimeter?: boolean
  showArea?: boolean
}

export function FootballField({
  showDimensions = false,
  showRadius = false,
  showPerimeter = false,
  showArea = false,
}: FootballFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

      // Draw the field
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

      // Draw dimensions if needed
      if (showDimensions) {
        ctx.fillStyle = "black"
        ctx.font = "14px Arial"
        ctx.textAlign = "center"

        // Width label
        ctx.fillText("50 yards", centerX, fieldTop - 10)

        // Length label
        ctx.fillText("120 yards", centerX, fieldBottom + 20)

        // Draw dimension arrows
        ctx.beginPath()
        ctx.moveTo(fieldLeft, fieldTop - 5)
        ctx.lineTo(fieldRight, fieldTop - 5)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(centerX, fieldBottom + 5)
        ctx.lineTo(fieldRight, fieldBottom + 5)
        ctx.stroke()

        // Arrow heads
        drawArrowHead(ctx, fieldLeft, fieldTop - 5, 0)
        drawArrowHead(ctx, fieldRight, fieldTop - 5, Math.PI)
        drawArrowHead(ctx, centerX, fieldBottom + 5, 0)
        drawArrowHead(ctx, fieldRight, fieldBottom + 5, Math.PI)
      }

      // Draw radius if needed
      if (showRadius) {
        ctx.strokeStyle = "red"
        ctx.lineWidth = 2

        // Left radius
        ctx.beginPath()
        ctx.moveTo(fieldLeft, centerY)
        ctx.lineTo(fieldLeft - radius * scale, centerY)
        ctx.stroke()

        // Right radius
        ctx.beginPath()
        ctx.moveTo(fieldRight, centerY)
        ctx.lineTo(fieldRight + radius * scale, centerY)
        ctx.stroke()

        // Radius labels
        ctx.fillStyle = "red"
        ctx.font = "14px Arial"
        ctx.textAlign = "center"

        ctx.fillText("r = 25 yards", fieldLeft - (radius * scale) / 2, centerY - 10)

        ctx.fillText("r = 25 yards", fieldRight + (radius * scale) / 2, centerY - 10)
      }

      // Draw perimeter highlight if needed
      if (showPerimeter) {
        ctx.strokeStyle = "blue"
        ctx.lineWidth = 4

        // Top line
        ctx.beginPath()
        ctx.moveTo(fieldLeft, fieldTop)
        ctx.lineTo(fieldRight, fieldTop)
        ctx.stroke()

        // Bottom line
        ctx.beginPath()
        ctx.moveTo(fieldLeft, fieldBottom)
        ctx.lineTo(fieldRight, fieldBottom)
        ctx.stroke()

        // Left semicircle
        ctx.beginPath()
        ctx.arc(fieldLeft, centerY, radius * scale, Math.PI * 1.5, Math.PI * 0.5, false)
        ctx.stroke()

        // Right semicircle
        ctx.beginPath()
        ctx.arc(fieldRight, centerY, radius * scale, Math.PI * 0.5, Math.PI * 1.5, false)
        ctx.stroke()

        // Perimeter label
        ctx.fillStyle = "blue"
        ctx.font = "14px Arial"
        ctx.textAlign = "center"

        ctx.fillText("Perimeter ≈ 397 yards", centerX, fieldBottom + 30)
      }

      // Draw area highlight if needed
      if (showArea) {
        // Highlight rectangle area
        ctx.fillStyle = "rgba(255, 0, 0, 0.2)"
        ctx.fillRect(fieldLeft, fieldTop, fieldLength * scale, fieldWidth * scale)

        // Highlight semicircle areas
        ctx.fillStyle = "rgba(0, 0, 255, 0.2)"

        // Left semicircle
        ctx.beginPath()
        ctx.arc(fieldLeft, centerY, radius * scale, Math.PI * 1.5, Math.PI * 0.5, false)
        ctx.fill()

        // Right semicircle
        ctx.beginPath()
        ctx.arc(fieldRight, centerY, radius * scale, Math.PI * 0.5, Math.PI * 1.5, false)
        ctx.fill()

        // Area labels
        ctx.fillStyle = "black"
        ctx.font = "14px Arial"
        ctx.textAlign = "center"

        ctx.fillText("Rectangle: 6000 sq yards", centerX, centerY - 10)

        ctx.fillText("Semicircles: 1962.5 sq yards", centerX, centerY + 20)

        ctx.fillText("Total Area: 7962.5 sq yards", centerX, fieldBottom + 30)
      }
    }

    function drawArrowHead(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number) {
      const headLength = 10
      const headWidth = 6

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)

      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(-headLength, headWidth / 2)
      ctx.lineTo(-headLength, -headWidth / 2)
      ctx.closePath()
      ctx.fill()

      ctx.restore()
    }

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [showDimensions, showRadius, showPerimeter, showArea])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
