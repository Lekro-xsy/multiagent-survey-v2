"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function Page6() {
  const [step, setStep] = useState(0)

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">🎯 Let's Solve It Together!</h1>

      <div className="mb-8 text-center max-w-xl">
        <p className="text-lg">Let's check the solution step by step.</p>
      </div>

      <div className="w-full max-w-lg space-y-6">
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: step >= 0 ? 1 : 0 }} className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">1</div>
              <div>
                <p className="text-lg font-medium">Start with the formula and substitute values:</p>
                <p className="text-xl mt-2">Perimeter = 2(l + w) = 2(3 + 2)</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: step >= 1 ? 1 : 0 }} className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">2</div>
              <div>
                <p className="text-lg font-medium">Simplify inside the parentheses:</p>
                <p className="text-xl mt-2">= 2(5)</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: step >= 2 ? 1 : 0 }} className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">3</div>
              <div>
                <p className="text-lg font-medium">Multiply:</p>
                <p className="text-xl mt-2">= 10</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 3 ? 1 : 0 }}
              className="p-4 bg-green-100 border border-green-300 rounded-lg flex items-center"
            >
              <CheckCircle2 className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <p className="text-lg font-bold text-green-700">The perimeter is 10 meters!</p>
                <p className="text-sm text-green-600 mt-1">
                  This is how much fencing you would need to go all the way around the garden.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {step < 3 && (
          <Button onClick={nextStep} className="w-full">
            Next Step
          </Button>
        )}

        {step === 3 && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-medium">Reasoning Recap:</p>
            <p className="mt-2">
              The perimeter formula 2(l + w) works because it adds up all four sides of the rectangle: two lengths and
              two widths. By adding the length and width first, then multiplying by 2, we get the same result as adding
              all four sides individually.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
