"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Check, PencilLine } from "lucide-react"

export function StudentSolve() {
  const [firstClassExpression, setFirstClassExpression] = useState("")
  const [coachExpression, setCoachExpression] = useState("")
  const [totalExpression, setTotalExpression] = useState("")
  const [workShown, setWorkShown] = useState("")
  const [explanation, setExplanation] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState<{
    firstClass: boolean
    coach: boolean
    total: boolean
    work: boolean
  }>({
    firstClass: false,
    coach: false,
    total: false,
    work: false,
  })

  const handleSubmit = () => {
    // Check expressions
    const firstClassCorrect =
      firstClassExpression.replace(/\s+/g, "") === "32×860" || firstClassExpression.replace(/\s+/g, "") === "32*860"

    const coachCorrect =
      coachExpression.replace(/\s+/g, "") === "298×360" || coachExpression.replace(/\s+/g, "") === "298*360"

    const totalCorrect =
      totalExpression.replace(/\s+/g, "").includes("(32×860)+(298×360)") ||
      totalExpression.replace(/\s+/g, "").includes("(32*860)+(298*360)") ||
      totalExpression.replace(/\s+/g, "").includes("32×860+298×360") ||
      totalExpression.replace(/\s+/g, "").includes("32*860+298*360")

    // Check if work shown includes calculations and the final answer
    const workCorrect = workShown.includes("27520") && workShown.includes("107280") && workShown.includes("134800")

    setFeedback({
      firstClass: firstClassCorrect,
      coach: coachCorrect,
      total: totalCorrect,
      work: workCorrect,
    })

    setSubmitted(true)
  }

  const resetForm = () => {
    setFirstClassExpression("")
    setCoachExpression("")
    setTotalExpression("")
    setWorkShown("")
    setExplanation("")
    setSubmitted(false)
    setFeedback({
      firstClass: false,
      coach: false,
      total: false,
      work: false,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center">
          <PencilLine className="mr-2 h-6 w-6" /> Now You Solve It!
        </h2>
        <p className="text-gray-600">Write the expressions and solve the problem step by step.</p>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="font-medium">Write the expression for first-class revenue:</label>
            <div className="flex items-center">
              <Input
                value={firstClassExpression}
                onChange={(e) => setFirstClassExpression(e.target.value)}
                placeholder="e.g., 32 × 860"
                disabled={submitted}
                className={submitted ? (feedback.firstClass ? "border-green-500" : "border-red-500") : ""}
              />
              {submitted &&
                (feedback.firstClass ? (
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                ) : (
                  <span className="text-red-500 ml-2">Try again</span>
                ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-medium">Write the expression for coach revenue:</label>
            <div className="flex items-center">
              <Input
                value={coachExpression}
                onChange={(e) => setCoachExpression(e.target.value)}
                placeholder="e.g., 298 × 360"
                disabled={submitted}
                className={submitted ? (feedback.coach ? "border-green-500" : "border-red-500") : ""}
              />
              {submitted &&
                (feedback.coach ? (
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                ) : (
                  <span className="text-red-500 ml-2">Try again</span>
                ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-medium">Write the complete expression for total revenue:</label>
            <div className="flex items-center">
              <Input
                value={totalExpression}
                onChange={(e) => setTotalExpression(e.target.value)}
                placeholder="e.g., (32 × 860) + (298 × 360)"
                disabled={submitted}
                className={submitted ? (feedback.total ? "border-green-500" : "border-red-500") : ""}
              />
              {submitted &&
                (feedback.total ? (
                  <Check className="h-5 w-5 text-green-600 ml-2" />
                ) : (
                  <span className="text-red-500 ml-2">Try again</span>
                ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-medium">Show your work (calculations):</label>
            <div className="flex items-start">
              <Textarea
                value={workShown}
                onChange={(e) => setWorkShown(e.target.value)}
                placeholder="Show your step-by-step calculations here..."
                rows={4}
                disabled={submitted}
                className={submitted ? (feedback.work ? "border-green-500" : "border-red-500") : ""}
              />
              {submitted && (
                <div className="ml-2">
                  {feedback.work ? (
                    <Check className="h-5 w-5 text-green-600" />
                  ) : (
                    <span className="text-red-500">Include all calculations</span>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-medium">Explain your approach:</label>
            <Textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Explain how you solved this problem..."
              rows={2}
              disabled={submitted}
            />
          </div>

          <div className="flex justify-end space-x-4">
            {submitted ? (
              <Button onClick={resetForm}>Try Again</Button>
            ) : (
              <Button onClick={handleSubmit}>Submit</Button>
            )}
          </div>
        </div>
      </Card>

      {submitted && feedback.firstClass && feedback.coach && feedback.total && feedback.work && (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 flex items-center">
            <Check className="h-5 w-5 mr-2" /> Great job!
          </h3>
          <p className="text-green-700 mt-1">
            You've correctly set up and solved the revenue problem. Your approach of calculating each section separately
            and then adding them together is exactly right!
          </p>
        </div>
      )}

      {!submitted && (
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
          <h3 className="font-semibold text-amber-800">Tips</h3>
          <ul className="list-disc list-inside text-amber-700 mt-1 space-y-1">
            <li>Calculate the revenue for each section separately</li>
            <li>Add the section revenues to find the total</li>
            <li>Show all your calculations step by step</li>
            <li>You can use × or * for multiplication</li>
          </ul>
        </div>
      )}
    </div>
  )
}
