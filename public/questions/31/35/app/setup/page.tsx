"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { PyramidVisualization } from "@/components/pyramid-visualization"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SetupPage() {
  const [formula, setFormula] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)
  const [hasChecked, setHasChecked] = useState(false)

  const handleCheck = () => {
    // Check if the formula contains both "number of bricks" and "5" (or "5 kg")
    const isValid =
      formula.toLowerCase().includes("number of bricks") && (formula.includes("5") || formula.includes("5 kg"))

    setIsCorrect(isValid)
    setHasChecked(true)
  }

  return (
    <div className="container py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">🧮 Setting Up the Math</CardTitle>
          <CardDescription>Let's create a mathematical model to solve the problem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <h2 className="mb-3 text-xl font-semibold text-blue-800">Steps to Solve</h2>
                <ol className="ml-4 list-decimal space-y-2 text-blue-700">
                  <li>Find the number of bricks in the 5th layer (we found this is 4 bricks)</li>
                  <li>Multiply the number of bricks by the weight of each brick (5 kg)</li>
                </ol>
              </div>

              <div className="space-y-4 rounded-lg border p-6">
                <h3 className="text-lg font-medium">Set Up the Formula</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="formula">Write the formula to find the mass of the 5th layer:</Label>
                    <Input
                      id="formula"
                      value={formula}
                      onChange={(e) => setFormula(e.target.value)}
                      placeholder="Mass = ..."
                      className={
                        hasChecked ? (isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : ""
                      }
                    />
                    {hasChecked && !isCorrect && (
                      <p className="text-sm text-red-500">
                        Try again! Your formula should multiply the number of bricks by 5 kg.
                      </p>
                    )}
                  </div>

                  <Button onClick={handleCheck} className="w-full">
                    Check My Formula
                  </Button>
                </div>
              </div>

              {isCorrect && (
                <div className="rounded-lg bg-green-100 p-4 text-center text-green-800">
                  <p className="font-medium">Great job!</p>
                  <p>You've correctly set up the formula to solve the problem.</p>
                  <p className="mt-2">Mass = Number of bricks in 5th layer × 5 kg</p>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center justify-center">
              <PyramidVisualization highlightLayer={5} />
              <div className="mt-4 text-center">
                <p className="font-medium">The 5th layer has 4 bricks</p>
                <p className="text-sm text-muted-foreground">(2² = 4)</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/visualize">
            <Button variant="outline">Previous: Visualize</Button>
          </Link>
          <Link href="/solve">
            <Button className="gap-2">
              Next: Solve It Yourself <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
