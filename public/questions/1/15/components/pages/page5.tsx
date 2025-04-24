"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function Page5() {
  const [expression, setExpression] = useState("")
  const [steps, setSteps] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-center text-2xl font-bold text-teal-600">✍️ Your Turn to Solve!</h2>

      <div className="mb-8 max-w-2xl space-y-4 text-center">
        <p className="text-lg text-slate-700">
          Now it&apos;s your turn to solve the problem. Remember, Brandon read 360 words in 12 minutes.
        </p>
        <p className="text-lg font-medium text-teal-600">How many words does Brandon read in 1 minute?</p>
      </div>

      <div className="mb-8 w-full max-w-md space-y-6">
        <div className="space-y-2">
          <label htmlFor="expression" className="block text-sm font-medium text-slate-700">
            Write the division expression:
          </label>
          <Input
            id="expression"
            placeholder="e.g., 360 ÷ 12"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            disabled={submitted}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="steps" className="block text-sm font-medium text-slate-700">
            Show your work step-by-step:
          </label>
          <Textarea
            id="steps"
            placeholder="Explain how you solve this problem..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows={4}
            disabled={submitted}
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!expression || !steps || submitted}
          className="w-full bg-teal-500 hover:bg-teal-600"
        >
          Submit My Solution
        </Button>
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-lg bg-teal-100 p-4 text-center"
        >
          <p className="font-semibold text-teal-700">Great work! Your solution has been submitted.</p>
          <p className="mt-2 text-teal-600">Continue to the next page to see the correct solution and explanation.</p>
        </motion.div>
      )}

      <div className="mt-6 rounded-lg bg-yellow-50 p-4 text-center text-sm text-yellow-700">
        <p>
          <strong>Remember:</strong> Show the calculation, not just the answer!
        </p>
      </div>
    </div>
  )
}
