"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Car } from "lucide-react"

interface Fact {
  id: string
  text: string
  category: "travel" | "stops" | "uncategorized"
  icon: React.ReactNode
}

export function DragDropFacts() {
  const [facts, setFacts] = useState<Fact[]>([
    {
      id: "departure",
      text: "Departure: 6:30 A.M.",
      category: "uncategorized",
      icon: <Clock className="h-4 w-4" />,
    },
    {
      id: "first-stop",
      text: "First stop: 8:00 A.M. to 8:45 A.M. (45 minutes break)",
      category: "uncategorized",
      icon: <MapPin className="h-4 w-4" />,
    },
    {
      id: "second-stop",
      text: "Second stop: 0.5 hour",
      category: "uncategorized",
      icon: <MapPin className="h-4 w-4" />,
    },
    {
      id: "arrival",
      text: "Arrival: 2:30 P.M.",
      category: "uncategorized",
      icon: <Clock className="h-4 w-4" />,
    },
    {
      id: "speed",
      text: "Driving speed: 50 mph",
      category: "uncategorized",
      icon: <Car className="h-4 w-4" />,
    },
  ])

  const moveFact = (id: string, category: "travel" | "stops") => {
    setFacts(facts.map((fact) => (fact.id === id ? { ...fact, category } : fact)))
  }

  const getFactsByCategory = (category: string) => facts.filter((fact) => fact.category === category)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              Travel Time Facts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-24 space-y-2 border-2 border-dashed border-gray-200 rounded-md p-3">
              {getFactsByCategory("travel").map((fact) => (
                <div key={fact.id} className="flex items-center justify-between p-2 bg-blue-50 rounded-md">
                  <div className="flex items-center gap-2">
                    {fact.icon}
                    <span>{fact.text}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => moveFact(fact.id, "stops")}>
                    Move
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-red-500" />
              Stops Facts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-24 space-y-2 border-2 border-dashed border-gray-200 rounded-md p-3">
              {getFactsByCategory("stops").map((fact) => (
                <div key={fact.id} className="flex items-center justify-between p-2 bg-red-50 rounded-md">
                  <div className="flex items-center gap-2">
                    {fact.icon}
                    <span>{fact.text}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => moveFact(fact.id, "travel")}>
                    Move
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Uncategorized Facts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {getFactsByCategory("uncategorized").map((fact) => (
              <div key={fact.id} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                <div className="flex items-center gap-2">
                  {fact.icon}
                  <span>{fact.text}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => moveFact(fact.id, "travel")}>
                    Travel Time
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => moveFact(fact.id, "stops")}>
                    Stops
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
