"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"
import { Card } from "@/components/ui/card"

type FactType = "building" | "flagpole" | "unsorted"

interface Fact {
  id: number
  text: string
  type: FactType
}

export default function BreakdownPage() {
  const [facts, setFacts] = useState<Fact[]>([
    { id: 1, text: "Total height = 208 feet", type: "unsorted" },
    { id: 2, text: "Building height = 7 × flagpole height", type: "unsorted" },
    { id: 3, text: "Building is 7 times as tall as flagpole", type: "unsorted" },
  ])

  const handleSortFact = (id: number, newType: FactType) => {
    setFacts(facts.map((fact) => (fact.id === id ? { ...fact, type: newType } : fact)))
  }

  const allSorted = facts.every((fact) => fact.type !== "unsorted")

  return (
    <PageLayout title="🧩 Key Information" pageNumber={2} totalPages={9}>
      <div className="space-y-8">
        <div className="bg-yellow-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-3">Breaking Down the Problem</h2>
          <p>
            Let's identify the key information we have about the building and flagpole. Sort each fact by clicking the
            appropriate button.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-4 bg-blue-50">
            <h3 className="text-lg font-bold mb-3 text-center">Building Facts</h3>
            <div className="min-h-[100px] space-y-2">
              {facts
                .filter((f) => f.type === "building")
                .map((fact) => (
                  <div key={fact.id} className="p-2 bg-blue-100 rounded">
                    {fact.text}
                  </div>
                ))}
            </div>
          </Card>

          <Card className="p-4 bg-gray-50">
            <h3 className="text-lg font-bold mb-3 text-center">Unsorted Facts</h3>
            <div className="space-y-4">
              {facts
                .filter((f) => f.type === "unsorted")
                .map((fact) => (
                  <div key={fact.id} className="p-3 bg-white rounded shadow-sm">
                    <p className="mb-2">{fact.text}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs"
                        onClick={() => handleSortFact(fact.id, "building")}
                      >
                        Building
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs"
                        onClick={() => handleSortFact(fact.id, "flagpole")}
                      >
                        Flagpole
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </Card>

          <Card className="p-4 bg-red-50">
            <h3 className="text-lg font-bold mb-3 text-center">Flagpole Facts</h3>
            <div className="min-h-[100px] space-y-2">
              {facts
                .filter((f) => f.type === "flagpole")
                .map((fact) => (
                  <div key={fact.id} className="p-2 bg-red-100 rounded">
                    {fact.text}
                  </div>
                ))}
            </div>
          </Card>
        </div>

        {allSorted && (
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="font-medium text-green-800">
              Great job sorting the facts! Now we understand what we know about each part.
            </p>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Link href="/context">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>
          </Link>

          <Link href="/visualize">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
