"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

export default function Page2() {
  const [items, setItems] = useState({
    all: [
      { id: "speed", content: "Speed = 25 miles per hour" },
      { id: "distance", content: "Distance = 50 yards" },
      { id: "time", content: "Time (in seconds)" },
      { id: "car-color", content: "Car color = red" },
      { id: "track-length", content: "Track length = 50 yards" },
    ],
    known: [],
    unknown: [],
  })

  const handleDragEnd = (result: any) => {
    const { source, destination } = result

    if (!destination) return

    if (source.droppableId === destination.droppableId) {
      // Reordering within the same list
      const list = Array.from(items[source.droppableId as keyof typeof items] as any[])
      const [removed] = list.splice(source.index, 1)
      list.splice(destination.index, 0, removed)

      setItems({
        ...items,
        [source.droppableId]: list,
      })
    } else {
      // Moving between lists
      const sourceList = Array.from(items[source.droppableId as keyof typeof items] as any[])
      const destList = Array.from(items[destination.droppableId as keyof typeof items] as any[])
      const [removed] = sourceList.splice(source.index, 1)

      destList.splice(destination.index, 0, removed)

      setItems({
        ...items,
        [source.droppableId]: sourceList,
        [destination.droppableId]: destList,
      })
    }
  }

  const checkAnswers = () => {
    // Correct answers
    const correctKnown = ["speed", "distance"]
    const correctUnknown = ["time"]

    const knownIds = items.known.map((item) => item.id)
    const unknownIds = items.unknown.map((item) => item.id)

    const knownCorrect =
      correctKnown.every((id) => knownIds.includes(id)) &&
      knownIds.every((id) => correctKnown.includes(id) || id === "track-length")

    const unknownCorrect =
      correctUnknown.every((id) => unknownIds.includes(id)) && unknownIds.every((id) => correctUnknown.includes(id))

    return knownCorrect && unknownCorrect
  }

  return (
    <PageLayout pageNumber={2} totalPages={9} title="🧩 Key Information">
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6 space-y-4">
            <h2 className="text-xl font-semibold">Important Facts:</h2>
            <div className="rounded-lg bg-amber-50 p-4">
              <p className="font-medium text-amber-800">Drag each piece of information to the correct category:</p>
              <ul className="ml-6 mt-2 list-disc space-y-1 text-amber-800">
                <li>What information do we know?</li>
                <li>What do we need to find?</li>
              </ul>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
              <div className="grid gap-4 md:grid-cols-3">
                {/* Source list */}
                <div>
                  <h3 className="mb-2 font-medium">Information:</h3>
                  <Droppable droppableId="all">
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="min-h-[100px] rounded-lg border border-dashed border-gray-300 p-4"
                      >
                        {items.all.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="mb-2 rounded bg-white p-2 shadow"
                              >
                                {item.content}
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>

                {/* Known list */}
                <div>
                  <h3 className="mb-2 font-medium">Known:</h3>
                  <Droppable droppableId="known">
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="min-h-[100px] rounded-lg border border-dashed border-green-300 bg-green-50 p-4"
                      >
                        {items.known.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="mb-2 rounded bg-white p-2 shadow"
                              >
                                {item.content}
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>

                {/* Unknown list */}
                <div>
                  <h3 className="mb-2 font-medium">Need to Find:</h3>
                  <Droppable droppableId="unknown">
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="min-h-[100px] rounded-lg border border-dashed border-blue-300 bg-blue-50 p-4"
                      >
                        {items.unknown.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="mb-2 rounded bg-white p-2 shadow"
                              >
                                {item.content}
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              </div>
            </DragDropContext>

            <div className="mt-8 rounded-lg bg-yellow-50 p-4">
              <h3 className="font-medium text-yellow-800">Important Tip:</h3>
              <p className="mt-2 text-yellow-800">Watch out for unit conversion: miles vs. yards vs. seconds!</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
