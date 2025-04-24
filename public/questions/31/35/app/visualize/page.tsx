"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { PyramidVisualization } from "@/components/pyramid-visualization"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function VisualizePage() {
  const [fourthLayer, setFourthLayer] = useState("")
  const [fifthLayer, setFifthLayer] = useState("")
  const [isCorrect, setIsCorrect] = useState({ fourth: false, fifth: false })
  const [hasChecked, setHasChecked] = useState(false)

  const handleCheck = () => {
    setIsCorrect({
      fourth: fourthLayer === "9",
      fifth: fifthLayer === "4",
    })
    setHasChecked(true)
  }

  return (
    <div className="container py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">📊 See the Layers!</CardTitle>
          <CardDescription>Visualizing the pyramid helps us understand the pattern</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center">
              <PyramidVisualization />
            </div>
            <div className="space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <h2 className="mb-3 text-xl font-semibold text-blue-800">Key Concept</h2>
                <p className="text-blue-700">
                  The pattern is that each layer has n² bricks, where n decreases as we go up the pyramid:
                </p>
                <ul className="mt-2 space-y-1 text-blue-700">
                  <li>1st layer: 6² = 36 bricks</li>
                  <li>2nd layer: 5² = 25 bricks</li>
                  <li>3rd layer: 4² = 16 bricks</li>
                </ul>
              </div>

              <div className="space-y-4 rounded-lg border p-6">
                <h3 className="text-lg font-medium">Your Turn: Complete the Pattern</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fourth-layer">Number of bricks in the 4th layer:</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="fourth-layer"
                        value={fourthLayer}
                        onChange={(e) => setFourthLayer(e.target.value)}
                        className={
                          hasChecked
                            ? isCorrect.fourth
                              ? "border-green-500 bg-green-50"
                              : "border-red-500 bg-red-50"
                            : ""
                        }
                      />
                      {hasChecked && isCorrect.fourth && <Check className="h-5 w-5 text-green-500" />}
                    </div>
                    {hasChecked && !isCorrect.fourth && (
                      <p className="text-sm text-red-500">Try again! Think about the pattern: 3² = ?</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fifth-layer">Number of bricks in the 5th layer:</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="fifth-layer"
                        value={fifthLayer}
                        onChange={(e) => setFifthLayer(e.target.value)}
                        className={
                          hasChecked
                            ? isCorrect.fifth
                              ? "border-green-500 bg-green-50"
                              : "border-red-500 bg-red-50"
                            : ""
                        }
                      />
                      {hasChecked && isCorrect.fifth && <Check className="h-5 w-5 text-green-500" />}
                    </div>
                    {hasChecked && !isCorrect.fifth && (
                      <p className="text-sm text-red-500">Try again! Think about the pattern: 2² = ?</p>
                    )}
                  </div>

                  <Button onClick={handleCheck} className="w-full">
                    Check My Answers
                  </Button>
                </div>
              </div>

              {isCorrect.fourth && isCorrect.fifth && (
                <div className="rounded-lg bg-green-100 p-4 text-center text-green-800">
                  <p className="font-medium">Excellent work!</p>
                  <p>You've correctly identified the pattern in the pyramid layers.</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/breakdown">
            <Button variant="outline">Previous: Break Down</Button>
          </Link>
          <Link href="/setup">
            <Button className="gap-2">
              Next: Set Up the Math <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
