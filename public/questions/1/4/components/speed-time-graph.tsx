"use client"

import { useEffect, useRef } from "react"

interface SpeedTimeGraphProps {
  initialSpeed: number
  brakingTime: number
  showArea?: boolean
}

export function SpeedTimeGraph({ initialSpeed, brakingTime, showArea = true }: SpeedTimeGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const padding = 40
    const graphWidth = canvas.width - padding * 2
    const graphHeight = canvas.height - padding * 2

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw axes
    ctx.strokeStyle = "#333"
    ctx.lineWidth = 2

    // X-axis
    ctx.beginPath()
    ctx.moveTo(padding, canvas.height - padding)
    ctx.lineTo(canvas.width - padding, canvas.height - padding)
    ctx.stroke()

    // Y-axis
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, canvas.height - padding)
    ctx.stroke()

    // Draw axis labels
    ctx.fillStyle = "#333"
    ctx.font = "14px Arial"

    // X-axis label
    ctx.fillText("Time (seconds)", canvas.width / 2 - 40, canvas.height - 10)

    // Y-axis label
    ctx.save()
    ctx.translate(15, canvas.height / 2)
    ctx.rotate(-Math.PI / 2)
    ctx.fillText("Speed (mph)", 0, 0)
    ctx.restore()

    // Draw tick marks on X-axis
    for (let i = 0; i <= brakingTime; i += 0.5) {
      const x = padding + (i / brakingTime) * graphWidth
      ctx.beginPath()
      ctx.moveTo(x, canvas.height - padding)
      ctx.lineTo(x, canvas.height - padding + 5)
      ctx.stroke()
      ctx.fillText(i.toString(), x - 5, canvas.height - padding + 20)
    }

    // Draw tick marks on Y-axis
    const yTicks = [0, initialSpeed / 2, initialSpeed]
    yTicks.forEach((speed) => {
      const y = canvas.height - padding - (speed / initialSpeed) * graphHeight
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(padding - 5, y)
      ctx.stroke()
      ctx.fillText(speed.toString(), padding - 25, y + 5)
    })

    // Draw the speed-time graph (linear deceleration)
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(canvas.width - padding, canvas.height - padding)
    ctx.strokeStyle = "#e74c3c"
    ctx.lineWidth = 3
    ctx.stroke()

    // Fill the area under the curve if requested
    if (showArea) {
      ctx.beginPath()
      ctx.moveTo(padding, padding)
      ctx.lineTo(canvas.width - padding, canvas.height - padding)
      ctx.lineTo(padding, canvas.height - padding)
      ctx.closePath()
      ctx.fillStyle = "rgba(231, 76, 60, 0.2)"
      ctx.fill()

      // Add label for area
      ctx.fillStyle = "#333"
      ctx.fillText("Area = Distance Traveled", canvas.width / 2 - 70, canvas.height / 2)
    }

    // Draw average speed line
    ctx.beginPath()
    ctx.moveTo(padding, canvas.height - padding - graphHeight / 2)
    ctx.lineTo(canvas.width - padding, canvas.height - padding - graphHeight / 2)
    ctx.strokeStyle = "#3498db"
    ctx.setLineDash([5, 5])
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.setLineDash([])

    // Label for average speed
    ctx.fillStyle = "#3498db"
    ctx.fillText(
      `Average Speed = ${initialSpeed / 2} mph`,
      padding + 10,
      canvas.height - padding - graphHeight / 2 - 10,
    )
  }, [initialSpeed, brakingTime, showArea])

  return <canvas ref={canvasRef} className="w-full h-80 border rounded-md bg-white" />
}
