"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Transfer2Page() {
  const [shortRope, setShortRope] = useState("")
  const [longRope, setLongRope] = useState("")
  const [explanation, setExplanation] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const isShortRopeCorrect = shortRope === "18"
  const isLongRopeCorrect = longRope === "126"
  const hasExplanation = explanation.length > 10
  const isAllCorrect = isShortRopeCorrect && isLongRopeCorrect && hasExplanation

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageLayout title="🚀 Same Math, New Situation!" pageNumber={8} totalPages={9}>
      <div className="space-y-8">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-3">Far Transfer: Rope Problem</h2>
          <div className="space-y-3">
            <p>
              The combined length of two pieces of rope is <span className="font-bold">144 feet</span>.
            </p>
            <p>
              One rope is <span className="font-bold">7 times</span> as long as the other.
            </p>
            <p className="font-bold">How long is the longer rope?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/coiled-ropes-comparison.png"
              alt="Two ropes of different lengths"
              className="w-full h-auto object-contain"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="shortRope" className="text-lg">
                Shorter Rope Length:
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="shortRope"
                  type="text"
                  value={shortRope}
                  onChange={(e) => setShortRope(e.target.value)}
                  className="text-lg"
                  placeholder="Enter value"
                />
                <span className="text-lg">feet</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="longRope" className="text-lg">
                Longer Rope Length:
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="longRope"
                  type="text"
                  value={longRope}
                  onChange={(e) => setLongRope(e.target.value)}
                  className="text-lg"
                  placeholder="Enter value"
                />
                <span className="text-lg">feet</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="explanation" className="text-lg">
                Explain your solution:
              </Label>
              <Textarea
                id="explanation"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                className="min-h-[100px]"
                placeholder="Explain how you solved this problem..."
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Check My Answer
            </Button>
          </form>
        </div>

        {submitted && (
          <div className={`p-4 rounded-lg ${isAllCorrect ? "bg-green-100" : "bg-yellow-100"}`}>
            <h3 className={`font-bold mb-2 ${isAllCorrect ? "text-green-800" : "text-yellow-800"}`}>
              {isAllCorrect ? "Excellent work!" : "Let's check your answer:"}
            </h3>

            <div className="space-y-2">
              {isShortRopeCorrect ? (
                <p className="text-green-700">✓ Correct! The shorter rope is 18 feet long.</p>
              ) : (
                <p className="text-red-700">✗ The shorter rope should be 18 feet long.</p>
              )}

              {isLongRopeCorrect ? (
                <p className="text-green-700">✓ Correct! The longer rope is 126 feet long.</p>
              ) : (
                <p className="text-red-700">✗ The longer rope should be 126 feet long.</p>
              )}

              {hasExplanation ? (
                <p className="text-green-700">✓ Thank you for explaining your solution!</p>
              ) : (
                <p className="text-red-700">✗ Please provide a more detailed explanation.</p>
              )}
            </div>

            {!isAllCorrect && (
              <div className="mt-4 p-3 bg-white rounded">
                <p className="font-medium">Hint:</p>
                <p>
                  If we let x = length of shorter rope, then 7x = length of longer rope. The total length is x + 7x = 8x
                  = 144 feet.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Link href="/transfer1">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>
          </Link>

          <Link href="/summary">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
