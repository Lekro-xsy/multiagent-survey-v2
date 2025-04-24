"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Trophy, Check, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function Page9() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [explanation, setExplanation] = useState("")
  const [storyProblem, setStoryProblem] = useState("")
  const [isOptionCorrect, setIsOptionCorrect] = useState<boolean | null>(null)
  const [isExplanationValid, setIsExplanationValid] = useState<boolean | null>(null)
  const [isStoryProblemValid, setIsStoryProblemValid] = useState<boolean | null>(null)
  const [showBadge, setShowBadge] = useState(false)

  const checkAnswers = () => {
    // Check multiple choice
    setIsOptionCorrect(selectedOption === "option2")

    // Check explanation
    setIsExplanationValid(explanation.length >= 20)

    // Check story problem
    const hasNumbers = /2\.50.*8.*7/i.test(storyProblem)
    const hasContext = storyProblem.length >= 30
    setIsStoryProblemValid(hasNumbers && hasContext)

    if (selectedOption === "option2" && explanation.length >= 20 && hasNumbers && hasContext) {
      setShowBadge(true)
    }
  }

  return (
    <LessonLayout pageNumber={9} totalPages={9} title="📚 Reflect and Master!">
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-teal-700">Summary and Mini-Quiz</h2>

          <div className="mt-4 rounded-lg bg-teal-50 p-4 text-teal-800">
            <h3 className="text-xl font-semibold">Key Takeaways:</h3>
            <ul className="mt-2 space-y-2 pl-5 text-lg">
              <li>Multiply unit rate × quantity for subtotals</li>
              <li>Add subtotals for total result</li>
              <li>Model real-world problems with expressions</li>
              <li>Apply the same mathematical structure to different contexts</li>
            </ul>
          </div>

          <div className="mt-6 space-y-8">
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
              <h3 className="text-lg font-semibold text-purple-700">Mini-Quiz</h3>

              <div className="mt-4 space-y-6">
                <div>
                  <p className="font-medium">1. Which is the correct expression to model the original problem?</p>

                  <RadioGroup className="mt-3 space-y-3" value={selectedOption || ""} onValueChange={setSelectedOption}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="option1" />
                      <Label htmlFor="option1">(12 + 16) × 3.15</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="option2" />
                      <Label htmlFor="option2">3.15 × 12 + 3.15 × 16</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option3" id="option3" />
                      <Label htmlFor="option3">3.15 × (12 + 16)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option4" id="option4" />
                      <Label htmlFor="option4">12 × 16 × 3.15</Label>
                    </div>
                  </RadioGroup>

                  {isOptionCorrect !== null && (
                    <div
                      className={`mt-2 flex items-center text-sm ${isOptionCorrect ? "text-green-600" : "text-red-600"}`}
                    >
                      {isOptionCorrect ? (
                        <>
                          <Check className="mr-1 h-4 w-4" />
                          <span>Correct! This expression accurately models the problem.</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="mr-1 h-4 w-4" />
                          <span>Not quite. Think about how to calculate each product's commission separately.</span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <p className="font-medium">2. Why do you multiply before adding in these problems?</p>

                  <Textarea
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    placeholder="Explain your reasoning..."
                    className="mt-2 min-h-24"
                  />

                  {isExplanationValid !== null && (
                    <div
                      className={`mt-2 flex items-center text-sm ${isExplanationValid ? "text-green-600" : "text-red-600"}`}
                    >
                      {isExplanationValid ? (
                        <>
                          <Check className="mr-1 h-4 w-4" />
                          <span>Good explanation!</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="mr-1 h-4 w-4" />
                          <span>Please provide a more detailed explanation.</span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <p className="font-medium">3. Creative: Write a story problem modeled by: 2.50 × 8 + 2.50 × 7</p>

                  <Textarea
                    value={storyProblem}
                    onChange={(e) => setStoryProblem(e.target.value)}
                    placeholder="Write your story problem here..."
                    className="mt-2 min-h-32"
                  />

                  {isStoryProblemValid !== null && (
                    <div
                      className={`mt-2 flex items-center text-sm ${isStoryProblemValid ? "text-green-600" : "text-red-600"}`}
                    >
                      {isStoryProblemValid ? (
                        <>
                          <Check className="mr-1 h-4 w-4" />
                          <span>Great story problem! You've correctly applied the mathematical structure.</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="mr-1 h-4 w-4" />
                          <span>
                            Make sure your story includes the numbers 2.50, 8, and 7 in a context similar to our
                            examples.
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={checkAnswers}
                className="bg-purple-600 hover:bg-purple-700"
                disabled={!selectedOption || !explanation || !storyProblem}
              >
                Submit Quiz
              </Button>
            </div>

            {showBadge && (
              <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-6 text-center">
                <div className="flex justify-center">
                  <Trophy className="h-16 w-16 text-yellow-500" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-yellow-700">Congratulations!</h3>
                <p className="mt-2 text-lg text-yellow-800">You've earned the "Sales Math Champion!" badge 🏆</p>
                <div className="mt-6">
                  <Link href="/">
                    <Button className="bg-teal-600 hover:bg-teal-700">Return to Home</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
          <h3 className="font-semibold">Final Reflection:</h3>
          <p>
            The mathematical patterns you've learned in this lesson apply to many real-world situations. Whenever you
            have a fixed rate applied to different quantities, you can use this same approach!
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}
