"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useProgress } from "@/components/progress-provider"
import { motion } from "framer-motion"

export default function ModelPage() {
  const { updateProgress } = useProgress()
  const { toast } = useToast()

  const [numerator, setNumerator] = useState<string | null>(null)
  const [denominator, setDenominator] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState<string | null>(null)

  const handleDragStart = (value: string) => {
    setIsDragging(value)
  }

  const handleDragEnd = () => {
    setIsDragging(null)
  }

  const checkAnswer = () => {
    if (numerator === "337" && denominator === "13.7") {
      updateProgress("model", { correct: true })
      toast({
        title: "Correct!",
        description: "You've set up the equation correctly!",
      })
    } else {
      toast({
        title: "Not quite right",
        description: "Remember: Miles per gallon = Total miles ÷ Total gallons",
        variant: "destructive",
      })
    }
  }

  return (
    <PageLayout title="🧮 How Can We Set Up the Math?">
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <p className="text-lg">Now let's set up the mathematical model to find the miles per gallon (MPG).</p>
        </div>

        <div className="rounded-lg bg-gray-100 p-6">
          <h3 className="mb-4 text-center text-xl font-semibold">Step-by-step modeling</h3>

          <div className="mb-6 rounded-lg bg-white p-4">
            <p className="text-center text-lg">Total miles ÷ total gallons = miles per gallon (MPG)</p>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="flex flex-col items-center">
              <p className="mb-2 text-lg font-medium">Set up:</p>
              <div className="flex flex-col items-center">
                <p className="mb-1 text-lg">Miles per gallon</p>
                <p className="mb-1 text-lg">=</p>
                <div className="relative flex flex-col items-center">
                  <div
                    className="mb-1 h-12 w-32 rounded-lg border-2 border-dashed border-primary/70 bg-white p-2 text-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => {
                      if (isDragging) {
                        setNumerator(isDragging)
                      }
                    }}
                  >
                    {numerator ? (
                      <span className="text-lg font-medium">{numerator}</span>
                    ) : (
                      <span className="text-gray-400">Drop here</span>
                    )}
                  </div>
                  <div className="h-1 w-32 bg-black"></div>
                  <div
                    className="mt-1 h-12 w-32 rounded-lg border-2 border-dashed border-primary/70 bg-white p-2 text-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => {
                      if (isDragging) {
                        setDenominator(isDragging)
                      }
                    }}
                  >
                    {denominator ? (
                      <span className="text-lg font-medium">{denominator}</span>
                    ) : (
                      <span className="text-gray-400">Drop here</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragStart={() => handleDragStart("337")}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.05, zIndex: 10 }}
              className="cursor-grab rounded-lg bg-blue-100 p-3 shadow-md"
            >
              <span className="text-lg font-medium">337</span>
            </motion.div>

            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragStart={() => handleDragStart("13.7")}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.05, zIndex: 10 }}
              className="cursor-grab rounded-lg bg-green-100 p-3 shadow-md"
            >
              <span className="text-lg font-medium">13.7</span>
            </motion.div>
          </div>

          <div className="mt-8 rounded-lg bg-blue-50 p-4">
            <h4 className="mb-2 font-semibold">Mini-hint:</h4>
            <p>
              Remember that dividing total miles by total gallons gives us the unit rate (miles per gallon). This tells
              us how many miles the car can travel on just one gallon of gas.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button onClick={checkAnswer} size="lg">
            Check My Answer
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
