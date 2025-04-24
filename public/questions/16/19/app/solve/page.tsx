"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useProgress } from "@/components/progress-provider"

export default function SolvePage() {
  const { updateProgress } = useProgress()
  const [expression, setExpression] = useState("")
  const [answer, setAnswer] = useState("")

  const handleSubmit = () => {
    updateProgress("solve", {
      expression,
      answer,
      submitted: true,
    })
  }

  return (
    <PageLayout title="✍️ Time to Solve It Yourself!">
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <p className="text-lg">
            Now it's your turn to write the full division expression and solve for the miles per gallon.
          </p>
        </div>

        <div className="rounded-lg bg-gray-100 p-6">
          <div className="mb-6">
            <Label htmlFor="expression" className="text-lg">
              Write the full division expression:
            </Label>
            <div className="mt-2 flex items-center">
              <Input
                id="expression"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder="e.g., 337 ÷ 13.7"
                className="text-lg"
              />
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="answer" className="text-lg">
              Solve and round to one decimal place:
            </Label>
            <div className="mt-2 flex items-center">
              <Input
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="e.g., 24.6"
                className="text-lg"
              />
              <span className="ml-2 text-lg">miles per gallon</span>
            </div>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4">
            <h4 className="mb-2 font-semibold">Reminder:</h4>
            <p>Remember to round your answer carefully! We want the answer to one decimal place.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button onClick={handleSubmit} size="lg">
            Submit My Answer
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
