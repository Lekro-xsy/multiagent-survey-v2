"use client"

import { useState } from "react"
import { BookOpen, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function Page10() {
  const [selectedOption, setSelectedOption] = useState("")
  const [explanation, setExplanation] = useState("")
  const [scenario, setScenario] = useState("")
  const [checked, setChecked] = useState(false)
  const [quizCorrect, setQuizCorrect] = useState(false)
  const [explanationCorrect, setExplanationCorrect] = useState(false)
  const [scenarioCorrect, setScenarioCorrect] = useState(false)
  const [showBadge, setShowBadge] = useState(false)

  const handleCheck = () => {
    setChecked(true)

    // Check multiple choice answer
    setQuizCorrect(selectedOption === "option2")

    // Check explanation
    const explanationLower = explanation.toLowerCase()
    const hasSubtractOne =
      explanationLower.includes("subtract") ||
      explanationLower.includes("minus") ||
      explanationLower.includes("x-1") ||
      explanationLower.includes("x - 1")
    const hasFirstItem = explanationLower.includes("first") || explanationLower.includes("initial")
    const hasAdditional =
      explanationLower.includes("additional") ||
      explanationLower.includes("extra") ||
      explanationLower.includes("remaining")

    setExplanationCorrect(hasSubtractOne && hasFirstItem && hasAdditional)

    // Check scenario
    const scenarioLower = scenario.toLowerCase()
    const hasFixedCost =
      scenarioLower.includes("first") || scenarioLower.includes("initial") || scenarioLower.includes("fixed")
    const hasVariableCost =
      scenarioLower.includes("additional") ||
      scenarioLower.includes("extra") ||
      scenarioLower.includes("each") ||
      scenarioLower.includes("per")
    const hasExample = scenarioLower.length > 50 // Simple length check to ensure they wrote something substantial

    setScenarioCorrect(hasFixedCost && hasVariableCost && hasExample)

    // Show badge if all correct
    if (
      selectedOption === "option2" &&
      hasSubtractOne &&
      hasFirstItem &&
      hasAdditional &&
      hasFixedCost &&
      hasVariableCost &&
      hasExample
    ) {
      setTimeout(() => {
        setShowBadge(true)
      }, 1000)
    }
  }

  const handleReset = () => {
    setSelectedOption("")
    setExplanation("")
    setScenario("")
    setChecked(false)
    setQuizCorrect(false)
    setExplanationCorrect(false)
    setScenarioCorrect(false)
    setShowBadge(false)
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-teal-100 shadow-md">
        <CardHeader className="bg-gradient-to-r from-teal-50 to-emerald-50">
          <CardTitle className="flex items-center text-2xl text-teal-800">
            <BookOpen className="mr-2 h-6 w-6 text-teal-600" />
            Review and Reflect
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-8 space-y-6">
            <div className="rounded-lg bg-teal-50 p-4">
              <h3 className="mb-4 text-center text-lg font-medium text-teal-800">Key Takeaways</h3>

              <ul className="ml-6 list-disc space-y-3">
                <li className="text-lg">
                  <span className="font-medium">Recognize patterns:</span> Many real-world situations follow the same
                  mathematical structure.
                </li>
                <li className="text-lg">
                  <span className="font-medium">Fixed + variable costs:</span> Many pricing models have a fixed
                  component and a variable component.
                </li>
                <li className="text-lg">
                  <span className="font-medium">Linear equations:</span> These situations can be modeled with linear
                  equations in the form y = mx + b.
                </li>
                <li className="text-lg">
                  <span className="font-medium">Domain restrictions:</span> Real-world contexts often limit the valid
                  values for variables.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border-2 border-teal-200 p-4">
              <h3 className="mb-4 text-center text-lg font-medium text-teal-800">Mini-Quiz</h3>

              <div className="space-y-6">
                <div>
                  <Label className="text-lg">1. Which equation correctly models the original shipping problem?</Label>
                  <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="mt-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="option1" disabled={checked} />
                      <Label htmlFor="option1" className="text-base">
                        P = 0.43 + 0.29x
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="option2" disabled={checked} />
                      <Label htmlFor="option2" className="text-base">
                        P = 0.43 + 0.29(x - 1)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option3" id="option3" disabled={checked} />
                      <Label htmlFor="option3" className="text-base">
                        P = 0.29 + 0.43(x - 1)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option4" id="option4" disabled={checked} />
                      <Label htmlFor="option4" className="text-base">
                        P = 0.43x + 0.29
                      </Label>
                    </div>
                  </RadioGroup>

                  {checked && (
                    <div className={`mt-2 rounded-lg p-3 ${quizCorrect ? "bg-green-100" : "bg-red-100"}`}>
                      {quizCorrect ? (
                        <p className="text-green-800">
                          Correct! This equation properly accounts for the fixed cost of the first ounce and the
                          variable cost of additional ounces.
                        </p>
                      ) : (
                        <p className="text-red-800">
                          Not quite. Remember, we pay $0.43 for the first ounce and $0.29 for each additional ounce.
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="explanation" className="text-lg">
                    2. Why do we subtract 1 from x in the equation?
                  </Label>
                  <Textarea
                    id="explanation"
                    placeholder="We subtract 1 from x because..."
                    rows={3}
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    className={checked ? (explanationCorrect ? "border-green-500" : "border-red-500") : ""}
                    disabled={checked && explanationCorrect}
                  />

                  {checked && (
                    <div className={`rounded-lg p-3 ${explanationCorrect ? "bg-green-100" : "bg-red-100"}`}>
                      {explanationCorrect ? (
                        <p className="text-green-800">
                          Great explanation! We subtract 1 from x because the first ounce is already accounted for in
                          the fixed cost.
                        </p>
                      ) : (
                        <p className="text-red-800">
                          Your explanation needs to mention that we subtract 1 because the first ounce is already
                          accounted for in the fixed cost.
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="scenario" className="text-lg">
                    3. Write a new real-world situation that fits the form: Fixed cost + variable cost × (x - 1)
                  </Label>
                  <Textarea
                    id="scenario"
                    placeholder="A company charges..."
                    rows={4}
                    value={scenario}
                    onChange={(e) => setScenario(e.target.value)}
                    className={checked ? (scenarioCorrect ? "border-green-500" : "border-red-500") : ""}
                    disabled={checked && scenarioCorrect}
                  />

                  {checked && (
                    <div className={`rounded-lg p-3 ${scenarioCorrect ? "bg-green-100" : "bg-red-100"}`}>
                      {scenarioCorrect ? (
                        <p className="text-green-800">
                          Excellent scenario! You've created a situation with a fixed cost for the first item and a
                          different cost for additional items.
                        </p>
                      ) : (
                        <p className="text-red-800">
                          Your scenario should include a fixed cost for the first item and a different cost for each
                          additional item.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                {!checked ? (
                  <Button
                    onClick={handleCheck}
                    className="bg-teal-600 hover:bg-teal-700"
                    disabled={!selectedOption || !explanation || !scenario}
                  >
                    Submit Quiz
                  </Button>
                ) : !(quizCorrect && explanationCorrect && scenarioCorrect) ? (
                  <Button onClick={handleReset} variant="outline">
                    Try Again
                  </Button>
                ) : (
                  <div className="text-center">
                    <p className="font-medium text-teal-800">
                      Congratulations! You've completed the quiz successfully.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {showBadge && (
            <div className="animate-fadeIn rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 p-6 text-center text-white">
              <div className="mb-4 flex justify-center">
                <Trophy className="h-16 w-16" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Congratulations!</h3>
              <p className="text-lg">You've earned the "Cost Model Expert" badge!</p>
              <p className="mt-4">
                You've demonstrated mastery in creating and applying linear models to real-world cost scenarios.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
