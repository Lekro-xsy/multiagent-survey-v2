"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface FarTransferProps {
  onComplete: () => void
}

export function FarTransfer({ onComplete }: FarTransferProps) {
  const [coveragePerGallon, setCoveragePerGallon] = useState("")
  const [totalCoverage, setTotalCoverage] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const checkAnswers = () => {
    // Check if the answers are correct (allowing for slight variations in expression)
    const coveragePerGallonCorrect =
      coveragePerGallon === "400/5" ||
      coveragePerGallon === "80" ||
      coveragePerGallon === "80 sq ft" ||
      coveragePerGallon === "80 square feet"

    const totalCoverageCorrect =
      totalCoverage === "(400/5) * 7.5" ||
      totalCoverage === "80 * 7.5" ||
      totalCoverage === "600" ||
      totalCoverage === "600 sq ft" ||
      totalCoverage === "600 square feet"

    setIsCorrect(coveragePerGallonCorrect && totalCoverageCorrect)
    setIsChecked(true)

    if (coveragePerGallonCorrect && totalCoverageCorrect) {
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-800">🚀 Different Story, Same Strategy!</h2>

      <Card className="bg-orange-50">
        <CardContent className="p-6">
          <p className="text-lg">
            Now let&apos;s apply the same proportional reasoning to a completely different context.
          </p>
          <p className="mt-2 text-lg font-medium">
            A painter uses 5 gallons of paint to cover 400 square feet. How much area can 7.5 gallons cover?
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6 rounded-lg border border-orange-200 bg-white p-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1">
            <div className="mb-4 overflow-hidden rounded-lg bg-blue-100">
              <img
                src="/placeholder.svg?key=55lin"
                alt="Painter with paint cans and rollers"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-800">Step 1: Find the coverage per gallon</h3>

              <div className="flex items-center gap-4">
                <div className="text-lg font-medium">Coverage per gallon =</div>
                <Input
                  value={coveragePerGallon}
                  onChange={(e) => setCoveragePerGallon(e.target.value)}
                  placeholder="Enter expression"
                  className="max-w-[200px]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-800">Step 2: Find the total coverage for 7.5 gallons</h3>

              <div className="flex items-center gap-4">
                <div className="text-lg font-medium">Total coverage =</div>
                <Input
                  value={totalCoverage}
                  onChange={(e) => setTotalCoverage(e.target.value)}
                  placeholder="Enter expression"
                  className="max-w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button onClick={checkAnswers} className="bg-blue-600 hover:bg-blue-700">
            Check My Answers
          </Button>
        </div>

        {isChecked && (
          <div
            className={`mt-4 rounded-lg p-4 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {isCorrect ? (
              <div>
                <p className="font-medium">Excellent! Your solution is correct.</p>
                <p className="mt-2">
                  Step 1: Coverage per gallon = 400 sq ft ÷ 5 = 80 sq ft per gallon
                  <br />
                  Step 2: Total coverage = 80 sq ft × 7.5 = 600 sq ft
                </p>
                <p className="mt-2">
                  You've successfully applied proportional reasoning to a completely different context! This shows how
                  powerful this mathematical strategy is for solving real-world problems.
                </p>
              </div>
            ) : (
              <div>
                <p className="font-medium">Not quite right. Try again!</p>
                <p className="mt-2">
                  Remember to first find the unit rate (coverage per gallon) by dividing the total area by the number of
                  gallons. Then multiply that unit rate by the new number of gallons.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
