"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function IntroPage() {
  const [animating, setAnimating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [gallonsUsed, setGallonsUsed] = useState(0)
  const [milesTravel, setMilesTravel] = useState(0)

  const startAnimation = () => {
    if (animating) return

    setAnimating(true)
    setProgress(0)
    setGallonsUsed(0)
    setMilesTravel(0)

    const duration = 5000 // 5 seconds for the animation
    const interval = 50 // update every 50ms
    const steps = duration / interval
    const gallonIncrement = 13.7 / steps
    const mileIncrement = 337 / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const newProgress = currentStep / steps
      setProgress(newProgress)
      setGallonsUsed(Number((gallonIncrement * currentStep).toFixed(1)))
      setMilesTravel(Math.round(mileIncrement * currentStep))

      if (currentStep >= steps) {
        clearInterval(timer)
        setTimeout(() => setAnimating(false), 1000)
      }
    }, interval)
  }

  return (
    <PageLayout title="🚗 Fueling the Journey!">
      <div className="flex flex-col items-center space-y-8">
        <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gradient-to-b from-sky-100 to-sky-50">
          {/* Road */}
          <div className="absolute bottom-0 h-16 w-full bg-gray-600">
            <div className="absolute top-7 h-2 w-full bg-yellow-400">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-2 w-8 bg-yellow-400"
                  style={{ left: `${i * 10}%`, opacity: i % 2 === 0 ? 1 : 0 }}
                />
              ))}
            </div>
          </div>

          {/* Car */}
          <motion.div
            className="absolute bottom-16 left-10 h-20 w-40"
            animate={{
              x: animating ? progress * 600 : 0,
            }}
            transition={{ ease: "linear", duration: 0.05 }}
          >
            <img src="/cheerful-cartoon-car.png" alt="Car" className="h-full w-full object-contain" />
          </motion.div>

          {/* Fuel Gauge */}
          <div className="absolute right-10 top-10 h-32 w-32 rounded-full border-4 border-gray-700 bg-white p-2">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold">FUEL</span>
              </div>
              <motion.div
                className="absolute bottom-1/2 left-1/2 h-1 w-16 origin-left bg-red-500"
                style={{ transformOrigin: "0% 50%" }}
                animate={{
                  rotate: animating ? 90 - progress * 90 : 90,
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 text-center text-xs">E</div>
              <div className="absolute left-0 right-0 top-0 text-center text-xs">F</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg">
            A motorist traveled 337 miles using 13.7 gallons of gasoline. Now, they want to figure out:
            <strong> how many miles did they travel per gallon of gas?</strong>
          </p>
        </div>

        <div className="flex w-full justify-around rounded-lg bg-gray-100 p-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Miles Traveled</p>
            <p className="text-2xl font-bold">{milesTravel}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Gallons Used</p>
            <p className="text-2xl font-bold">{gallonsUsed}</p>
          </div>
        </div>

        <Button size="lg" onClick={startAnimation} disabled={animating} className="mt-4">
          {animating ? "Driving..." : "Start the Trip"}
        </Button>
      </div>
    </PageLayout>
  )
}
