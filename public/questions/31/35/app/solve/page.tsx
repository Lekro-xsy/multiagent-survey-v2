"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { PyramidVisualization } from "@/components/pyramid-visualization"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SolvePage() {
  const [bricks, setBricks] = useState("")
  const [mass, setMass] = useState("")
  const [isCorrect, setIsCorrect] = useState({ bricks: false, mass: false })
  const [hasChecked, setHasChecked] = useState(false)

  const handleCheck = () => {
    setIsCorrect({
      bricks: bricks === "4",
      mass: mass === "20",
    })
    setHasChecked(true)
  }

  return (
    <div className="container py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">✍️ Now You Solve It!</CardTitle>
          <CardDescription>Apply what you've learned to solve the problem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg bg-yellow-50 p-4">
                <h2 className="mb-3 text-xl font-semibold text-yellow-800">Problem Recap</h2>
                <p className="text-yellow-700">Cindy is building a brick pyramid where each brick weighs 5 kg.</p>
                <p className="mt-2 text-yellow-700">
                  The pattern of bricks per layer follows: 6² = 36, 5² = 25, 4² = 16, and so on.
                </p>
                <p className="mt-2 font-medium text-yellow-800">What is the mass of the fifth layer of the pyramid?</p>
              </div>

              <div className="space-y-4 rounded-lg border p-6">
                <h3 className="text-lg font-medium">Your Solution</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bricks">Number of bricks in the 5th layer:</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="bricks"
                        value={bricks}
                        onChange={(e) => setBricks(e.target.value)}
                        className={
                          hasChecked
                            ? isCorrect.bricks
                              ? "border-green-500 bg-green-50"
                              : "border-red-500 bg-red-50"
                            : ""
                        }
                      />
                      {hasChecked && isCorrect.bricks && <Check className="h-5 w-5 text-green-500" />}
                    </div>
                    {hasChecked && !isCorrect.bricks && (
                      <p className="text-sm text-red-500">Try again! Remember the pattern: 6², 5², 4², 3², ...</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mass">Mass of the 5th layer (in kg):</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="mass"
                        value={mass}
                        onChange={(e) => setMass(e.target.value)}
                        className={
                          hasChecked
                            ? isCorrect.mass
                              ? "border-green-500 bg-green-50"
                              : "border-red-500 bg-red-50"
                            : ""
                        }
                      />
                      {hasChecked && isCorrect.mass && <Check className="h-5 w-5 text-green-500" />}
                    </div>
                    {hasChecked && !isCorrect.mass && (
                      <p className="text-sm text-red-500">Try again! Multiply the number of bricks by 5 kg.</p>
                    )}
                  </div>

                  <Button onClick={handleCheck} className="w-full">
                    Check My Solution
                  </Button>
                </div>
              </div>

              {isCorrect.bricks && isCorrect.mass && (
                <div className="rounded-lg bg-green-100 p-4 text-center text-green-800">
                  <p className="font-medium">Excellent work!</p>
                  <p>You've correctly solved the problem.</p>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center justify-center">
              <PyramidVisualization highlightLayer={5} />
              <div className="mt-6 space-y-4 rounded-lg bg-blue-50 p-4">
                <h3 className="font-medium text-blue-800">Hint: Follow These Steps</h3>
                <ol className="ml-4 list-decimal space-y-2 text-blue-700">
                  <li>Find the number of bricks in the 5th layer using the pattern</li>
                  <li>Multiply that number by the weight of each brick (5 kg)</li>
                </ol>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/setup">
            <Button variant="outline">Previous: Set Up</Button>
          </Link>
          <Link href="/solution">
            <Button className="gap-2">
              Next: See Solution <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
