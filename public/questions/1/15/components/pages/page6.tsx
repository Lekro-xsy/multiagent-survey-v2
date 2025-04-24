"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Page6() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = [
    { title: "Set up the division", content: "360 ÷ 12" },
    { title: "Solve the division", content: "360 ÷ 12 = 30" },
    { title: "State the answer", content: "Brandon reads 30 words per minute!" },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-center text-2xl font-bold text-blue-600">🎯 Let&apos;s See How Brandon Reads!</h2>

      <div className="mb-8 max-w-2xl space-y-4 text-center">
        <p className="text-lg text-slate-700">
          Here&apos;s the step-by-step solution to find how many words Brandon reads per minute.
        </p>
      </div>

      <div className="mb-8 w-full max-w-md">
        <div className="mb-4 flex items-center justify-between">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                index <= currentStep ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="rounded-lg border bg-white p-6 shadow-sm"
        >
          <h3 className="mb-4 text-lg font-semibold text-blue-600">{steps[currentStep].title}</h3>

          <div className="mb-4 rounded-lg bg-blue-50 p-4 text-center">
            <p className="text-xl font-bold text-blue-700">{steps[currentStep].content}</p>
          </div>

          {currentStep === 2 && (
            <div className="mt-6 grid grid-cols-4 gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="rounded-lg bg-blue-100 p-2 text-center">
                  <p className="text-sm font-medium text-blue-700">Minute {index + 1}</p>
                  <p className="font-bold text-blue-600">30 words</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <div className="mt-4 flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
            Previous Step
          </Button>

          <Button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Next Step
          </Button>
        </div>
      </div>

      {currentStep === steps.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-lg bg-green-100 p-4 text-center"
        >
          <p className="font-semibold text-green-700">
            Excellent! Now you know how to find a unit rate by dividing the total amount by the total units.
          </p>
        </motion.div>
      )}

      <div className="mt-6 rounded-lg bg-blue-50 p-4 text-center text-sm text-blue-700">
        <p>
          <strong>Remember:</strong> To find a unit rate, divide the total amount by the total number of units.
        </p>
      </div>
    </div>
  )
}
