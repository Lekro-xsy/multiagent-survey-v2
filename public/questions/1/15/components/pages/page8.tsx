"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function Page8() {
  const [answer, setAnswer] = useState("")
  const [explanation, setExplanation] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const isCorrect = answer === "30" || answer === "30 parts per minute"

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-center text-2xl font-bold text-orange-600">🚀 A Whole Different Story!</h2>

      <div className="mb-8 max-w-2xl space-y-4 text-center">
        <p className="text-lg text-slate-700">Now let&apos;s try a completely different scenario:</p>
        <div className="rounded-lg bg-orange-50 p-4">
          <p className="text-lg font-medium text-orange-700">
            A machine produces 720 parts in 24 minutes. How many parts does it produce per minute?
          </p>
        </div>
      </div>

      <div className="mb-8 w-full max-w-md space-y-6">
        <div className="space-y-2">
          <label htmlFor="answer" className="block text-sm font-medium text-slate-700">
            What is the production rate in parts per minute?
          </label>
          <Input
            id="answer"
            placeholder="Enter your answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={submitted}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="explanation" className="block text-sm font-medium text-slate-700">
            Explain how you found your answer:
          </label>
          <Textarea
            id="explanation"
            placeholder="I found the answer by..."
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            rows={4}
            disabled={submitted}
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!answer || !explanation || submitted}
          className="w-full bg-orange-500 hover:bg-orange-600"
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
              <p className="font-semibold">Excellent! The machine produces 30 parts per minute.</p>
              <p className="mt-2">
                You recognized that this is still a unit rate problem, even though it&apos;s about machines instead of
                reading!
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold">Not quite right. Let&apos;s check your work.</p>
              <p className="mt-2">To find parts per minute, divide total parts (720) by total minutes (24).</p>
              <p className="mt-1">720 ÷ 24 = 30 parts per minute</p>
            </>
          )}
        </motion.div>
      )}

      <div className="mt-6 rounded-lg bg-blue-50 p-4 text-center text-sm text-blue-700">
        <p>
          <strong>Key insight:</strong> Unit rate problems follow the same pattern, even when the context changes!
        </p>
      </div>
    </div>
  )
}
