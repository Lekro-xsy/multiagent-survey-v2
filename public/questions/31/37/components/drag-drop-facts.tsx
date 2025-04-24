"use client"

import { useState } from "react"
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Check, GripVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Fact {
  id: string
  content: string
  category: "known" | "unknown" | "unassigned"
}

interface SortableItemProps {
  fact: Fact
}

function SortableItem({ fact }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: fact.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center gap-2 rounded-md border bg-card p-3 mb-2 cursor-grab"
    >
      <GripVertical className="h-5 w-5 text-muted-foreground" />
      <span>{fact.content}</span>
    </div>
  )
}

export function DragDropFacts() {
  const [facts, setFacts] = useState<Fact[]>([
    { id: "1", content: "Ticket price: $2.80 each", category: "unassigned" },
    { id: "2", content: "Goal: at least $395", category: "unassigned" },
    { id: "3", content: "Number of tickets to sell", category: "unassigned" },
    { id: "4", content: "Drama club is raising money", category: "unassigned" },
  ])

  const [checked, setChecked] = useState(false)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const knownFacts = facts.filter((fact) => fact.category === "known")
  const unknownFacts = facts.filter((fact) => fact.category === "unknown")
  const unassignedFacts = facts.filter((fact) => fact.category === "unassigned")

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (active.id !== over.id) {
      setFacts((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const moveToCategory = (id: string, category: "known" | "unknown") => {
    setFacts(facts.map((fact) => (fact.id === id ? { ...fact, category } : fact)))
  }

  const checkAnswers = () => {
    setChecked(true)
  }

  const resetCategories = () => {
    setFacts(facts.map((fact) => ({ ...fact, category: "unassigned" })))
    setChecked(false)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <h3 className="mb-4 font-semibold">Known Information</h3>
            <div className="min-h-24 border-2 border-dashed rounded-md p-2">
              {knownFacts.map((fact) => (
                <div
                  key={fact.id}
                  className="flex items-center justify-between gap-2 rounded-md border bg-card p-3 mb-2"
                >
                  <span>{fact.content}</span>
                  <Button variant="ghost" size="sm" onClick={() => moveToCategory(fact.id, "unassigned")}>
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="mb-4 font-semibold">Unknown (Need to Find)</h3>
            <div className="min-h-24 border-2 border-dashed rounded-md p-2">
              {unknownFacts.map((fact) => (
                <div
                  key={fact.id}
                  className="flex items-center justify-between gap-2 rounded-md border bg-card p-3 mb-2"
                >
                  <span>{fact.content}</span>
                  <Button variant="ghost" size="sm" onClick={() => moveToCategory(fact.id, "unassigned")}>
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4">
          <h3 className="mb-4 font-semibold">Drag Facts to the Correct Category</h3>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={unassignedFacts.map((fact) => fact.id)}>
              <div className="space-y-2">
                {unassignedFacts.map((fact) => (
                  <div key={fact.id} className="flex items-center gap-2">
                    <SortableItem fact={fact} />
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => moveToCategory(fact.id, "known")}>
                        Known
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => moveToCategory(fact.id, "unknown")}>
                        Unknown
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={resetCategories}>
          Reset
        </Button>
        <Button onClick={checkAnswers} disabled={checked}>
          Check Answers
        </Button>
      </div>

      {checked && (
        <div className="rounded-md bg-green-100 p-4 text-green-800">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5" />
            <p className="font-medium">Great job!</p>
          </div>
          <p className="mt-2">
            The known information is the ticket price ($2.80) and the fundraising goal (at least $395). The unknown
            information is the number of tickets they need to sell.
          </p>
        </div>
      )}
    </div>
  )
}
