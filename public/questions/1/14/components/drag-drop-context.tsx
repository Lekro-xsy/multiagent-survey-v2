"use client"

import type React from "react"

import type { ReactNode } from "react"

// Define types
export interface DraggableProvided {
  draggableProps: any
  dragHandleProps: any
  innerRef: (element: HTMLElement | null) => void
}

export interface DroppableProvided {
  droppableProps: any
  innerRef: (element: HTMLElement | null) => void
  placeholder: ReactNode
}

export interface DraggableRenderProps {
  provided: DraggableProvided
  snapshot: any
}

export interface DroppableRenderProps {
  provided: DroppableProvided
  snapshot: any
}

export interface DropResult {
  draggableId: string
  type: string
  source: {
    droppableId: string
    index: number
  }
  destination?: {
    droppableId: string
    index: number
  }
}

interface DragDropContextProps {
  onDragEnd: (result: DropResult) => void
  children: ReactNode
}

interface DroppableProps {
  droppableId: string
  children: (provided: DroppableProvided) => ReactNode
}

interface DraggableProps {
  draggableId: string
  index: number
  children: (provided: DraggableProvided) => ReactNode
}

// Create a simple implementation for educational purposes
export function DragDropContext({ onDragEnd, children }: DragDropContextProps) {
  return <>{children}</>
}

export function Droppable({ droppableId, children }: DroppableProps) {
  const provided: DroppableProvided = {
    droppableProps: {
      "data-droppable-id": droppableId,
    },
    innerRef: () => {},
    placeholder: null,
  }

  return <>{children(provided)}</>
}

export function Draggable({ draggableId, index, children }: DraggableProps) {
  const provided: DraggableProvided = {
    draggableProps: {
      "data-draggable-id": draggableId,
      "data-index": index,
      draggable: true,
      onDragStart: (e: React.DragEvent) => {
        e.dataTransfer.setData("text/plain", JSON.stringify({ id: draggableId, index }))
      },
      onDragEnd: () => {},
    },
    dragHandleProps: {},
    innerRef: () => {},
  }

  return <>{children(provided)}</>
}
