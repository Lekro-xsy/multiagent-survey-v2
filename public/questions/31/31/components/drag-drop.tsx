"use client"

// This is a simplified mock implementation of react-beautiful-dnd
// In a real application, you would use the actual library

export const DragDropContext = ({ children, onDragEnd }) => {
  return <div className="drag-drop-context">{typeof children === "function" ? children() : children}</div>
}

export const Droppable = ({ children, droppableId }) => {
  return (
    <div className="droppable" data-droppable-id={droppableId}>
      {typeof children === "function"
        ? children({
            innerRef: () => {},
            droppableProps: {
              "data-droppable-id": droppableId,
            },
            placeholder: <div className="placeholder" />,
          })
        : children}
    </div>
  )
}

export const Draggable = ({ children, draggableId, index }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", draggableId)
    e.dataTransfer.effectAllowed = "move"
  }

  return (
    <div
      className="draggable"
      data-draggable-id={draggableId}
      data-index={index}
      draggable={true}
      onDragStart={handleDragStart}
    >
      {typeof children === "function"
        ? children({
            innerRef: () => {},
            draggableProps: {
              "data-draggable-id": draggableId,
              draggable: true,
            },
            dragHandleProps: {
              onDragStart: handleDragStart,
            },
          })
        : children}
    </div>
  )
}
