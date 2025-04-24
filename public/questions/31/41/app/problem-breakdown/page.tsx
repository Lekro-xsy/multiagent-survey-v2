"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type FactType = "fixed" | "variable" | "unassigned"

interface Fact {
  id: string
  text: string
  type: FactType
  correctType: "fixed" | "variable"
}

export default function ProblemBreakdownPage() {
  const [facts, setFacts] = useState<Fact[]>([
    { id: "daily-pay", text: "Daily base pay = $10", type: "unassigned", correctType: "fixed" },
    { id: "commission", text: "Commission = $2 per CD", type: "unassigned", correctType: "variable" },
    { id: "days", text: "Days worked = 5", type: "unassigned", correctType: "fixed" },
    { id: "goal", text: "Goal = at least $150", type: "unassigned", correctType: "fixed" },
  ])

  const [isComplete, setIsComplete] = useState(false)

  const handleDragFact = (factId: string, newType: FactType) => {
    setFacts(facts.map((fact) => (fact.id === factId ? { ...fact, type: newType } : fact)))

    // Check if all facts are correctly assigned
    const allCorrect = facts.every((fact) =>
      fact.id === factId ? newType === fact.correctType : fact.type === fact.correctType,
    )

    setIsComplete(allCorrect)
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
            <CardTitle className="text-2xl">🧩 What Do We Know?</CardTitle>
            <CardDescription>
              Drag each fact into the correct category: Fixed Earnings or Variable Earnings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="mx-auto max-w-2xl rounded-lg border bg-gray-50 p-4">
              <h3 className="mb-2 text-center text-lg font-medium">Key Facts</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {facts
                  .filter((fact) => fact.type === "unassigned")
                  .map((fact) => (
                    <div
                      key={fact.id}
                      className="cursor-move rounded-md bg-white p-3 shadow"
                      draggable
                      onDragEnd={() => {}}
                    >
                      {fact.text}
                    </div>
                  ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                <h3 className="mb-4 text-center text-lg font-medium text-blue-700">Fixed Earnings</h3>
                <div className="min-h-[100px] space-y-2">
                  {facts
                    .filter((fact) => fact.type === "fixed")
                    .map((fact) => (
                      <div key={fact.id} className="flex items-center justify-between rounded-md bg-white p-3 shadow">
                        <span>{fact.text}</span>
                        {fact.correctType === "fixed" && <Check className="h-5 w-5 text-green-500" />}
                      </div>
                    ))}
                </div>
                <div className="mt-4 rounded-md border-2 border-dashed border-blue-300 p-4 text-center text-blue-500">
                  <button
                    className="w-full"
                    onClick={() => {
                      const unassignedFact = facts.find((f) => f.type === "unassigned" && f.correctType === "fixed")
                      if (unassignedFact) {
                        handleDragFact(unassignedFact.id, "fixed")
                      }
                    }}
                  >
                    Drop Fixed Earnings Here
                  </button>
                </div>
              </div>

              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
                <h3 className="mb-4 text-center text-lg font-medium text-purple-700">Variable Earnings</h3>
                <div className="min-h-[100px] space-y-2">
                  {facts
                    .filter((fact) => fact.type === "variable")
                    .map((fact) => (
                      <div key={fact.id} className="flex items-center justify-between rounded-md bg-white p-3 shadow">
                        <span>{fact.text}</span>
                        {fact.correctType === "variable" && <Check className="h-5 w-5 text-green-500" />}
                      </div>
                    ))}
                </div>
                <div className="mt-4 rounded-md border-2 border-dashed border-purple-300 p-4 text-center text-purple-500">
                  <button
                    className="w-full"
                    onClick={() => {
                      const unassignedFact = facts.find((f) => f.type === "unassigned" && f.correctType === "variable")
                      if (unassignedFact) {
                        handleDragFact(unassignedFact.id, "variable")
                      }
                    }}
                  >
                    Drop Variable Earnings Here
                  </button>
                </div>
              </div>
            </div>

            {isComplete && (
              <div className="rounded-lg bg-green-50 p-4 text-center text-green-700">
                <p className="text-lg font-medium">Great job! You've correctly categorized all the facts.</p>
                <p>Now let's visualize Tony's earnings.</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <Link href="/visualize-earnings">
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
