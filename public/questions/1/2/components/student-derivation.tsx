"use client"

import { Textarea } from "@/components/ui/textarea"

interface StudentDerivationProps {
  userDerivation: string
  setUserDerivation: (value: string) => void
}

export default function StudentDerivation({ userDerivation, setUserDerivation }: StudentDerivationProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">Write Your Derivation Process!</h1>

      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Show Your Work</h2>
            <p className="mb-4">
              Write down how you calculated the number of students in round 4. You can use multiplication or exponents.
            </p>

            <Textarea
              value={userDerivation}
              onChange={(e) => setUserDerivation(e.target.value)}
              placeholder="Write your derivation here... (e.g., 27 × 3 = 81 or 3⁴ = 81)"
              className="min-h-[150px]"
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Helpful Tips</h2>
            <p className="mb-2">You can express your answer in different ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Using multiplication: 27 × 3 = ?</li>
              <li>Using exponents: 3⁴ = ?</li>
              <li>Explaining in words: "Since each round multiplies by 3, and we're in round 4..."</li>
            </ul>

            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <p className="font-medium">Remember:</p>
              <p>There's no wrong way to explain your thinking! The important thing is to show your reasoning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
