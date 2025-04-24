"use client"

import { useEffect, useRef, useState } from "react"

export function TruckAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Load truck image
    const truckImage = new Image()
    truckImage.crossOrigin = "anonymous"
    truckImage.src = "/whimsical-bakery-on-wheels.png"

    // Animation variables
    let animationFrameId: number
    let startTime: number | null = null

    // Draw function
    const draw = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp
      }

      // Calculate progress (0 to 1)
      const elapsed = timestamp - startTime
      const duration = 5000 // 5 seconds for full animation
      const currentProgress = Math.min(elapsed / duration, 1)
      setProgress(currentProgress)

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw road
      ctx.fillStyle = "#e5e5e5"
      ctx.fillRect(0, canvas.height - 30, canvas.width, 20)

      // Draw road markings
      ctx.strokeStyle = "#ffffff"
      ctx.setLineDash([20, 20])
      ctx.beginPath()
      ctx.moveTo(0, canvas.height - 20)
      ctx.lineTo(canvas.width, canvas.height - 20)
      ctx.stroke()

      // Draw truck at current position
      const truckX = currentProgress * (canvas.width - 60)
      if (truckImage.complete) {
        ctx.drawImage(truckImage, truckX, canvas.height - 60, 60, 40)
      }

      // Draw bakery and destination
      ctx.fillStyle = "#f59e0b"
      ctx.beginPath()
      ctx.arc(10, canvas.height - 40, 10, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = "#10b981"
      ctx.beginPath()
      ctx.arc(canvas.width - 10, canvas.height - 40, 10, 0, Math.PI * 2)
      ctx.fill()

      // Continue animation if not complete
      if (currentProgress < 1) {
        animationFrameId = requestAnimationFrame(draw)
      }
    }

    // Start animation
    truckImage.onload = () => {
      animationFrameId = requestAnimationFrame(draw)
    }

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative w-full">
      <canvas ref={canvasRef} className="h-32 w-full rounded-lg bg-amber-50"></canvas>
      <div className="mt-2 flex items-center justify-between text-sm">
        <div>Bakery</div>
        <div>{Math.round(progress * 300)} miles</div>
        <div>Destination</div>
      </div>
    </div>
  )
}
