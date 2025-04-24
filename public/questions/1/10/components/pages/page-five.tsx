"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function PageFive() {
  const [xValue, setXValue] = useState("")
  const [twoXMeaning, setTwoXMeaning] = useState("")
  const [ninetyNineMeaning, setNinetyNineMeaning] = useState("")
  const [fullExplanation, setFullExplanation] = useState("")
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setIsSaved(true)
    // In a real application, you would save this data to be used in later pages
  }

  const isComplete = xValue && twoXMeaning && ninetyNineMeaning

  return (
    <div className="space-y-6">
      <h1 className="text-center text-3xl font-bold text-sky-700">✍️ Write Your Interpretation!</h1>

      <p className="text-center text-lg">
        Based on what you've learned, explain what each part of the expression 2x + 99 represents in the context of
        airplane ticket pricing.
      </p>

      <div className="rounded-lg border border-sky-200 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <label htmlFor="x-value" className="mb-2 block text-lg font-medium">
              What does x represent?
            </label>
            <Input id="x-value" placeholder="x = ..." value={xValue} onChange={(e) => setXValue(e.target.value)} />
          </div>

          <div>
            <label htmlFor="two-x-meaning" className="mb-2 block text-lg font-medium">
              What does 2x represent?
            </label>
            <Input
              id="two-x-meaning"
              placeholder="2x means ..."
              value={twoXMeaning}
              onChange={(e) => setTwoXMeaning(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="ninety-nine-meaning" className="mb-2 block text-lg font-medium">
              What does +99 represent?
            </label>
            <Input
              id="ninety-nine-meaning"
              placeholder="99 means ..."
              value={ninetyNineMeaning}
              onChange={(e) => setNinetyNineMeaning(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-sky-200 bg-white p-6 shadow-sm">
        <label htmlFor="full-explanation" className="mb-2 block text-lg font-medium">
          Optional: Write a full paragraph explaining your logic
        </label>
        <Textarea
          id="full-explanation"
          placeholder="In this expression, x represents... The coefficient 2 means... The constant 99 represents..."
          className="min-h-[120px]"
          value={fullExplanation}
          onChange={(e) => setFullExplanation(e.target.value)}
        />
      </div>

      <div className="flex justify-center">
        <Button onClick={handleSave} disabled={!isComplete || isSaved} className="px-8">
          {isSaved ? "Saved!" : "Save My Interpretation"}
        </Button>
      </div>

      {isSaved && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <h3 className="mb-2 text-lg font-medium text-green-700">Your interpretation has been saved!</h3>
            <p>
              You can continue to the next page to see the full explanation and compare it with your interpretation.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
