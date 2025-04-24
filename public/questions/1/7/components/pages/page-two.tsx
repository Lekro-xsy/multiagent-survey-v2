"use client"

import { useState } from "react"
import { DndContext, closestCenter } from "@dnd-kit/core"
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card } from "@/components/ui/card"

const SortableItem = ({ id, value }) => {
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
      className="mb-2 cursor-grab rounded-md bg-blue-100 p-3 text-center font-medium shadow-sm hover:bg-blue-200"
    >
      Row {id}: {value} cartons
    </div>
  )
}

export default function PageTwo() {
  const [items] = useState(
    Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      value: 25 - i,
    })),
  )

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold text-blue-800">🧩 Organizing the Layers</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-blue-700">Layer Structure</h3>
          <Card className="p-4">
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Bottom row:</span> 25 cartons
              </li>
              <li>
                <span className="font-medium">Next row up:</span> 24 cartons
              </li>
              <li>
                <span className="font-medium">Row above that:</span> 23 cartons
              </li>
              <li>
                <span className="font-medium">...</span>
              </li>
              <li>
                <span className="font-medium">Top row:</span> 1 carton
              </li>
            </ul>

            <div className="mt-4 rounded-lg bg-yellow-50 p-3">
              <p className="font-medium text-yellow-800">Key Concept:</p>
              <p>
                This is a <strong>sum of consecutive integers</strong> from 1 to 25, but in reverse order.
              </p>
            </div>
          </Card>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-blue-700">Drag to Organize</h3>
          <Card className="h-[400px] overflow-y-auto p-4">
            <p className="mb-3 text-sm text-gray-600">Drag the rows to see how they decrease from bottom to top:</p>
            <DndContext collisionDetection={closestCenter}>
              <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
                {items.map((item) => (
                  <SortableItem key={item.id} id={item.id} value={item.value} />
                ))}
              </SortableContext>
            </DndContext>
          </Card>
        </div>
      </div>

      <div className="rounded-lg bg-green-50 p-4">
        <p className="text-center text-lg font-medium text-green-800">
          To find the total number of cartons, we need to add up all the numbers from 1 to 25.
        </p>
      </div>
    </div>
  )
}
