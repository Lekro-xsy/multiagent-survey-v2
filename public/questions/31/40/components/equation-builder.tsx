"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface EquationBuilderProps {
  onComplete: () => void
}

export function EquationBuilder({ onComplete }: EquationBuilderProps) {
  const [step1, setStep1] = useState<string | undefined>()
  const [step2, setStep2] = useState<string | undefined>()
  const [step3, setStep3] = useState<string | undefined>()
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const checkAnswer = () => {
    if (step1 === "time" && step2 === "distance" && step3 === "speed") {
      setIsCorrect(true)
      onComplete()
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <p className="mb-3 font-medium text-gray-800">Build the equation:</p>

        <div className="flex flex-wrap items-center gap-2">
          <Select value={step1} onValueChange={setStep1}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">Distance</SelectItem>
              <SelectItem value="speed">Speed</SelectItem>
              <SelectItem value="time">Time</SelectItem>
            </SelectContent>
          </Select>

          <span className="text-lg font-medium">=</span>

          <Select value={step2} onValueChange={setStep2}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">Distance</SelectItem>
              <SelectItem value="speed">Speed</SelectItem>
              <SelectItem value="time">Time</SelectItem>
            </SelectContent>
          </Select>

          <span className="text-lg font-medium">÷</span>

          <Select value={step3} onValueChange={setStep3}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">Distance</SelectItem>
              <SelectItem value="speed">Speed</SelectItem>
              <SelectItem value="time">Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 shadow-sm">
        <p className="mb-3 font-medium text-gray-800">Substitute the values:</p>

        <div className="flex flex-wrap items-center gap-2">
          <span className="min-w-[120px] rounded-md border border-input bg-background px-3 py-2 text-center">
            {step1 === "time" ? "Time" : step1 === "distance" ? "Distance" : step1 === "speed" ? "Speed" : "?"}
          </span>

          <span className="text-lg font-medium">=</span>

          <span className="min-w-[120px] rounded-md border border-input bg-background px-3 py-2 text-center">
            {step2 === "distance" ? "3 miles" : step2 === "time" ? "? hours" : step2 === "speed" ? "5 mph" : "?"}
          </span>

          <span className="text-lg font-medium">÷</span>

          <span className="min-w-[120px] rounded-md border border-input bg-background px-3 py-2 text-center">
            {step3 === "speed" ? "5 mph" : step3 === "time" ? "? hours" : step3 === "distance" ? "3 miles" : "?"}
          </span>
        </div>
      </div>

      <Button
        onClick={checkAnswer}
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={!step1 || !step2 || !step3}
      >
        Check My Equation
      </Button>

      {isCorrect === true && (
        <div className="flex items-center justify-center rounded-lg bg-green-100 p-3 text-green-800">
          <CheckCircle className="mr-2 h-5 w-5" />
          <span>Correct! Time = Distance ÷ Speed is the right formula.</span>
        </div>
      )}

      {isCorrect === false && (
        <div className="rounded-lg bg-red-100 p-3 text-center text-red-800">
          <p>Not quite right. Remember, we need to find how long it will take.</p>
        </div>
      )}
    </div>
  )
}
