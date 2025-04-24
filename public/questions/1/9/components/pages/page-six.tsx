"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface PageSixProps {
  onNext: () => void
}

export default function PageSix({ onNext }: PageSixProps) {
  const [expandedSteps, setExpandedSteps] = useState<number[]>([0])

  const steps = [
    {
      title: "Start: 1 piece",
      description: "We begin with a single log before any splitting occurs.",
      formula: "2⁰ = 1",
      visual: (
        <div className="flex justify-center">
          <div className="w-32 h-16 bg-amber-800 rounded-lg"></div>
        </div>
      ),
    },
    {
      title: "Round 1: 2 pieces",
      description: "After the first round of splitting, we have 2 pieces.",
      formula: "2¹ = 2",
      visual: (
        <div className="flex justify-center gap-2">
          <div className="w-16 h-16 bg-amber-800 rounded-lg"></div>
          <div className="w-16 h-16 bg-amber-800 rounded-lg"></div>
        </div>
      ),
    },
    {
      title: "Round 2: 4 pieces",
      description: "After the second round, each of the 2 pieces splits into 2 more, giving us 4 total.",
      formula: "2² = 4",
      visual: (
        <div className="flex justify-center gap-2">
          <div className="w-8 h-16 bg-amber-800 rounded-lg"></div>
          <div className="w-8 h-16 bg-amber-800 rounded-lg"></div>
          <div className="w-8 h-16 bg-amber-800 rounded-lg"></div>
          <div className="w-8 h-16 bg-amber-800 rounded-lg"></div>
        </div>
      ),
    },
    {
      title: "Round 3: 8 pieces",
      description: "After the third round, each of the 4 pieces splits into 2 more, giving us 8 total.",
      formula: "2³ = 8",
      visual: (
        <div className="grid grid-cols-4 gap-1 justify-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-8 h-8 bg-amber-800 rounded-lg"></div>
          ))}
        </div>
      ),
    },
    {
      title: "Round 4: 16 pieces",
      description: "After the fourth round, each of the 8 pieces splits into 2 more, giving us 16 total.",
      formula: "2⁴ = 16",
      visual: (
        <div className="grid grid-cols-8 gap-1 justify-center">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-4 h-8 bg-amber-800 rounded-lg"></div>
          ))}
        </div>
      ),
    },
    {
      title: "Round 5: 32 pieces",
      description: "After the fifth and final round, each of the 16 pieces splits into 2 more, giving us 32 total.",
      formula: "2⁵ = 32",
      visual: (
        <div className="grid grid-cols-8 gap-1 justify-center">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-amber-800 rounded-lg"></div>
          ))}
        </div>
      ),
    },
  ]

  const toggleStep = (index: number) => {
    if (expandedSteps.includes(index)) {
      setExpandedSteps(expandedSteps.filter((i) => i !== index))
    } else {
      setExpandedSteps([...expandedSteps, index])
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">🎯 Let&apos;s Solve It Together!</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Let&apos;s walk through the solution step by step to understand how we get to the final answer.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div
              className={`p-4 flex justify-between items-center cursor-pointer ${
                expandedSteps.includes(index) ? "bg-green-50" : "bg-white"
              }`}
              onClick={() => toggleStep(index)}
            >
              <h3 className="font-bold text-green-700">{step.title}</h3>
              <div className="flex items-center">
                <div className="font-mono bg-green-100 text-green-800 px-2 py-1 rounded mr-2">{step.formula}</div>
                {expandedSteps.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-green-700" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-700" />
                )}
              </div>
            </div>

            {expandedSteps.includes(index) && (
              <div className="p-4 border-t">
                <p className="mb-4">{step.description}</p>
                <div className="h-20 flex items-center justify-center">{step.visual}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-green-100 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-green-800 mb-2 text-xl">Mathematical Summary:</h3>
        <p className="text-lg">The number of pieces = 2⁵ = 32 pieces!</p>
        <p className="mt-2">
          This is an example of <strong>exponential growth</strong>, where the quantity increases by the same factor (2)
          in each step.
        </p>
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-green-700 hover:bg-green-800" onClick={onNext}>
          Continue to Practice
        </Button>
      </div>
    </div>
  )
}
