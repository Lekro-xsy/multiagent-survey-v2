"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, Trophy } from "lucide-react"

export default function SummaryPage() {
  const [q1Answer, setQ1Answer] = useState<string | null>(null)
  const [q2Answer, setQ2Answer] = useState<string | null>(null)
  const [q3Answer, setQ3Answer] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const isQ1Correct = q1Answer === "divide"
  const isQ2Correct = q2Answer === "unit-rate"
  const isQ3Reasonable =
    q3Answer.length > 20 &&
    (q3Answer.toLowerCase().includes("divide") ||
      q3Answer.toLowerCase().includes("total") ||
      q3Answer.toLowerCase().includes("per"))

  const score = [isQ1Correct, isQ2Correct, isQ3Reasonable].filter(Boolean).length

  return (
    <PageLayout title="What Have You Learned?" emoji="📚">
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-lg">Let's review what we've learned about unit rates and test your understanding.</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6">Key Takeaways:</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-bold">Understanding Unit Rates</p>
                  <p className="text-gray-700">
                    A unit rate tells us how many units of one quantity correspond to one unit of another quantity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-bold">Setting Up the Math</p>
                  <p className="text-gray-700">To find a unit rate, divide the total amount by the number of units.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-bold">Applying to Different Contexts</p>
                  <p className="text-gray-700">
                    The same mathematical thinking applies whether we're finding miles per gallon, cupcakes per pound,
                    or any other unit rate.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6">Mini-Quiz:</h3>

            <div className="space-y-8">
              {/* Question 1 */}
              <div>
                <p className="font-bold mb-3">1. To find miles per gallon, what operation do we use?</p>
                <RadioGroup value={q1Answer || ""} onValueChange={setQ1Answer} disabled={submitted}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="add" id="q1-add" />
                    <Label htmlFor="q1-add">Addition</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="subtract" id="q1-subtract" />
                    <Label htmlFor="q1-subtract">Subtraction</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multiply" id="q1-multiply" />
                    <Label htmlFor="q1-multiply">Multiplication</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="divide" id="q1-divide" />
                    <Label htmlFor="q1-divide">Division</Label>
                  </div>
                </RadioGroup>

                {submitted && (
                  <div className={`mt-2 p-2 rounded-lg ${isQ1Correct ? "bg-green-100" : "bg-red-100"}`}>
                    {isQ1Correct ? (
                      <p className="text-green-800 text-sm">Correct! We divide total miles by total gallons.</p>
                    ) : (
                      <p className="text-red-800 text-sm">Incorrect. We need to divide total miles by total gallons.</p>
                    )}
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div>
                <p className="font-bold mb-3">2. Miles per gallon is an example of what?</p>
                <RadioGroup value={q2Answer || ""} onValueChange={setQ2Answer} disabled={submitted}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fraction" id="q2-fraction" />
                    <Label htmlFor="q2-fraction">A fraction</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unit-rate" id="q2-unit-rate" />
                    <Label htmlFor="q2-unit-rate">A unit rate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="percentage" id="q2-percentage" />
                    <Label htmlFor="q2-percentage">A percentage</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ratio" id="q2-ratio" />
                    <Label htmlFor="q2-ratio">A ratio</Label>
                  </div>
                </RadioGroup>

                {submitted && (
                  <div className={`mt-2 p-2 rounded-lg ${isQ2Correct ? "bg-green-100" : "bg-red-100"}`}>
                    {isQ2Correct ? (
                      <p className="text-green-800 text-sm">
                        Correct! Miles per gallon is a unit rate - it tells us how many miles per one gallon.
                      </p>
                    ) : (
                      <p className="text-red-800 text-sm">
                        Incorrect. Miles per gallon is a unit rate because it tells us how many miles per one gallon.
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div>
                <p className="font-bold mb-3">
                  3. Why do we divide total miles by gallons when finding miles per gallon?
                </p>
                <Textarea
                  value={q3Answer}
                  onChange={(e) => setQ3Answer(e.target.value)}
                  placeholder="Type your answer here..."
                  disabled={submitted}
                  className="min-h-[100px]"
                />

                {submitted && (
                  <div className={`mt-2 p-2 rounded-lg ${isQ3Reasonable ? "bg-green-100" : "bg-red-100"}`}>
                    {isQ3Reasonable ? (
                      <p className="text-green-800 text-sm">
                        Good explanation! You understand the concept of unit rates.
                      </p>
                    ) : (
                      <p className="text-red-800 text-sm">
                        Your explanation could be more complete. Remember that we divide total miles by total gallons to
                        find out how many miles correspond to one gallon.
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={handleSubmit}
                  disabled={!q1Answer || !q2Answer || q3Answer.length < 5 || submitted}
                  className="bg-sky-600 hover:bg-sky-700"
                >
                  Submit Quiz
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {submitted && (
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-blue-200 text-center">
            <div className="flex justify-center mb-4">
              <Trophy className="h-12 w-12 text-yellow-500" />
            </div>

            <h3 className="text-xl font-bold text-blue-800 mb-2">
              Congratulations! You've earned the Unit Rate Hero badge!
            </h3>

            <p className="text-lg">You scored {score} out of 3</p>

            <p className="mt-4">
              You've successfully completed this interactive lesson on unit rates. You now understand how to calculate
              and apply unit rates in different contexts!
            </p>

            <div className="mt-6 flex justify-center">
              <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                <Check className="h-4 w-4" />
                Complete Lesson
              </Button>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
