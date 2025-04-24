"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Fuel, MapPin, Ruler } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BreakdownPage() {
  const [givenData, setGivenData] = useState<string[]>([])
  const [goalData, setGoalData] = useState<string[]>([])

  const facts = [
    { id: "fuel", icon: <Fuel className="h-5 w-5 text-red-500" />, text: "10.5 gallons → 200 miles" },
    { id: "tank", icon: <Fuel className="h-5 w-5 text-amber-500" />, text: "Tank holds 18 gallons" },
    { id: "distance", icon: <Ruler className="h-5 w-5 text-blue-500" />, text: "Trip distance: 350 miles" },
  ]

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("text/plain", id)
  }

  const handleDrop = (e: React.DragEvent, target: "given" | "goal") => {
    e.preventDefault()
    const id = e.dataTransfer.getData("text/plain")
    const fact = facts.find((f) => f.id === id)

    if (!fact) return

    if (target === "given") {
      if (!givenData.includes(id)) {
        setGivenData([...givenData, id])
        if (goalData.includes(id)) {
          setGoalData(goalData.filter((item) => item !== id))
        }
      }
    } else {
      if (!goalData.includes(id)) {
        setGoalData([...goalData, id])
        if (givenData.includes(id)) {
          setGivenData(givenData.filter((item) => item !== id))
        }
      }
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const isCorrect = () => {
    return (
      givenData.includes("fuel") &&
      givenData.includes("tank") &&
      givenData.includes("distance") &&
      goalData.length === 0
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/context">
              <Button variant="ghost" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <div className="text-sm text-slate-500">Page 2 of 9</div>
          </div>

          <div className="mb-4 rounded-xl bg-amber-50 p-6 shadow-lg">
            <h1 className="mb-6 flex items-center gap-2 text-3xl font-bold text-slate-800">
              <MapPin className="h-8 w-8 text-amber-600" /> What Do We Know?
            </h1>

            <div className="mb-6 rounded-xl bg-white p-4 shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-slate-700">Breaking Down the Information</h2>
              <p className="mb-4 text-slate-600">
                Before we can solve this problem, we need to organize what we know. Drag each fact card into the correct
                box below.
              </p>

              <div className="mb-6 flex flex-wrap justify-center gap-4">
                {facts.map((fact) => {
                  const isPlaced = givenData.includes(fact.id) || goalData.includes(fact.id)

                  return !isPlaced ? (
                    <Card
                      key={fact.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, fact.id)}
                      className="flex cursor-grab items-center gap-2 p-3 transition-transform hover:scale-105 active:cursor-grabbing"
                    >
                      {fact.icon}
                      <span>{fact.text}</span>
                    </Card>
                  ) : null
                })}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div
                  className="flex min-h-40 flex-col rounded-lg border-2 border-dashed border-emerald-300 bg-emerald-50 p-4"
                  onDrop={(e) => handleDrop(e, "given")}
                  onDragOver={handleDragOver}
                >
                  <h3 className="mb-3 text-center text-lg font-medium text-emerald-700">Given Data</h3>
                  <div className="flex flex-1 flex-col gap-2">
                    {givenData.map((id) => {
                      const fact = facts.find((f) => f.id === id)
                      return fact ? (
                        <Card key={id} className="flex items-center gap-2 p-3">
                          {fact.icon}
                          <span>{fact.text}</span>
                        </Card>
                      ) : null
                    })}
                  </div>
                </div>

                <div
                  className="flex min-h-40 flex-col rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 p-4"
                  onDrop={(e) => handleDrop(e, "goal")}
                  onDragOver={handleDragOver}
                >
                  <h3 className="mb-3 text-center text-lg font-medium text-blue-700">Goal (Find Out)</h3>
                  <div className="flex flex-1 flex-col gap-2">
                    {goalData.map((id) => {
                      const fact = facts.find((f) => f.id === id)
                      return fact ? (
                        <Card key={id} className="flex items-center gap-2 p-3">
                          {fact.icon}
                          <span>{fact.text}</span>
                        </Card>
                      ) : null
                    })}
                  </div>
                </div>
              </div>

              {givenData.length > 0 && (
                <div className="mt-6 rounded-lg bg-amber-100 p-4">
                  <h3 className="mb-2 text-lg font-medium text-amber-800">Hint:</h3>
                  <p className="text-amber-700">
                    All of these facts are given information that we'll use to solve our problem. Our goal is to
                    determine if we can make the entire trip on one tank of gas.
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Link href="/context">
                <Button variant="outline">
                  <ArrowLeft className="mr-1 h-4 w-4" /> Previous
                </Button>
              </Link>
              <Link href="/visualize">
                <Button className="bg-emerald-600 hover:bg-emerald-700" disabled={!isCorrect()}>
                  Continue <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
