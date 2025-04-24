"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PageSeven() {
  const [xValue, setXValue] = useState("")
  const [fiveXMeaning, setFiveXMeaning] = useState("")
  const [oneTwentyMeaning, setOneTwentyMeaning] = useState("")
  const [fullExplanation, setFullExplanation] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  const isComplete = xValue && fiveXMeaning && oneTwentyMeaning

  return (
    <div className="space-y-6">
      <h1 className="text-center text-3xl font-bold text-sky-700">🔁 Try a New Flight Problem!</h1>

      <div className="rounded-lg bg-sky-50 p-6">
        <h2 className="mb-4 text-xl font-semibold text-sky-700">New Problem:</h2>
        <p className="text-lg leading-relaxed">
          "The expression 5x + 120 models the cost of a luxury shuttle service. What might x represent here?"
        </p>
      </div>

      <div className="rounded-lg border border-sky-200 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <label htmlFor="x-value-new" className="mb-2 block text-lg font-medium">
              What does x represent?
            </label>
            <Input
              id="x-value-new"
              placeholder="x = ..."
              value={xValue}
              onChange={(e) => setXValue(e.target.value)}
              disabled={isSubmitted}
            />
          </div>

          <div>
            <label htmlFor="five-x-meaning" className="mb-2 block text-lg font-medium">
              What does 5x represent?
            </label>
            <Input
              id="five-x-meaning"
              placeholder="5x means ..."
              value={fiveXMeaning}
              onChange={(e) => setFiveXMeaning(e.target.value)}
              disabled={isSubmitted}
            />
          </div>

          <div>
            <label htmlFor="one-twenty-meaning" className="mb-2 block text-lg font-medium">
              What does +120 represent?
            </label>
            <Input
              id="one-twenty-meaning"
              placeholder="120 means ..."
              value={oneTwentyMeaning}
              onChange={(e) => setOneTwentyMeaning(e.target.value)}
              disabled={isSubmitted}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-sky-200 bg-white p-6 shadow-sm">
        <label htmlFor="full-explanation-new" className="mb-2 block text-lg font-medium">
          Write a full paragraph explaining your interpretation
        </label>
        <Textarea
          id="full-explanation-new"
          placeholder="In this expression, x represents... The coefficient 5 means... The constant 120 represents..."
          className="min-h-[120px]"
          value={fullExplanation}
          onChange={(e) => setFullExplanation(e.target.value)}
          disabled={isSubmitted}
        />
      </div>

      <div className="flex justify-center">
        <Button onClick={handleSubmit} disabled={!isComplete || isSubmitted} className="px-8">
          {isSubmitted ? "Submitted!" : "Submit My Answer"}
        </Button>
      </div>

      {isSubmitted && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-medium text-green-700">
              <Check size={20} />
              Great job!
            </h3>
            <p className="mb-4">Here's a possible interpretation:</p>
            <div className="rounded-lg bg-white p-4">
              <p className="mb-2">
                <span className="font-medium">x =</span> distance in miles
              </p>
              <p className="mb-2">
                <span className="font-medium">5x =</span> cost based on distance ($5 per mile for luxury service)
              </p>
              <p className="mb-2">
                <span className="font-medium">120 =</span> base fee for the luxury shuttle (includes premium amenities)
              </p>
              <p className="mt-4">
                "The expression 5x + 120 represents the total cost of a luxury shuttle service. The variable x
                represents the distance traveled in miles. The term 5x indicates that the service charges $5 per mile
                traveled. The constant 120 represents a base fee of $120 that covers premium amenities, driver gratuity,
                and booking costs regardless of the distance traveled."
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
