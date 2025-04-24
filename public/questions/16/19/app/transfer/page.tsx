"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useProgress } from "@/components/progress-provider"

export default function TransferPage() {
  const { updateProgress } = useProgress()
  const { toast } = useToast()

  const [expression, setExpression] = useState("")
  const [answer, setAnswer] = useState("")
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    const correctExpression = expression.replace(/\s+/g, "").toLowerCase().includes("270÷10.8")
    const correctAnswer = Math.abs(Number.parseFloat(answer) - 25.0) < 0.1

    if (correctExpression && correctAnswer) {
      toast({
        title: "Correct!",
        description: "Great job! 270 ÷ 10.8 = 25.0 miles per gallon",
      })
    } else {
      toast({
        title: "Not quite right",
        description: correctExpression
          ? "Check your calculation and rounding."
          : "Remember to divide total miles by total gallons.",
        variant: "destructive",
      })
    }

    setChecked(true)
    updateProgress("transfer", {
      expression,
      answer,
      correct: correctExpression && correctAnswer,
    })
  }

  return (
    <PageLayout title="🔄 Another Fuel Efficiency Check!">
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <p className="text-lg">Let's try another similar problem to practice what we've learned.</p>
        </div>

        <div className="rounded-lg bg-gray-100 p-6">
          <div className="mb-6 rounded-lg bg-white p-4">
            <h3 className="mb-2 text-center text-xl font-semibold">New Problem</h3>
            <p className="text-center text-lg">
              Another car traveled 270 miles using 10.8 gallons of gasoline. What is its fuel efficiency in miles per
              gallon?
            </p>
          </div>

          <div className="mb-6">
            <Label htmlFor="expression" className="text-lg">
              Set up the division:
            </Label>
            <div className="mt-2">
              <Input
                id="expression"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder="e.g., 270 ÷ 10.8"
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
                placeholder="e.g., 25.0"
                className="text-lg"
              />
              <span className="ml-2 text-lg">miles per gallon</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button onClick={handleCheck} size="lg">
            Check My Answer
          </Button>
        </div>

        {checked && (
          <div className="rounded-lg bg-green-50 p-4">
            <h4 className="mb-2 font-semibold">Solution:</h4>
            <p>To find the fuel efficiency, we divide the total miles by the total gallons:</p>
            <p className="mt-2 text-center text-lg font-medium">270 ÷ 10.8 = 25.0 miles per gallon</p>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
