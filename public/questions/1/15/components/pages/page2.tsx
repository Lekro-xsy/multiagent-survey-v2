"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Page2() {
  const [droppedGiven, setDroppedGiven] = useState<string[]>([])
  const [droppedQuestion, setDroppedQuestion] = useState<string[]>([])

  const infoCards = [
    { id: "words", text: "📖 Total words: 360", type: "given" },
    { id: "time", text: "⏱️ Total time: 12 minutes", type: "given" },
    { id: "goal", text: "❓ Goal: Find words per minute (unit rate)", type: "question" },
  ]

  const handleDrop = (item: any, zone: "given" | "question") => {
    if (zone === "given") {
      if (!droppedGiven.includes(item.id)) {
        setDroppedGiven([...droppedGiven, item.id])
      }
    } else {
      if (!droppedQuestion.includes(item.id)) {
        setDroppedQuestion([...droppedQuestion, item.id])
      }
    }
  }

  const isCardDropped = (id: string) => {
    return droppedGiven.includes(id) || droppedQuestion.includes(id)
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-center text-2xl font-bold text-green-600">🧩 Let&apos;s Understand the Problem!</h2>

      <div className="mb-8 grid w-full gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-lg font-semibold text-slate-700">Information Cards</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {infoCards.map((card) => (
              <motion.div
                key={card.id}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                className={`cursor-grab rounded-lg border-2 border-dashed bg-white p-3 shadow-sm transition-opacity ${
                  isCardDropped(card.id) ? "opacity-50" : "opacity-100"
                }`}
                onDragEnd={(_, info) => {
                  // Simple detection of which zone it's closer to
                  if (info.offset.x < 0 && card.type === "given") {
                    handleDrop(card, "given")
                  } else if (info.offset.x > 0 && card.type === "question") {
                    handleDrop(card, "question")
                  }
                }}
              >
                <p className="text-sm font-medium">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div>
            <h3 className="mb-2 text-center text-lg font-semibold text-green-600">Given Information</h3>
            <Card className="flex min-h-24 flex-col items-center justify-center border-2 border-dashed border-green-200 p-4">
              {droppedGiven.map((id) => {
                const card = infoCards.find((c) => c.id === id)
                return (
                  <div key={id} className="mb-2 w-full rounded bg-green-50 p-2 text-center">
                    <p>{card?.text}</p>
                  </div>
                )
              })}
              {droppedGiven.length === 0 && (
                <p className="text-center text-sm text-slate-400">Drag the given information here</p>
              )}
            </Card>
          </div>

          <div>
            <h3 className="mb-2 text-center text-lg font-semibold text-blue-600">Question to Answer</h3>
            <Card className="flex min-h-24 flex-col items-center justify-center border-2 border-dashed border-blue-200 p-4">
              {droppedQuestion.map((id) => {
                const card = infoCards.find((c) => c.id === id)
                return (
                  <div key={id} className="mb-2 w-full rounded bg-blue-50 p-2 text-center">
                    <p>{card?.text}</p>
                  </div>
                )
              })}
              {droppedQuestion.length === 0 && (
                <p className="text-center text-sm text-slate-400">Drag the question here</p>
              )}
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-yellow-50 p-4 text-center text-sm text-yellow-700">
        <p>Organizing what we know and what we need to find helps us solve the problem!</p>
      </div>
    </div>
  )
}
