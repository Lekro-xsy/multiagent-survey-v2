"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function SummaryPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>()
  const [tfAnswer, setTfAnswer] = useState<string | undefined>()
  const [ownProblem, setOwnProblem] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [showBadge, setShowBadge] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    if (selectedAnswer === "b" && tfAnswer === "false" && ownProblem.length > 10) {
      setTimeout(() => setShowBadge(true), 1000)
    }
  }

  return (
    <PageLayout title="📚 Wrap-Up and Reflect" pageNumber={9} totalPages={9}>
      <div className="space-y-8">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-3">Key Learning Points</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Model multiplicative relationships carefully.</li>
            <li>Total = (multiplier + 1) parts times a basic unit.</li>
            <li>Set up and solve simple linear equations.</li>
            <li>Apply the same mathematical structure to different real-world situations.</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-4">Mini-Quiz</h3>

            <div className="space-y-6">
              <div>
                <p className="font-medium mb-3">1. What's the first step to model a height problem like this?</p>
                <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a" id="a" />
                    <Label htmlFor="a">Add the heights together</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b" id="b" />
                    <Label htmlFor="b">Assign a variable to one of the unknown quantities</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="c" id="c" />
                    <Label htmlFor="c">Divide the total by the multiplier</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="d" id="d" />
                    <Label htmlFor="d">Draw a picture of the problem</Label>
                  </div>
                </RadioGroup>

                {submitted && selectedAnswer !== "b" && (
                  <p className="text-red-600 mt-2">
                    Try again! The first step is to assign a variable to one of the unknown quantities.
                  </p>
                )}
              </div>

              <div>
                <p className="font-medium mb-3">2. True or False: "The total is 7 times the flagpole height."</p>
                <RadioGroup value={tfAnswer} onValueChange={setTfAnswer}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="true" />
                    <Label htmlFor="true">True</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="false" />
                    <Label htmlFor="false">False</Label>
                  </div>
                </RadioGroup>

                {submitted && tfAnswer !== "false" && (
                  <p className="text-red-600 mt-2">
                    Incorrect. The total is 8 times the flagpole height (building + flagpole = 7x + x = 8x).
                  </p>
                )}
              </div>

              <div>
                <p className="font-medium mb-3">
                  3. Create your own real-world situation with one thing being a multiple of another:
                </p>
                <Textarea
                  value={ownProblem}
                  onChange={(e) => setOwnProblem(e.target.value)}
                  className="min-h-[100px]"
                  placeholder="Write your own problem here..."
                />

                {submitted && ownProblem.length < 10 && (
                  <p className="text-red-600 mt-2">Please write a more detailed problem.</p>
                )}
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Submit Quiz
          </Button>
        </form>

        {showBadge && (
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white text-center animate-pulse">
            <h3 className="text-2xl font-bold mb-2">🏆 Congratulations!</h3>
            <p className="text-lg mb-4">You've earned the "Building Math Master" badge!</p>
            <div className="flex justify-center">
              <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=80&width=80&query=math achievement badge with building and equations, gold medal"
                  alt="Math Master Badge"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Link href="/transfer2">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>
          </Link>

          <Link href="/">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <Home className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
