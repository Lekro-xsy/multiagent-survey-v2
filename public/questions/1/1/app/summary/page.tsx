"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Trophy } from "lucide-react"

export default function SummaryPage() {
  const [feedback, setFeedback] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center mb-6">
              <Trophy className="h-12 w-12 text-yellow-500 mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold">You've Mastered It!</h1>
            </div>

            <div className="p-6 bg-green-50 rounded-lg border border-green-200 max-w-2xl mb-8">
              <h2 className="text-xl font-bold mb-4">What You've Learned:</h2>
              <ul className="space-y-2 text-left">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>How to identify exponential growth patterns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>How to calculate multiple levels of growth (multiplication)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>How to apply the same model to different scenarios</span>
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-xl mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">How difficult was this lesson for you?</h3>
                  <RadioGroup value={difficulty} onValueChange={setDifficulty}>
                    <div className="flex space-x-4 justify-center">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="easy" id="easy" />
                        <Label htmlFor="easy">Easy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="just-right" id="just-right" />
                        <Label htmlFor="just-right">Just Right</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="challenging" id="challenging" />
                        <Label htmlFor="challenging">Challenging</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="feedback">Share your thoughts or questions:</Label>
                  <Textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="What did you learn? What was confusing?"
                    className="min-h-[100px]"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={submitted}>
                  Submit Feedback
                </Button>
              </div>
            </form>

            {submitted && (
              <div className="p-4 bg-blue-100 rounded-lg border border-blue-300 max-w-xl mb-8">
                <p className="text-lg font-medium text-blue-800">
                  Thank you for your feedback! Your responses help us improve our lessons.
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-between w-full max-w-xl">
              <Link href="/transfer">
                <Button variant="outline">Previous</Button>
              </Link>
              <Link href="/">
                <Button>Start Over</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
