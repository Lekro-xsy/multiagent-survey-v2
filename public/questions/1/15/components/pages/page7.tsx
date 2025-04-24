"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function Page7() {
  const [answer, setAnswer] = useState("")
  const [expression, setExpression] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const isCorrect = answer === "60" && expression.includes("480") && expression.includes("8")

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-center text-2xl font-bold text-purple-600">🔄 Another Reading Challenge!</h2>

      <div className="mb-8 max-w-2xl space-y-4 text-center">
        <p className="text-lg text-slate-700">Let&apos;s try another similar problem:</p>
        <div className="rounded-lg bg-purple-50 p-4">
          <p className="text-lg font-medium text-purple-700">
            Jessica read 480 words in 8 minutes. How many words does she read in one minute?
          </p>
        </div>
      </div>

      <div className="mb-8 w-full max-w-md space-y-6">
        <div className="space-y-2">
          <label htmlFor="expression" className="block text-sm font-medium text-slate-700">
            Set up the division expression:
          </label>
          <Input
            id="expression"
            placeholder="e.g., 480 ÷ 8"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            disabled={submitted}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="answer" className="block text-sm font-medium text-slate-700">
            What is Jessica&apos;s reading rate in words per minute?
          </label>
          <Input
            id="answer"
            placeholder="Enter your answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={submitted}
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!expression || !answer || submitted}
          className="w-full bg-purple-500 hover:bg-purple-600"
        >
          Check My Answer
        </Button>
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 rounded-lg p-4 text-center ${
            isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {isCorrect ? (
            <>
              <p className="font-semibold">Correct! Jessica reads 60 words per minute.</p>
              <p className="mt-2">You found this by dividing 480 words by 8 minutes: 480 ÷ 8 = 60</p>
            </>
          ) : (
            <>
              <p className="font-semibold">Not quite right. Let&apos;s check your work.</p>
              <p className="mt-2">To find words per minute, divide total words (480) by total minutes (8).</p>
              <p className="mt-1">480 ÷ 8 = 60 words per minute</p>
            </>
          )}
        </motion.div>
      )}

      <div className="mt-6 rounded-lg bg-blue-50 p-4 text-center text-sm text-blue-700">
        <p>
          <strong>Remember:</strong> Unit rate = Total amount ÷ Total units
        </p>
      </div>
    </div>
  )
}
