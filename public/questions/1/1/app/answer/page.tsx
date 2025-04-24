"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function AnswerPage() {
  const [step, setStep] = useState(0)
  const steps = [
    "Radiant is 9 times brighter than Illuminated.",
    "Dazzling is 9 times brighter than Radiant.",
    "So Dazzling is 9 × 9 = 81 times brighter than Illuminated!",
  ]

  const nextStep = () => {
    if (step < steps.length) {
      setStep(step + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Let's See the Answer!</h1>

            <div className="w-full max-w-2xl mb-12">
              <div className="space-y-8">
                {steps.map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index <= step ? 1 : 0,
                      y: index <= step ? 0 : 20,
                    }}
                    transition={{ duration: 0.5 }}
                    className="p-6 bg-white rounded-lg shadow-md"
                  >
                    <p className="text-xl">{text}</p>
                  </motion.div>
                ))}
              </div>

              {step < steps.length && (
                <Button onClick={nextStep} className="mt-8">
                  Next Step
                </Button>
              )}

              {step === steps.length && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="mt-8 p-6 bg-yellow-100 rounded-lg border-2 border-yellow-400 flex flex-col items-center"
                >
                  <Sparkles className="h-12 w-12 text-yellow-500 mb-2" />
                  <p className="text-xl font-bold text-yellow-800">
                    Congratulations! You've learned how to model exponential growth!
                  </p>
                </motion.div>
              )}
            </div>

            <div className="mt-8 flex justify-between w-full max-w-xl">
              <Link href="/calculate">
                <Button variant="outline">Previous</Button>
              </Link>
              <Link href="/similar">
                <Button disabled={step < steps.length}>Next: Try a Similar Problem</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
