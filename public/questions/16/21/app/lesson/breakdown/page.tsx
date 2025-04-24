"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type FactType = {
  id: string
  text: string
  category: null | "given" | "toFind"
}

export default function BreakdownPage() {
  const [facts, setFacts] = useState<FactType[]>([
    { id: "commission", text: "Commission per item = $2.75", category: null },
    { id: "calculators", text: "17 calculators sold", category: null },
    { id: "radios", text: "12 pocket radios sold", category: null },
    { id: "goal", text: "Total earnings", category: null },
  ])

  const [draggedFact, setDraggedFact] = useState<string | null>(null)

  const handleDragStart = (id: string) => {
    setDraggedFact(id)
  }

  const handleDrop = (category: "given" | "toFind") => {
    if (draggedFact) {
      setFacts(facts.map((fact) => (fact.id === draggedFact ? { ...fact, category } : fact)))
      setDraggedFact(null)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const isComplete = facts.every((fact) => fact.category !== null)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white py-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-bold">Math Learning Journey</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Page 2 of 9</span>
          </div>
        </div>
      </header>
      <main className="container flex-1 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">🔍 What Do We Know?</h1>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Problem Facts</h2>
                  <div className="flex flex-wrap gap-2">
                    {facts
                      .filter((fact) => fact.category === null)
                      .map((fact) => (
                        <div
                          key={fact.id}
                          draggable
                          onDragStart={() => handleDragStart(fact.id)}
                          className="rounded-lg border bg-card px-4 py-2 shadow-sm cursor-move hover:border-primary transition-colors"
                        >
                          {fact.text}
                        </div>
                      ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    className="rounded-lg border-2 border-dashed p-4 min-h-[150px] flex flex-col"
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop("given")}
                  >
                    <h3 className="font-semibold mb-2">Given Information</h3>
                    <div className="flex-1 flex flex-col gap-2">
                      {facts
                        .filter((fact) => fact.category === "given")
                        .map((fact) => (
                          <div key={fact.id} className="rounded-lg border bg-blue-50 px-4 py-2">
                            {fact.text}
                          </div>
                        ))}
                    </div>
                  </div>

                  <div
                    className="rounded-lg border-2 border-dashed p-4 min-h-[150px] flex flex-col"
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop("toFind")}
                  >
                    <h3 className="font-semibold mb-2">To Find</h3>
                    <div className="flex-1 flex flex-col gap-2">
                      {facts
                        .filter((fact) => fact.category === "toFind")
                        .map((fact) => (
                          <div key={fact.id} className="rounded-lg border bg-green-50 px-4 py-2">
                            {fact.text}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {isComplete && (
                  <div className="pt-4">
                    <Link href="/lesson/visualization">
                      <Button size="lg" className="w-full">
                        Continue to Visualization
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
