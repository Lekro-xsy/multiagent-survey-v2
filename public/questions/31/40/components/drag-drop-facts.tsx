"use client"

import { useState } from "react"
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical } from "lucide-react"

interface Fact {
  id: string
  category: string
  content: string
  color: string
}

interface SortableItemProps {
  fact: Fact
}

const SortableItem = ({ fact }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: fact.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`mb-2 flex cursor-grab items-center rounded-lg bg-white p-3 shadow-sm ${fact.color}`}
      {...attributes}
      {...listeners}
    >
      <GripVertical className="mr-2 h-5 w-5 text-gray-400" />
      <div>
        <p className="font-medium text-gray-800">{fact.content}</p>
        <p className="text-sm text-gray-500">Drag to: {fact.category}</p>
      </div>
    </div>
  )
}

interface DragDropFactsProps {
  onComplete: () => void
}

export function DragDropFacts({ onComplete }: DragDropFactsProps) {
  const [facts, setFacts] = useState<Fact[]>([
    { id: "fact1", category: "Distance", content: "3 miles to jog", color: "border-l-4 border-blue-400" },
    { id: "fact2", category: "Time Goal", content: "30 minutes to finish", color: "border-l-4 border-green-400" },
    { id: "fact3", category: "Speed", content: "5 miles per hour", color: "border-l-4 border-purple-400" },
  ])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (active.id !== over.id) {
      setFacts((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        const newOrder = arrayMove(items, oldIndex, newIndex)
        onComplete()
        return newOrder
      })
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={facts.map((fact) => fact.id)}>
        <div>
          {facts.map((fact) => (
            <SortableItem key={fact.id} fact={fact} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
