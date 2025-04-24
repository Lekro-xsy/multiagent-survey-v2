"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Volume2, Volume, VolumeX } from "lucide-react"

export default function TransferPage() {
  const [answer, setAnswer] = useState("")
  const [formula, setFormula] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">The Real Challenge!</h1>

            <div className="p-6 bg-purple-50 rounded-lg border border-purple-200 max-w-2xl mb-8">
              <p className="text-lg">
                In a sound volume chart, each level is 7 times louder than the previous level. Whisper → Talk → Shout →
                Scream. How many times louder is Scream compared to Talk?
              </p>
            </div>

            <CardContent className="w-full max-w-xl mb-8">
              <div className="grid grid-cols-4 gap-4">
                {[
                  { name: "Whisper", icon: <VolumeX className="h-8 w-8" /> },
                  { name: "Talk", icon: <Volume className="h-8 w-8" /> },
                  { name: "Shout", icon: <Volume2 className="h-8 w-8" /> },
                  { name: "Scream", icon: <Volume2 className="h-8 w-8 text-red-500" /> },
                ].map((item, index) => (
                  <div key={item.name} className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
                    {item.icon}
                    <p className="mt-2 font-medium">{item.name}</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-purple-600 h-2.5 rounded-full"
                        style={{ width: `${Math.min(100, (index + 1) * 25)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>

            <form onSubmit={handleSubmit} className="w-full max-w-md mb-8">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="formula">Your Calculation:</Label>
                  <Input
                    id="formula"
                    value={formula}
                    onChange={(e) => setFormula(e.target.value)}
                    placeholder="e.g., 7 × 7 = 49"
                    className="text-lg font-mono mb-4"
                    disabled={submitted}
                  />

                  <Label htmlFor="answer">Final Answer:</Label>
                  <Input
                    id="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    className="text-lg"
                    disabled={submitted}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={submitted || !answer || !formula}>
                  Submit Your Answer
                </Button>
              </div>
            </form>

            {submitted && (
              <div className="w-full max-w-xl">
                <Button
                  onClick={() => setShowSolution(true)}
                  variant="outline"
                  className="w-full mb-4"
                  disabled={showSolution}
                >
                  Show Solution
                </Button>

                {showSolution && (
                  <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
                    <p className="text-lg">Shout is 7 times louder than Talk.</p>
                    <p className="text-lg">Scream is 7 times louder than Shout.</p>
                    <p className="text-lg font-bold">So Scream is 7 × 7 = 49 times louder than Talk!</p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-8 flex justify-between w-full max-w-xl">
              <Link href="/similar">
                <Button variant="outline">Previous</Button>
              </Link>
              <Link href="/summary">
                <Button disabled={!submitted}>Next: Summary</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
