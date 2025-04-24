"use client"

import { useState, useEffect } from "react"

interface PyramidAnimationProps {
  rows: number
  animated?: boolean
  compact?: boolean
}

export function PyramidAnimation({ rows, animated = false, compact = false }: PyramidAnimationProps) {
  const [currentRow, setCurrentRow] = useState(animated ? 0 : rows)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    if (animated && currentRow < rows) {
      const timer = setTimeout(() => {
        setCurrentRow((prev) => {
          const newRow = prev + 1
          // Update the total count
          setTotalCount((prev) => prev + (rows - newRow + 1))
          return newRow
        })
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [currentRow, rows, animated])

  // Calculate the maximum width needed for the bottom row
  const maxWidth = rows * 20 // 20px per box

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="relative flex flex-col items-center"
        style={{ width: `${maxWidth}px`, height: compact ? `${rows * 15}px` : `${rows * 25}px` }}
      >
        {Array.from({ length: currentRow }).map((_, rowIndex) => {
          const rowNumber = rows - rowIndex
          const boxesInRow = rowNumber

          return (
            <div
              key={rowIndex}
              className="flex justify-center"
              style={{
                position: "absolute",
                bottom: `${rowIndex * (compact ? 15 : 25)}px`,
                width: "100%",
              }}
            >
              {Array.from({ length: boxesInRow }).map((_, boxIndex) => (
                <div
                  key={boxIndex}
                  className="border border-gray-400 bg-red-500"
                  style={{
                    width: compact ? "15px" : "20px",
                    height: compact ? "15px" : "20px",
                    margin: "0 1px",
                  }}
                />
              ))}
            </div>
          )
        })}
      </div>

      {animated && (
        <div className="mt-4 text-center font-medium">
          Rows built: {currentRow} / {rows}
          <br />
          Cartons so far: {totalCount}
        </div>
      )}
    </div>
  )
}
