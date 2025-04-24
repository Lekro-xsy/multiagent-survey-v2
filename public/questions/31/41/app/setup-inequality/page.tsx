"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface InequalityPart {
  id: string
  text: string
  isPlaced: boolean
  correctPosition: number
}

export default function SetupInequalityPage() {
  const [parts, setParts] = useState<InequalityPart[]>([
    { id: "weekly-base", text: "50", isPlaced: false, correctPosition: 0 },
    { id: "plus", text: "+", isPlaced: false, correctPosition: 1 },
    { id: "commission-rate", text: "2", isPlaced: false, correctPosition: 2 },
    { id: "variable", text: "x", isPlaced: false, correctPosition: 3 },
    { id: "inequality", text: "≥", isPlaced: false, correctPosition: 4 },
    { id: "goal", text: "150", isPlaced: false, correctPosition: 5 },
  ])

  const [placedParts, setPlacedParts] = useState<(InequalityPart | null)[]>([null, null, null, null, null, null])

  const [isComplete, setIsComplete] = useState(false)

  const handlePlacePart = (part: InequalityPart, position: number) => {
    // If there's already a part in this position, return
    if (placedParts[position] !== null) return

    // Update the part to be placed
    const updatedParts = parts.map((p) => (p.id === part.id ? { ...p, isPlaced: true } : p))

    // Update the placed parts array
    const updatedPlacedParts = [...placedParts]
    updatedPlacedParts[position] = part

    setParts(updatedParts)
    setPlacedParts(updatedPlacedParts)

    // Check if all parts are correctly placed
    const allCorrect = updatedPlacedParts.every((p, index) => p !== null && p.correctPosition === index)

    if (allCorrect && updatedPlacedParts.every((p) => p !== null)) {
      setIsComplete(true)
    }
  }

  const handleRemovePart = (position: number) => {
    const part = placedParts[position]
    if (!part) return

    // Update the part to be unplaced
    const updatedParts = parts.map((p) => (p.id === part.id ? { ...p, isPlaced: false } : p))

    // Update the placed parts array
    const updatedPlacedParts = [...placedParts]
    updatedPlacedParts[position] = null

    setParts(updatedParts)
    setPlacedParts(updatedPlacedParts)
    setIsComplete(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-purple-700 to-purple-900 py-6 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Math in Action: Inequalities</h1>
          <p className="mt-2 text-lg">Learn how to use inequalities to solve real-world problems</p>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <Card className="mx-auto max-w-4xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">🧮 Building Tony's Earnings Inequality</CardTitle>
            <CardDescription>
              Drag the terms to build the inequality that represents Tony's earnings goal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-blue-700">Weekly Base Pay</h3>
                <div className="flex items-center justify-center gap-4 text-2xl">
                  <div className="flex items-center">
                    <span className="font-medium">10</span>
                    <span className="mx-2">×</span>
                    <span className="font-medium">5</span>
                    <span className="mx-2">=</span>
                    <span className="font-bold text-blue-700">50</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-purple-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-purple-700">Weekly Commission</h3>
                <div className="flex items-center justify-center gap-4 text-2xl">
                  <div className="flex items-center">
                    <span className="font-medium">2</span>
                    <span className="mx-2">×</span>
                    <span className="font-medium italic">x</span>
                  </div>
                </div>
                <p className="mt-2 text-center text-sm text-purple-600">
                  (where <span className="italic">x</span> is the number of CDs sold)
                </p>
              </div>

              <div className="rounded-lg bg-green-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-green-700">Inequality</h3>
                <div className="flex items-center justify-center gap-2 text-2xl">
                  {placedParts.map((part, index) => (
                    <div
                      key={index}
                      onClick={() => part && handleRemovePart(index)}
                      className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border-2 ${
                        part ? "border-green-500 bg-white" : "border-dashed border-gray-400 bg-gray-50"
                      }`}
                    >
                      {part ? (
                        <span className="text-xl font-medium">{part.text}</span>
                      ) : (
                        <span className="text-gray-400">?</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-gray-100 p-4">
                <h3 className="mb-4 text-center text-lg font-medium">Available Terms</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {parts
                    .filter((part) => !part.isPlaced)
                    .map((part) => (
                      <div
                        key={part.id}
                        className="cursor-move rounded-md bg-white p-3 shadow"
                        draggable
                        onDragEnd={() => {}}
                        onClick={() => {
                          const emptyPosition = placedParts.findIndex((p) => p === null)
                          if (emptyPosition !== -1) {
                            handlePlacePart(part, emptyPosition)
                          }
                        }}
                      >
                        <span className="text-xl font-medium">{part.text}</span>
                      </div>
                    ))}
                </div>
              </div>

              {isComplete && (
                <div className="rounded-lg bg-green-50 p-4 text-center text-green-700">
                  <p className="text-lg font-medium">Great job! You've correctly built the inequality:</p>
                  <p className="mt-2 text-2xl">50 + 2x ≥ 150</p>
                  <p className="mt-2">This represents Tony's earnings goal.</p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/visualize-earnings">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <Link href="/solve-inequality">
              <Button className="gap-2" disabled={!isComplete}>
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        <div className="container mx-auto">
          <p>Interactive Math Lesson: Inequalities Through Real-World Problems</p>
        </div>
      </footer>
    </div>
  )
}
