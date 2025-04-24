"use client"

import { useState } from "react"
import { Check, X, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function EquationBuilder() {
  const [steps, setSteps] = useState([
    { id: 1, completed: false, input: "", correct: "n" },
    { id: 2, completed: false, input: "", correct: "n+1" },
    { id: 3, completed: false, input: "", correct: "n(n+1)=306" },
    { id: 4, completed: false, input: "", correct: "n²+n=306" },
    { id: 5, completed: false, input: "", correct: "n²+n-306=0" },
  ])

  const updateStep = (id: number, value: string) => {
    setSteps(steps.map((step) => (step.id === id ? { ...step, input: value } : step)))
  }

  const checkStep = (id: number) => {
    const step = steps.find((s) => s.id === id)
    if (!step) return

    // Remove spaces and make case insensitive for comparison
    const normalizedInput = step.input.replace(/\s+/g, "").toLowerCase()
    const normalizedCorrect = step.correct.replace(/\s+/g, "").toLowerCase()

    // Check if input matches the correct answer
    const isCorrect = normalizedInput === normalizedCorrect

    setSteps(steps.map((s) => (s.id === id ? { ...s, completed: isCorrect } : s)))
  }

  const getStepPrompt = (id: number) => {
    switch (id) {
      case 1:
        return "Let the smaller page (left page) be:"
      case 2:
        return "The larger page (right page) is:"
      case 3:
        return "Set up the equation (product equals 306):"
      case 4:
        return "Expand the equation:"
      case 5:
        return "Rearrange to standard form:"
      default:
        return ""
    }
  }

  const getStepHint = (id: number) => {
    switch (id) {
      case 1:
        return "Use a variable like 'n' to represent the unknown page number."
      case 2:
        return "Since facing pages are consecutive, the right page is one more than the left page."
      case 3:
        return "Multiply the two page numbers and set equal to the given product."
      case 4:
        return "Distribute the multiplication to get a polynomial."
      case 5:
        return "Move all terms to one side to get the equation equal to zero."
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
        <p className="font-medium">Setting up the equation step by step:</p>
        <p className="mt-2">We'll use algebra to model this problem. Follow each step carefully.</p>
      </div>

      <div className="space-y-4">
        {steps.map((step) => {
          const previousStepCompleted = step.id === 1 || steps.find((s) => s.id === step.id - 1)?.completed

          return (
            <Card key={step.id} className={`p-4 ${!previousStepCompleted ? "opacity-50" : ""}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-800">
                    {step.id}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">{getStepPrompt(step.id)}</p>
                  </div>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{getStepHint(step.id)}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="mt-3 flex items-center space-x-2">
                <Input
                  value={step.input}
                  onChange={(e) => updateStep(step.id, e.target.value)}
                  placeholder="Enter your answer"
                  disabled={!previousStepCompleted}
                  className="font-mono"
                />
                <Button
                  onClick={() => checkStep(step.id)}
                  disabled={!previousStepCompleted || !step.input}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Check
                </Button>
              </div>

              {step.completed && (
                <div className="mt-2 flex items-center text-green-600">
                  <Check className="mr-1 h-4 w-4" />
                  <span>Correct!</span>
                </div>
              )}

              {step.input && !step.completed && (
                <div className="mt-2 flex items-center text-red-600">
                  <X className="mr-1 h-4 w-4" />
                  <span>Try again</span>
                </div>
              )}
            </Card>
          )
        })}
      </div>

      {steps.every((step) => step.completed) && (
        <div className="rounded-lg bg-green-50 p-4 text-green-800">
          <p className="font-medium">Great job!</p>
          <p className="mt-2">You've successfully set up the equation: n² + n - 306 = 0</p>
          <p className="mt-2">Now we need to solve this equation to find the page numbers.</p>
        </div>
      )}
    </div>
  )
}
