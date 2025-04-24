"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Check, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function SummaryPage() {
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null)
  const [storyProblem, setStoryProblem] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white py-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-bold">Math Learning Journey</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Page 9 of 9</span>
          </div>
        </div>
      </header>
      <main className="container flex-1 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">🧠 Wrap-Up: What Did You Learn?</h1>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Key Takeaways</h2>

                  <ul className="space-y-2 list-disc pl-5">
                    <li>Multiply rate × quantity for subtotals</li>
                    <li>Add subtotals for total earnings</li>
                    <li>Reuse structure across problems</li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Label>Which expression matches the original problem?</Label>
                    <RadioGroup value={quizAnswer || ""} onValueChange={setQuizAnswer}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="a" />
                        <Label htmlFor="a">2.75 × (17 + 12)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="b" />
                        <Label htmlFor="b">2.75 × 17 + 2.75 × 12</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="c" />
                        <Label htmlFor="c">2.75 + 17 + 2.75 + 12</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="d" />
                        <Label htmlFor="d">(2.75 + 17) × (2.75 + 12)</Label>
                      </div>
                    </RadioGroup>

                    {submitted && quizAnswer && (
                      <div className="p-3 rounded-lg bg-muted">
                        {quizAnswer === "b" ? (
                          <div className="flex items-start text-green-600">
                            <Check className="h-5 w-5 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Correct!</p>
                              <p className="text-muted-foreground text-sm">
                                We multiply the rate by each quantity separately, then add the results.
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="text-red-600">
                            <p className="font-medium">Not quite right.</p>
                            <p className="text-muted-foreground text-sm">
                              The correct answer is: 2.75 × 17 + 2.75 × 12
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="storyProblem">
                      Create Your Own: Write a story problem that could be modeled by 3 × 6 + 3 × 4
                    </Label>
                    <Textarea
                      id="storyProblem"
                      value={storyProblem}
                      onChange={(e) => setStoryProblem(e.target.value)}
                      placeholder="Write your story problem here..."
                      rows={4}
                    />
                  </div>

                  {!submitted && (
                    <Button type="submit" className="w-full">
                      Submit Answers
                    </Button>
                  )}
                </form>

                {submitted && (
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-center">
                      <h3 className="font-bold text-lg text-green-800">🏅 Commission Calculation Champ! 🏅</h3>
                      <p className="text-green-700 mt-2">Congratulations on completing this learning journey!</p>
                    </div>

                    <Link href="/">
                      <Button size="lg" className="w-full">
                        <Home className="mr-2 h-4 w-4" />
                        Return to Home
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
