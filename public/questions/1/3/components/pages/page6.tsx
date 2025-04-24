"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Leaf } from "lucide-react"

export default function Page6() {
  const [currentStep, setCurrentStep] = useState(0)
  const [autoPlay, setAutoPlay] = useState(false)

  const steps = [
    { days: 10, leaves: 2, formula: "Initial value = 2" },
    { days: 20, leaves: 4, formula: "2 × 2 = 4" },
    { days: 30, leaves: 8, formula: "4 × 2 = 8" },
    { days: 40, leaves: 16, formula: "8 × 2 = 16" },
    { days: 50, leaves: 32, formula: "16 × 2 = 32" },
    { days: 60, leaves: 64, formula: "32 × 2 = 64" },
  ]

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (autoPlay && currentStep < steps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep(currentStep + 1)
      }, 1500)
    } else if (autoPlay && currentStep === steps.length - 1) {
      setAutoPlay(false)
    }

    return () => clearTimeout(timer)
  }, [autoPlay, currentStep])

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleAutoPlay = () => {
    setAutoPlay(!autoPlay)
  }

  const renderLeaves = (count: number) => {
    const leafElements = []
    for (let i = 0; i < Math.min(count, 20); i++) {
      leafElements.push(
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
          className="inline-block mx-1"
        >
          <Leaf className="h-6 w-6 text-green-500" />
        </motion.div>,
      )
    }

    if (count > 20) {
      leafElements.push(
        <motion.div
          key="more"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block mx-1 text-green-700 font-bold"
        >
          +{count - 20} more
        </motion.div>,
      )
    }

    return leafElements
  }

  return (
    <div className="flex flex-col items-center">
      <motion.h1
        className="text-3xl font-bold text-green-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎉 See the Correct Answer!
      </motion.h1>

      <motion.div
        className="w-full max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-center mb-4">
              Day {steps[currentStep].days}: {steps[currentStep].leaves} leaves
            </h2>
            <div className="flex flex-wrap justify-center gap-2 min-h-16 mb-4">
              {renderLeaves(steps[currentStep].leaves)}
            </div>
            <div className="text-center text-lg font-medium text-green-700">{steps[currentStep].formula}</div>
          </div>

          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0 || autoPlay}>
              Previous Step
            </Button>
            <Button
              variant={autoPlay ? "destructive" : "default"}
              onClick={handleAutoPlay}
              className={autoPlay ? "" : "bg-amber-600 hover:bg-amber-700"}
            >
              {autoPlay ? "Stop Demo" : "Auto Demo"}
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1 || autoPlay}
              className="bg-green-600 hover:bg-green-700"
            >
              Next Step
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Table className="border rounded-lg overflow-hidden">
          <TableHeader className="bg-green-50">
            <TableRow>
              <TableHead className="text-center font-bold">Days</TableHead>
              <TableHead className="text-center font-bold">Number of Leaves</TableHead>
              <TableHead className="text-center font-bold">Calculation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {steps.map((step, index) => (
              <TableRow key={index} className={index === currentStep ? "bg-green-100" : ""}>
                <TableCell className="text-center">Day {step.days}</TableCell>
                <TableCell className="text-center font-medium">{step.leaves}</TableCell>
                <TableCell className="text-center">{step.formula}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      <motion.div
        className="bg-blue-50 p-6 rounded-lg max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Mathematical Derivation Summary</h3>
        <div className="space-y-4">
          <p>
            Starting from day 10, every 10 days the number of leaves doubles. From day 10 to day 60, there are 5
            "doubling cycles".
          </p>
          <div className="bg-white p-4 rounded-lg text-center">
            <p className="text-lg font-medium">
              Initial value × 2<sup>5</sup> = 2 × 32 = 64 leaves
            </p>
          </div>
          <p>
            This is a typical <span className="font-bold">exponential growth</span> model. When we encounter
            descriptions like "doubles every period of time," we can usually represent it using an exponential function.
          </p>
          <p>
            General form: Initial value × 2<sup>number of doubling cycles</sup>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
