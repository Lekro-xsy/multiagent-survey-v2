"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SimilarPage() {
  const [bricks, setBricks] = useState("")
  const [mass, setMass] = useState("")
  const [isCorrect, setIsCorrect] = useState({ bricks: false, mass: false })
  const [hasChecked, setHasChecked] = useState(false)

  const handleCheck = () => {
    setIsCorrect({
      bricks: bricks === "4",
      mass: mass === "8",
    })
    setHasChecked(true)
  }

  return (
    <div className="container py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">🔄 Another Pyramid Challenge!</CardTitle>
          <CardDescription>Apply the same approach to a similar problem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg bg-purple-50 p-4">
                <h2 className="mb-3 text-xl font-semibold text-purple-800">New Problem</h2>
                <p className="text-purple-700">A toy pyramid uses blocks weighing 2 kilograms each.</p>
                <p className="mt-2 text-purple-700">The bottom has 25 blocks, then 16 blocks, then 9, and so on.</p>
                <p className="mt-2 font-medium text-purple-800">What is the mass of the 4th layer?</p>
              </div>

              <div className="space-y-4 rounded-lg border p-6">
                <h3 className="text-lg font-medium">Your Solution</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bricks">Number of blocks in the 4th layer:</Label>
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
                      <p className="text-sm text-red-500">Try again! Look at the pattern: 25, 16, 9, ...</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mass">Mass of the 4th layer (in kg):</Label>
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
                      <p className="text-sm text-red-500">Try again! Multiply the number of blocks by 2 kg.</p>
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
                  <p>You've correctly solved the similar problem.</p>
                  <p className="mt-2">The 4th layer has 4 blocks, each weighing 2 kg, for a total of 8 kg.</p>
                </div>
              )}
            </div>
            <div className="space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 font-medium text-blue-800">Approach</h3>
                <ol className="ml-4 list-decimal space-y-2 text-blue-700">
                  <li>Identify the pattern in the number of blocks per layer</li>
                  <li>Find the number of blocks in the 4th layer</li>
                  <li>Multiply by the weight of each block (2 kg)</li>
                </ol>
              </div>

              <div className="rounded-lg bg-yellow-50 p-4">
                <h3 className="mb-2 font-medium text-yellow-800">Hint: Pattern Recognition</h3>
                <p className="text-yellow-700">The pattern appears to be decreasing perfect squares:</p>
                <ul className="mt-2 space-y-1 text-yellow-700">
                  <li>1st layer: 5² = 25 blocks</li>
                  <li>2nd layer: 4² = 16 blocks</li>
                  <li>3rd layer: 3² = 9 blocks</li>
                  <li>4th layer: ?</li>
                </ul>
              </div>

              <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap justify-center">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className="m-0.5 h-3 w-3 rounded-sm bg-purple-400" />
                    ))}
                  </div>
                  <p className="text-center text-sm">Layer 1: 25 blocks</p>

                  <div className="flex flex-wrap justify-center">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="m-0.5 h-3 w-3 rounded-sm bg-purple-400" />
                    ))}
                  </div>
                  <p className="text-center text-sm">Layer 2: 16 blocks</p>

                  <div className="flex flex-wrap justify-center">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="m-0.5 h-3 w-3 rounded-sm bg-purple-400" />
                    ))}
                  </div>
                  <p className="text-center text-sm">Layer 3: 9 blocks</p>

                  <div className="flex flex-wrap justify-center">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="m-0.5 h-3 w-3 rounded-sm bg-purple-400" />
                    ))}
                  </div>
                  <p className="text-center text-sm">Layer 4: ? blocks</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/solution">
            <Button variant="outline">Previous: Solution</Button>
          </Link>
          <Link href="/different">
            <Button className="gap-2">
              Next: Different Context <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
