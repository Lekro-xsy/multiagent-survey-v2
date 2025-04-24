"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface PageSixProps {
  onNext: () => void
}

interface SolutionStep {
  id: string
  title: string
  content: React.ReactNode
  isOpen: boolean
}

export function PageSix({ onNext }: PageSixProps) {
  const [steps, setSteps] = useState<SolutionStep[]>([
    {
      id: "step1",
      title: "Step 1: Calculate the rate (miles per hour)",
      content: (
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="font-medium mr-2">Rate =</span>
            <div className="flex flex-col items-center mx-2">
              <span>41.4 miles</span>
              <div className="w-full h-0.5 bg-black my-1"></div>
              <span>3 hours</span>
            </div>
            <span className="mx-2">=</span>
            <span className="font-medium">13.8 miles per hour</span>
          </div>
          <p className="text-gray-700">
            We divide the total distance by the total time to find the rate (speed) at which the cyclist travels.
          </p>
        </div>
      ),
      isOpen: true,
    },
    {
      id: "step2",
      title: "Step 2: Multiply the rate by the new time",
      content: (
        <div className="space-y-3">
          <div className="flex items-center flex-wrap">
            <span className="font-medium mr-2">Distance =</span>
            <span>Rate × Time</span>
            <span className="mx-2">=</span>
            <span>13.8 miles/hour × 7 hours</span>
            <span className="mx-2">=</span>
            <span className="font-medium">96.6 miles</span>
          </div>
          <p className="text-gray-700">
            We multiply the rate (13.8 miles per hour) by the new time (7 hours) to find the total distance traveled.
          </p>
        </div>
      ),
      isOpen: false,
    },
    {
      id: "step3",
      title: "Step 3: Check our answer",
      content: (
        <div className="space-y-3">
          <p className="text-gray-700">Let's verify our answer makes sense:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>The cyclist travels at 13.8 miles per hour</li>
            <li>In 3 hours, they travel 13.8 × 3 = 41.4 miles (matches our original data)</li>
            <li>In 7 hours, they travel 13.8 × 7 = 96.6 miles</li>
          </ul>
          <p className="text-gray-700">Our answer is consistent with the original information, so it's correct!</p>
        </div>
      ),
      isOpen: false,
    },
  ])

  const toggleStep = (id: string) => {
    setSteps(steps.map((step) => (step.id === id ? { ...step, isOpen: !step.isOpen } : step)))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-orange-600">🎯 Let's Work It Out Together!</h1>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Complete Solution</h2>

        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.id} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 bg-orange-50 hover:bg-orange-100 transition-colors text-left"
                onClick={() => toggleStep(step.id)}
              >
                <span className="font-medium">{step.title}</span>
                {step.isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {step.isOpen && <div className="p-4 bg-white">{step.content}</div>}
            </div>
          ))}
        </div>
      </Card>

      <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
        <h3 className="text-lg font-medium text-orange-800 mb-2">Conclusion</h3>
        <p className="text-orange-700">
          At a constant rate of 13.8 miles per hour, the cyclist would travel <strong>96.6 miles</strong> in 7 hours!
        </p>
      </div>

      <div className="flex justify-end">
        <Button onClick={onNext} className="bg-orange-600 hover:bg-orange-700">
          Continue to Similar Problem
        </Button>
      </div>
    </div>
  )
}
