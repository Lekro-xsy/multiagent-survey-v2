"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BreakdownPage() {
  const [draggedItems, setDraggedItems] = useState({
    "1st layer": false,
    "2nd layer": false,
    "3rd layer": false,
    "Brick mass": false,
  })

  const handleDragStart = (e: React.DragEvent, item: string) => {
    e.dataTransfer.setData("text/plain", item)
  }

  const handleDrop = (e: React.DragEvent, item: string) => {
    e.preventDefault()
    const draggedItem = e.dataTransfer.getData("text/plain")
    setDraggedItems((prev) => ({ ...prev, [draggedItem]: true }))
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const allItemsDragged = Object.values(draggedItems).every((value) => value)

  return (
    <div className="container py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">🧩 Organize the Information</CardTitle>
          <CardDescription>Let's break down the problem into manageable parts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Given Information</h2>
              <div className="space-y-2">
                {!draggedItems["Brick mass"] && (
                  <div
                    draggable
                    onDragStart={(e) => handleDragStart(e, "Brick mass")}
                    className="cursor-move rounded-md bg-blue-100 p-3 text-blue-800 hover:bg-blue-200"
                  >
                    Each brick weighs 5 kilograms
                  </div>
                )}
                {!draggedItems["1st layer"] && (
                  <div
                    draggable
                    onDragStart={(e) => handleDragStart(e, "1st layer")}
                    className="cursor-move rounded-md bg-green-100 p-3 text-green-800 hover:bg-green-200"
                  >
                    Bottom (1st) layer: 36 bricks
                  </div>
                )}
                {!draggedItems["2nd layer"] && (
                  <div
                    draggable
                    onDragStart={(e) => handleDragStart(e, "2nd layer")}
                    className="cursor-move rounded-md bg-purple-100 p-3 text-purple-800 hover:bg-purple-200"
                  >
                    2nd layer: 25 bricks
                  </div>
                )}
                {!draggedItems["3rd layer"] && (
                  <div
                    draggable
                    onDragStart={(e) => handleDragStart(e, "3rd layer")}
                    className="cursor-move rounded-md bg-orange-100 p-3 text-orange-800 hover:bg-orange-200"
                  >
                    3rd layer: 16 bricks
                  </div>
                )}
              </div>

              <div className="mt-8 rounded-lg bg-yellow-50 p-4">
                <h3 className="mb-2 font-medium text-yellow-700">Important Tip</h3>
                <p className="text-yellow-600">
                  Find the number of bricks in the 5th layer first, then calculate the mass!
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Organized Information</h2>
              <div className="space-y-4 rounded-lg border p-4">
                <div
                  onDrop={(e) => handleDrop(e, "Brick mass")}
                  onDragOver={handleDragOver}
                  className={`flex h-12 items-center rounded-md border-2 border-dashed p-3 ${
                    draggedItems["Brick mass"] ? "border-blue-300 bg-blue-50" : "border-gray-300"
                  }`}
                >
                  {draggedItems["Brick mass"] ? "Brick mass = 5 kg" : "Drag brick mass here"}
                </div>

                <h3 className="font-medium">Layers:</h3>
                <div
                  onDrop={(e) => handleDrop(e, "1st layer")}
                  onDragOver={handleDragOver}
                  className={`flex h-12 items-center rounded-md border-2 border-dashed p-3 ${
                    draggedItems["1st layer"] ? "border-green-300 bg-green-50" : "border-gray-300"
                  }`}
                >
                  {draggedItems["1st layer"] ? "1st → 36 bricks" : "Drag 1st layer here"}
                </div>
                <div
                  onDrop={(e) => handleDrop(e, "2nd layer")}
                  onDragOver={handleDragOver}
                  className={`flex h-12 items-center rounded-md border-2 border-dashed p-3 ${
                    draggedItems["2nd layer"] ? "border-purple-300 bg-purple-50" : "border-gray-300"
                  }`}
                >
                  {draggedItems["2nd layer"] ? "2nd → 25 bricks" : "Drag 2nd layer here"}
                </div>
                <div
                  onDrop={(e) => handleDrop(e, "3rd layer")}
                  onDragOver={handleDragOver}
                  className={`flex h-12 items-center rounded-md border-2 border-dashed p-3 ${
                    draggedItems["3rd layer"] ? "border-orange-300 bg-orange-50" : "border-gray-300"
                  }`}
                >
                  {draggedItems["3rd layer"] ? "3rd → 16 bricks" : "Drag 3rd layer here"}
                </div>
              </div>

              {allItemsDragged && (
                <div className="mt-4 rounded-lg bg-green-100 p-4 text-center text-green-800">
                  <p className="font-medium">Great job organizing the information!</p>
                  <p className="mt-2">Now let's look for a pattern in the number of bricks per layer.</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/context">
            <Button variant="outline">Previous: Context</Button>
          </Link>
          <Link href="/visualize">
            <Button className="gap-2">
              Next: Visualize the Pyramid <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
