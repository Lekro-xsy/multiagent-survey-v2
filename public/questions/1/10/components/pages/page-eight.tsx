"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { BikeIcon as Bicycle } from "lucide-react"

export function PageEight() {
  const [explanation, setExplanation] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-center text-3xl font-bold text-sky-700">🚀 A New Situation — Same Kind of Thinking!</h1>

      <div className="rounded-lg bg-sky-50 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-sky-700">New Context:</h2>
          <Bicycle size={32} className="text-sky-700" />
        </div>
        <p className="mt-4 text-lg leading-relaxed">
          "You rent a bike. The cost is based on the number of minutes you ride. The expression 0.5x + 10 gives the
          total rental cost. What does each part represent?"
        </p>
      </div>

      <div className="rounded-lg border border-sky-200 bg-white p-6 shadow-sm">
        <label htmlFor="bike-explanation" className="mb-2 block text-lg font-medium">
          Complete a full paragraph explaining what x, 0.5x, and 10 represent:
        </label>
        <Textarea
          id="bike-explanation"
          placeholder="In this bike rental scenario, x represents... The coefficient 0.5 means... The constant 10 represents..."
          className="min-h-[150px]"
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
          disabled={isSubmitted}
        />

        <div className="mt-4 flex justify-center">
          <Button onClick={handleSubmit} disabled={!explanation || isSubmitted} className="px-8">
            {isSubmitted ? "Submitted!" : "Submit My Explanation"}
          </Button>
        </div>
      </div>

      {isSubmitted && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <h3 className="mb-2 text-lg font-medium text-green-700">Excellent transfer of knowledge!</h3>
            <p className="mb-4">Here's a sample explanation:</p>
            <div className="rounded-lg bg-white p-4">
              <p className="leading-relaxed">
                "In this bike rental scenario, the expression 0.5x + 10 represents the total cost in dollars. The
                variable x represents the number of minutes you ride the bike. The coefficient 0.5 means that the rental
                service charges $0.50 per minute of riding time. The constant 10 represents a base fee of $10 that you
                pay regardless of how long you ride. This base fee might cover the initial rental processing, helmet
                rental, or insurance. So if you ride for 20 minutes, the total cost would be 0.5(20) + 10 = $20."
              </p>
            </div>

            <h3 className="mb-2 mt-6 text-lg font-medium text-green-700">Key Insight:</h3>
            <p>
              Notice how the same pattern (coefficient × variable + constant) can model many different real-world
              situations. The meaning of each part changes based on context, but the mathematical structure remains the
              same!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
