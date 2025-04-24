"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function SummaryPage() {
  const [quizAnswer1, setQuizAnswer1] = useState("")
  const [quizAnswer2, setQuizAnswer2] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [badgeEarned, setBadgeEarned] = useState(false)

  const handleSubmit = () => {
    setShowResults(true)
    if (quizAnswer1 === "b" && quizAnswer2.length > 10) {
      setBadgeEarned(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">📚 What Have You Learned?</h1>
            <p className="text-xl text-gray-600">Summary and mini-quiz</p>
          </div>

          <div className="mb-8 overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Key Learning Points</h2>

              <div className="mb-6 space-y-4">
                <Card className="p-4 bg-yellow-50">
                  <h3 className="mb-2 text-lg font-medium">1. Break complex pricing problems into parts</h3>
                  <p className="text-gray-700">
                    Complex problems become manageable when broken into smaller, simpler parts. In our taxi problem, we
                    separated mileage charges from traffic charges.
                  </p>
                </Card>

                <Card className="p-4 bg-blue-50">
                  <h3 className="mb-2 text-lg font-medium">2. Build expressions systematically</h3>
                  <p className="text-gray-700">
                    For each part of the problem, build a mathematical expression step-by-step. This helps avoid errors
                    and makes your work clear and organized.
                  </p>
                </Card>

                <Card className="p-4 bg-green-50">
                  <h3 className="mb-2 text-lg font-medium">3. Combine parts to find total cost</h3>
                  <p className="text-gray-700">
                    Once you have expressions for each part, combine them to create a complete model. This approach
                    works for many real-world pricing structures.
                  </p>
                </Card>

                <Card className="p-4 bg-purple-50">
                  <h3 className="mb-2 text-lg font-medium">4. Apply the same structure to different contexts</h3>
                  <p className="text-gray-700">
                    The mathematical structure (base + rate × extra) + (penalty × time) appears in many real-world
                    scenarios, from taxi fares to moving costs to phone bills.
                  </p>
                </Card>
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">Mini-Quiz</h2>

                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <h3 className="mb-3 text-lg font-medium">
                      1. Which correctly models a cost structure with a base fee, per-unit charges, and time penalties?
                    </h3>

                    <RadioGroup value={quizAnswer1} onValueChange={setQuizAnswer1}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="option-a" />
                        <Label htmlFor="option-a">base × (rate + extra) + penalty × time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="option-b" />
                        <Label htmlFor="option-b">(base + rate × extra) + (penalty × time)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="option-c" />
                        <Label htmlFor="option-c">(base + rate) × extra + penalty × time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="option-d" />
                        <Label htmlFor="option-d">base + rate + extra + penalty + time</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="mb-3 text-lg font-medium">
                      2. Create your own: Write a real-life scenario that could be modeled by:
                    </h3>
                    <div className="mb-3 rounded-md bg-gray-100 p-3 text-center">
                      (base + rate × extra) + (penalty × time)
                    </div>

                    <Textarea
                      value={quizAnswer2}
                      onChange={(e) => setQuizAnswer2(e.target.value)}
                      placeholder="Write your scenario here..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <Button
                    onClick={handleSubmit}
                    className="bg-yellow-500 text-black hover:bg-yellow-600"
                    disabled={!quizAnswer1 || quizAnswer2.length < 10}
                  >
                    Submit Quiz
                  </Button>
                </div>
              </div>

              {showResults && (
                <div className="rounded-lg bg-green-50 p-6 text-center">
                  <div className="mb-4 flex flex-col items-center justify-center">
                    {badgeEarned ? (
                      <>
                        <Trophy className="mb-2 h-16 w-16 text-yellow-500" />
                        <h3 className="text-2xl font-bold text-green-600">Congratulations!</h3>
                        <p className="text-xl font-medium text-green-600">
                          You've earned the "Cost Model Champion" badge! 🏆
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-medium text-green-600">Thanks for completing the quiz!</h3>
                        <p className="text-gray-700">Review the key concepts and try again to earn your badge.</p>
                      </>
                    )}
                  </div>

                  <div className="mt-4 text-left">
                    <h4 className="mb-2 font-medium">Quiz Results:</h4>
                    <p className="mb-1 text-gray-700">
                      <span className="font-medium">Question 1:</span>{" "}
                      {quizAnswer1 === "b" ? "Correct!" : "The correct answer is (b)."}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Question 2:</span>{" "}
                      {quizAnswer2.length >= 10 ? "Great example!" : "Please provide a more detailed example."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <Link href="/far-transfer">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            </Link>
            <Link href="/">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600">Return to Start</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
