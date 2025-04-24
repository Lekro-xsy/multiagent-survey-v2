"use client"
import { DndContext, closestCenter } from "@dnd-kit/core"
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical } from "lucide-react"

import { Badge } from "@/components/ui/badge"

interface SortableItemProps {
  id: string
  content: string
  category: string
}

export const SortableItem = ({ id, content, category }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} className="mb-2 flex items-center rounded-md border bg-card p-3 text-sm">
      <div {...attributes} {...listeners} className="mr-2 cursor-grab">
        <GripVertical className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="flex-1">{content}</div>
      <Badge variant="outline">{category}</Badge>
    </div>
  )
}

interface DragAndDropProps {
  items: SortableItemProps[]
  onReorder: (items: SortableItemProps[]) => void
}

export function DragAndDrop({ items, onReorder }: DragAndDropProps) {
  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id)
      const newIndex = items.findIndex((item) => item.id === over.id)

      onReorder(arrayMove(items, oldIndex, newIndex))
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableItem key={item.id} id={item.id} content={item.content} category={item.category} />
        ))}
      </SortableContext>
    </DndContext>
  )
}
