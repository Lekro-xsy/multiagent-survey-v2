"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page5() {
  const [equation, setEquation] = useState("")
  const [solution, setSolution] = useState("")
  const [explanation, setExplanation] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const resetForm = () => {
    setEquation("")
    setSolution("")
    setExplanation("")
    setSubmitted(false)
  }

  return (
    <PageLayout title="✍️ Now You Solve It!" pageNumber={5} totalPages={9} prevPage="/page4" nextPage="/page6">
      <div className="space-y-8">
        <div className="rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-blue-800">Your Turn to Solve:</h2>
          <p className="mb-6 text-lg">Now it's your turn to write the equation and solve for the number of months.</p>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="equation" className="text-blue-700">
                Write the equation:
              </Label>
              <Input
                id="equation"
                value={equation}
                onChange={(e) => setEquation(e.target.value)}
                placeholder="e.g., 50 × x = 650"
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="solution" className="text-blue-700">
                Show your step-by-step solution:
              </Label>
              <Textarea
                id="solution"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                placeholder="Write your steps to solve for x..."
                className="min-h-[120px] text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="explanation" className="text-blue-700">
                Short explanation:
              </Label>
              <Textarea
                id="explanation"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Explain your approach in a few words..."
                className="min-h-[80px] text-lg"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <Button
              onClick={handleSubmit}
              disabled={!equation || !solution || !explanation || submitted}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Submit Solution
            </Button>
            <Button variant="outline" onClick={resetForm} className="border-blue-300 text-blue-700 hover:bg-blue-100">
              Reset
            </Button>
          </div>
        </div>

        {submitted && (
          <Card className="bg-green-50">
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-green-800">Great job!</h3>
              <p className="mb-4 text-green-700">You've completed your solution. Let's check it on the next page!</p>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-3">
                  <span className="font-medium text-blue-700">Your equation:</span>
                  <p className="mt-1">{equation}</p>
                </div>
                <div className="mb-3">
                  <span className="font-medium text-blue-700">Your solution:</span>
                  <p className="mt-1 whitespace-pre-line">{solution}</p>
                </div>
                <div>
                  <span className="font-medium text-blue-700">Your explanation:</span>
                  <p className="mt-1">{explanation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="rounded-lg bg-yellow-50 p-4">
          <h3 className="mb-2 font-semibold text-yellow-800">Hint:</h3>
          <p className="text-yellow-700">
            Remember to set up your equation with the monthly saving rate, the unknown number of months (x), and the
            target amount. Then solve for x by dividing.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
