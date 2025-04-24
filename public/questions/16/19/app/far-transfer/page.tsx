"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useProgress } from "@/components/progress-provider"

export default function FarTransferPage() {
  const { updateProgress } = useProgress()
  const { toast } = useToast()

  const [expression, setExpression] = useState("")
  const [answer, setAnswer] = useState("")
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    const correctExpression = expression.replace(/\s+/g, "").toLowerCase().includes("420÷14")
    const correctAnswer = Math.abs(Number.parseFloat(answer) - 30.0) < 0.1

    if (correctExpression && correctAnswer) {
      toast({
        title: "Correct!",
        description: "Great job! 420 ÷ 14 = 30.0 pages per liter",
      })
    } else {
      toast({
        title: "Not quite right",
        description: correctExpression ? "Check your calculation." : "Remember to divide total pages by total liters.",
        variant: "destructive",
      })
    }

    setChecked(true)
    updateProgress("far-transfer", {
      expression,
      answer,
      correct: correctExpression && correctAnswer,
    })
  }

  return (
    <PageLayout title="🚀 Same Math, New World!">
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <p className="text-lg">Now let's apply the same mathematical concept to a completely different scenario.</p>
        </div>

        <div className="rounded-lg bg-gray-100 p-6">
          <div className="mb-6 rounded-lg bg-white p-4">
            <h3 className="mb-2 text-center text-xl font-semibold">Different Scenario</h3>
            <p className="text-center text-lg">
              A printing press prints 420 pages using 14 liters of ink. How many pages does it print per liter of ink?
            </p>
          </div>

          <div className="mb-6 rounded-lg bg-blue-50 p-4">
            <h4 className="mb-2 font-semibold">Key Shift:</h4>
            <p>
              Notice that we're now working with pages and liters instead of miles and gallons. But the mathematical
              relationship is the same!
            </p>
            <p className="mt-2">We're still looking for a unit rate: how many pages per 1 liter of ink.</p>
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
                placeholder="e.g., 420 ÷ 14"
                className="text-lg"
              />
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="answer" className="text-lg">
              Solve:
            </Label>
            <div className="mt-2 flex items-center">
              <Input
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="e.g., 30.0"
                className="text-lg"
              />
              <span className="ml-2 text-lg">pages per liter</span>
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
            <p>To find the pages per liter, we divide the total pages by the total liters:</p>
            <p className="mt-2 text-center text-lg font-medium">420 ÷ 14 = 30.0 pages per liter</p>
            <p className="mt-2">This means that for every liter of ink, the printing press can print 30 pages.</p>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
