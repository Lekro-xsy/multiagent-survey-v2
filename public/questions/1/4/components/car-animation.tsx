"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

interface CarAnimationProps {
  initialSpeed: number
  brakingTime: number
  distanceTraveled?: number
}

export function CarAnimation({ initialSpeed, brakingTime, distanceTraveled }: CarAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [progress, setProgress] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  const drawCar = (ctx: CanvasRenderingContext2D, x: number) => {
    const canvasWidth = ctx.canvas.width
    const canvasHeight = ctx.canvas.height
    const roadY = canvasHeight * 0.7
    const carWidth = 60
    const carHeight = 30

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    // Draw road
    ctx.fillStyle = "#333"
    ctx.fillRect(0, roadY, canvasWidth, 20)

    // Draw dashed line
    ctx.strokeStyle = "white"
    ctx.setLineDash([20, 20])
    ctx.beginPath()
    ctx.moveTo(0, roadY + 10)
    ctx.lineTo(canvasWidth, roadY + 10)
    ctx.stroke()
    ctx.setLineDash([])

    // Draw car
    ctx.fillStyle = "#e74c3c"
    ctx.fillRect(x, roadY - carHeight, carWidth, carHeight)

    // Draw windows
    ctx.fillStyle = "#3498db"
    ctx.fillRect(x + 40, roadY - carHeight + 5, 15, 10)
    ctx.fillRect(x + 15, roadY - carHeight + 5, 20, 10)

    // Draw wheels
    ctx.fillStyle = "#333"
    ctx.beginPath()
    ctx.arc(x + 15, roadY, 8, 0, Math.PI * 2)
    ctx.arc(x + 45, roadY, 8, 0, Math.PI * 2)
    ctx.fill()

    // Draw distance if provided
    if (distanceTraveled && progress === 1) {
      ctx.fillStyle = "#2c3e50"
      ctx.font = "16px Arial"
      ctx.fillText(`${distanceTraveled} feet`, canvasWidth / 2 - 40, roadY - 40)

      // Draw distance line
      ctx.strokeStyle = "#2c3e50"
      ctx.beginPath()
      ctx.moveTo(0, roadY + 30)
      ctx.lineTo(canvasWidth * 0.8, roadY + 30)
      ctx.stroke()

      // Draw arrows
      ctx.beginPath()
      ctx.moveTo(0, roadY + 30)
      ctx.lineTo(10, roadY + 25)
      ctx.lineTo(10, roadY + 35)
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(canvasWidth * 0.8, roadY + 30)
      ctx.lineTo(canvasWidth * 0.8 - 10, roadY + 25)
      ctx.lineTo(canvasWidth * 0.8 - 10, roadY + 35)
      ctx.fill()
    }
  }

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp
    }

    const elapsed = timestamp - startTimeRef.current
    const duration = brakingTime * 1000 // Convert to milliseconds

    if (elapsed < duration) {
      setProgress(elapsed / duration)
      animationRef.current = requestAnimationFrame(animate)
    } else {
      setProgress(1)
      setIsAnimating(false)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Calculate car position based on progress
    // For uniform deceleration, position = initialPos + initialSpeed*t - 0.5*a*t^2
    // Since we're working with normalized progress (0-1), we can simplify
    const startX = 0
    const endX = canvas.width * 0.8

    // For uniform deceleration, the position follows a quadratic curve
    // p = 1 - (1-t)^2 where t is linear progress and p is position progress
    const positionProgress = 1 - Math.pow(1 - progress, 2)
    const x = startX + positionProgress * (endX - startX)

    drawCar(ctx, x)
  }, [progress, brakingTime, distanceTraveled])

  const handleStartAnimation = () => {
    if (isAnimating) return

    setIsAnimating(true)
    startTimeRef.current = 0
    animationRef.current = requestAnimationFrame(animate)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <canvas ref={canvasRef} className="w-full h-64 border rounded-md bg-blue-50" />
      <Button onClick={handleStartAnimation} disabled={isAnimating} className="px-6">
        {isAnimating ? "Braking..." : "Start Braking!"}
      </Button>
    </div>
  )
}
