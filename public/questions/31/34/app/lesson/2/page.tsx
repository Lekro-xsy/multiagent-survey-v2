"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface SortableItemProps {
  id: string
  word: string
  explanation: string
}

function SortableItem({ id, word, explanation }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

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
      className="mb-2 cursor-grab rounded-md border bg-card p-4 shadow-sm"
    >
      <div className="font-semibold">{word}</div>
      <div className="text-sm text-muted-foreground">{explanation}</div>
    </div>
  )
}

export default function LessonTwoPage() {
  const [inequalityWords, setInequalityWords] = useState([
    {
      id: "over",
      word: "Over",
      explanation: "Greater than (>)",
    },
    {
      id: "under",
      word: "Under",
      explanation: "Less than (<)",
    },
    {
      id: "more-than",
      word: "More than",
      explanation: "Greater than (>)",
    },
    {
      id: "less-than",
      word: "Less than",
      explanation: "Less than (<)",
    },
    {
      id: "at-least",
      word: "At least",
      explanation: "Greater than or equal to (≥)",
    },
    {
      id: "at-most",
      word: "At most",
      explanation: "Less than or equal to (≤)",
    },
  ])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (over && active.id !== over.id) {
      setInequalityWords((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <LessonLayout currentPage={2} totalPages={9}>
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">🧩 Key Words to Watch</h1>
          <p className="text-muted-foreground">
            Let's identify the important keywords that signal inequality relationships
          </p>
        </div>

        <div className="rounded-lg bg-muted p-6">
          <h2 className="mb-4 text-xl font-semibold">Highlighted Keywords</h2>
          <p className="mb-6">
            These words suggest ranges of possible solutions, not just a single value. When you see these words in a
            problem, they often indicate that you'll need to use an inequality.
          </p>

          <div className="mb-6">
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <p className="mb-2 text-sm font-medium">Drag to reorder these inequality keywords:</p>
              <SortableContext items={inequalityWords.map((item) => item.id)}>
                <div>
                  {inequalityWords.map((item) => (
                    <SortableItem key={item.id} id={item.id} word={item.word} explanation={item.explanation} />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-2 font-semibold">Leads to an Inequality</h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>Over, above, exceeds, greater than</li>
                  <li>Under, below, less than</li>
                  <li>At least, no less than, minimum</li>
                  <li>At most, no more than, maximum</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-2 font-semibold">Not Necessarily an Inequality</h3>
                <ul className="list-inside list-disc space-y-1 text-sm">
                  <li>Equal to, exactly, precisely</li>
                  <li>The same as, equivalent to</li>
                  <li>Equals, is</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Concept Tip</h2>
          <p>
            When we use inequality keywords, we're describing a <span className="font-bold">range of values</span> that
            satisfy a condition, not just a single exact value.
          </p>
          <div className="mt-4 rounded-md bg-amber-50 p-4 dark:bg-amber-950">
            <p className="text-sm">
              <span className="font-semibold">Example:</span> "The temperature is above 70°F" means any temperature
              greater than 70°F (71°F, 72°F, 85°F, etc.) would satisfy this condition.
            </p>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
