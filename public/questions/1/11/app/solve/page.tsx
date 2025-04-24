"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SolvePage() {
  const [flagpoleHeight, setFlagpoleHeight] = useState("")
  const [buildingHeight, setBuildingHeight] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const isFlagpoleCorrect = flagpoleHeight === "26"
  const isBuildingCorrect = buildingHeight === "182"
  const isAllCorrect = isFlagpoleCorrect && isBuildingCorrect

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageLayout title="✍️ Now You Solve It!" pageNumber={5} totalPages={9}>
      <div className="space-y-8">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-3">Solve the Equation</h2>
          <p>
            Now that we have our equation <span className="font-mono font-bold">8x = 208</span>, let's solve for x (the
            flagpole height) and then find the building height.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="flagpole" className="text-lg">
                Flagpole Height (x):
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="flagpole"
                  type="text"
                  value={flagpoleHeight}
                  onChange={(e) => setFlagpoleHeight(e.target.value)}
                  className="text-lg"
                  placeholder="Enter value"
                />
                <span className="text-lg">feet</span>
                {submitted &&
                  (isFlagpoleCorrect ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-600" />
                  ))}
              </div>
              {submitted && !isFlagpoleCorrect && <p className="text-red-600">Try again! Solve 8x = 208 for x.</p>}
            </div>

            <div className="space-y-3">
              <Label htmlFor="building" className="text-lg">
                Building Height (7x):
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="building"
                  type="text"
                  value={buildingHeight}
                  onChange={(e) => setBuildingHeight(e.target.value)}
                  className="text-lg"
                  placeholder="Enter value"
                />
                <span className="text-lg">feet</span>
                {submitted &&
                  (isBuildingCorrect ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-600" />
                  ))}
              </div>
              {submitted && !isBuildingCorrect && (
                <p className="text-red-600">Try again! Calculate 7 × (flagpole height).</p>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Check My Answer
          </Button>
        </form>

        {submitted && isAllCorrect && (
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">Excellent work!</h3>
            <p>You've correctly solved the problem. The flagpole is 26 feet tall, and the building is 182 feet tall.</p>
            <p className="mt-2">Let's check: 182 + 26 = 208 feet (total height) ✓</p>
            <p>And: 182 ÷ 26 = 7 (building is 7 times as tall as flagpole) ✓</p>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Link href="/equation">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>
          </Link>

          <Link href="/solution">
            <Button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
              disabled={!isAllCorrect && !submitted}
            >
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
