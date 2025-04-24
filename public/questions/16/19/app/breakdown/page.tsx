"use client"

import { useState } from "react"
import { useProgress } from "@/components/progress-provider"
import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

type InfoItem = {
  id: string
  icon: string
  title: string
  value: string
  category: "given" | "find"
}

export default function BreakdownPage() {
  const { updateProgress } = useProgress()
  const { toast } = useToast()

  const infoItems: InfoItem[] = [
    { id: "miles", icon: "🚙", title: "Miles traveled", value: "337", category: "given" },
    { id: "gasoline", icon: "⛽", title: "Gasoline used", value: "13.7 gallons", category: "given" },
    { id: "find", icon: "❓", title: "Find", value: "Miles per 1 gallon", category: "find" },
  ]

  const [items, setItems] = useState(infoItems)
  const [givenItems, setGivenItems] = useState<string[]>([])
  const [findItems, setFindItems] = useState<string[]>([])
  const [isDragging, setIsDragging] = useState<string | null>(null)

  const handleDragStart = (id: string) => {
    setIsDragging(id)
  }

  const handleDragEnd = () => {
    setIsDragging(null)
  }

  const addToCategory = (id: string, category: "given" | "find") => {
    const item = items.find((item) => item.id === id)
    if (!item) return

    if (category === "given") {
      if (!givenItems.includes(id)) {
        setGivenItems([...givenItems, id])
      }
    } else {
      if (!findItems.includes(id)) {
        setFindItems([...findItems, id])
      }
    }

    // Check if all items are correctly categorized
    const allCorrect = items.every((item) => {
      if (item.category === "given") {
        return givenItems.includes(item.id)
      } else {
        return findItems.includes(item.id)
      }
    })

    if (allCorrect) {
      updateProgress("breakdown", { completed: true })
      toast({
        title: "Great job!",
        description: "You've correctly identified all the important details!",
      })
    }
  }

  return (
    <PageLayout title="🧩 What Are the Important Details?">
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <p className="text-lg">
            Let's identify the important information in our problem. Drag each fact to the correct category.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={item.id}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragStart={() => handleDragStart(item.id)}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 1.05, zIndex: 10 }}
              className={`cursor-grab rounded-lg bg-white p-4 shadow-md transition-all ${
                isDragging === item.id ? "z-10 shadow-lg" : ""
              } ${givenItems.includes(item.id) || findItems.includes(item.id) ? "opacity-50" : "opacity-100"}`}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-1">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            className="flex min-h-40 flex-col rounded-lg border-2 border-dashed border-primary/50 p-4"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              if (isDragging) {
                addToCategory(isDragging, "given")
              }
            }}
          >
            <h3 className="mb-4 text-center text-xl font-semibold">Given Information</h3>
            <div className="flex flex-wrap gap-2">
              {givenItems.map((id) => {
                const item = items.find((item) => item.id === id)
                if (!item) return null

                return (
                  <Card key={id} className="w-full">
                    <CardContent className="flex items-center p-3">
                      <span className="mr-2 text-xl">{item.icon}</span>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div
            className="flex min-h-40 flex-col rounded-lg border-2 border-dashed border-primary/50 p-4"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              if (isDragging) {
                addToCategory(isDragging, "find")
              }
            }}
          >
            <h3 className="mb-4 text-center text-xl font-semibold">What We Need to Find</h3>
            <div className="flex flex-wrap gap-2">
              {findItems.map((id) => {
                const item = items.find((item) => item.id === id)
                if (!item) return null

                return (
                  <Card key={id} className="w-full">
                    <CardContent className="flex items-center p-3">
                      <span className="mr-2 text-xl">{item.icon}</span>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <Button
            onClick={() => {
              // Force complete for testing
              updateProgress("breakdown", { completed: true })
              toast({
                title: "Hint",
                description: "Miles traveled and gasoline used are given. We need to find miles per gallon.",
              })
            }}
            variant="outline"
          >
            Need a Hint?
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
