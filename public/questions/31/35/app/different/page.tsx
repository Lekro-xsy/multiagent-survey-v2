"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DifferentPage() {
  const [cakes, setCakes] = useState("")
  const [mass, setMass] = useState("")
  const [isCorrect, setIsCorrect] = useState({ cakes: false, mass: false })
  const [hasChecked, setHasChecked] = useState(false)

  const handleCheck = () => {
    setIsCorrect({
      cakes: cakes === "1",
      mass: mass === "1.5",
    })
    setHasChecked(true)
  }

  return (
    <div className="container py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">🚀 Same Math, New Story!</CardTitle>
          <CardDescription>Apply the same mathematical pattern in a different context</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg bg-pink-50 p-4">
                <h2 className="mb-3 text-xl font-semibold text-pink-800">New Context</h2>
                <p className="text-pink-700">A cake chef stacks round cakes where each layer has fewer cakes.</p>
                <p className="mt-2 text-pink-700">Each cake weighs 1.5 kg.</p>
                <p className="mt-2 text-pink-700">Layers follow 5², 4², 3², etc.</p>
                <p className="mt-2 font-medium text-pink-800">Find the total mass of the 5th layer.</p>
              </div>

              <div className="space-y-4 rounded-lg border p-6">
                <h3 className="text-lg font-medium">Your Solution</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cakes">Number of cakes in the 5th layer:</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="cakes"
                        value={cakes}
                        onChange={(e) => setCakes(e.target.value)}
                        className={
                          hasChecked
                            ? isCorrect.cakes
                              ? "border-green-500 bg-green-50"
                              : "border-red-500 bg-red-50"
                            : ""
                        }
                      />
                      {hasChecked && isCorrect.cakes && <Check className="h-5 w-5 text-green-500" />}
                    </div>
                    {hasChecked && !isCorrect.cakes && (
                      <p className="text-sm text-red-500">Try again! The pattern is 5², 4², 3², 2², ...</p>
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
                      <p className="text-sm text-red-500">Try again! Multiply the number of cakes by 1.5 kg.</p>
                    )}
                  </div>

                  <Button onClick={handleCheck} className="w-full">
                    Check My Solution
                  </Button>
                </div>
              </div>

              {isCorrect.cakes && isCorrect.mass && (
                <div className="rounded-lg bg-green-100 p-4 text-center text-green-800">
                  <p className="font-medium">Excellent work!</p>
                  <p>You've correctly applied the pattern in a different context.</p>
                  <p className="mt-2">The 5th layer has 1 cake, weighing 1.5 kg, for a total of 1.5 kg.</p>
                </div>
              )}
            </div>
            <div className="space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 font-medium text-blue-800">Transferring Knowledge</h3>
                <p className="text-blue-700">
                  Even though this is a completely different scenario, the mathematical pattern is the same:
                </p>
                <ul className="mt-2 space-y-1 text-blue-700">
                  <li>1st layer: 5² = 25 cakes</li>
                  <li>2nd layer: 4² = 16 cakes</li>
                  <li>3rd layer: 3² = 9 cakes</li>
                  <li>4th layer: 2² = 4 cakes</li>
                  <li>5th layer: 1² = ? cakes</li>
                </ul>
              </div>

              <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                <div className="space-y-4">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className="m-0.5 h-4 w-4 rounded-full bg-pink-400" />
                      ))}
                    </div>
                    <p className="text-center text-sm">Layer 1: 25 cakes</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="m-0.5 h-4 w-4 rounded-full bg-pink-400" />
                      ))}
                    </div>
                    <p className="text-center text-sm">Layer 2: 16 cakes</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="m-0.5 h-4 w-4 rounded-full bg-pink-400" />
                      ))}
                    </div>
                    <p className="text-center text-sm">Layer 3: 9 cakes</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="m-0.5 h-4 w-4 rounded-full bg-pink-400" />
                      ))}
                    </div>
                    <p className="text-center text-sm">Layer 4: 4 cakes</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="m-0.5 h-4 w-4 rounded-full bg-pink-400" />
                    </div>
                    <p className="text-center text-sm">Layer 5: ? cake</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-yellow-50 p-4">
                <h3 className="mb-2 font-medium text-yellow-800">Key Insight</h3>
                <p className="text-yellow-700">
                  The same mathematical pattern can appear in many different real-world contexts. Learning to recognize
                  these patterns helps you solve a wide variety of problems!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/similar">
            <Button variant="outline">Previous: Similar Problem</Button>
          </Link>
          <Link href="/summary">
            <Button className="gap-2">
              Next: Summary and Quiz <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
