"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Check, Award } from "lucide-react"
import confetti from "canvas-confetti"

interface FinalQuizProps {
  onPrev: () => void
}

export default function FinalQuiz({ onPrev }: FinalQuizProps) {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [showCertificate, setShowCertificate] = useState(false)

  const handleSubmit = () => {
    let newScore = 0

    if (answers.q1 === "2") newScore++
    if (answers.q2 === "honesty") newScore++

    setScore(newScore)
    setSubmitted(true)

    if (newScore === 2) {
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
        setShowCertificate(true)
      }, 1000)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">📚 Final Quiz</h2>
        <p className="text-slate-600 italic">Test your understanding of significant digits</p>
      </div>

      {!showCertificate ? (
        <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold text-lg mb-4">Answer these questions to complete the lesson</h3>

          <div className="space-y-6">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">
                Question 1: If you multiply 5.0 by 3.14159, how many significant digits should the result have?
              </h4>

              <RadioGroup
                value={answers.q1}
                onValueChange={(value) => setAnswers({ ...answers, q1: value })}
                className="space-y-2"
                disabled={submitted}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="q1-option1" />
                  <Label htmlFor="q1-option1">1 significant digit</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2" id="q1-option2" />
                  <Label htmlFor="q1-option2">2 significant digits</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5" id="q1-option3" />
                  <Label htmlFor="q1-option3">5 significant digits</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="6" id="q1-option4" />
                  <Label htmlFor="q1-option4">6 significant digits</Label>
                </div>
              </RadioGroup>

              {submitted && (
                <div
                  className={`mt-3 p-3 ${answers.q1 === "2" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} rounded-lg`}
                >
                  {answers.q1 === "2" ? (
                    <div className="flex items-center">
                      <Check className="h-5 w-5 mr-2" />
                      <span>
                        Correct! 5.0 has 2 significant digits, which is fewer than 3.14159's 6 significant digits.
                      </span>
                    </div>
                  ) : (
                    <div>
                      <p className="font-medium">The correct answer is 2 significant digits.</p>
                      <p className="mt-1">
                        5.0 has 2 significant digits, and 3.14159 has 6 significant digits. The result should match the
                        measurement with the fewest significant digits.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">
                Question 2: Why is the number of significant digits in your final answer important?
              </h4>

              <RadioGroup
                value={answers.q2}
                onValueChange={(value) => setAnswers({ ...answers, q2: value })}
                className="space-y-2"
                disabled={submitted}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="appearance" id="q2-option1" />
                  <Label htmlFor="q2-option1">To make calculations look more professional</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="honesty" id="q2-option2" />
                  <Label htmlFor="q2-option2">To honestly represent the precision of your measurements</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="simplicity" id="q2-option3" />
                  <Label htmlFor="q2-option3">To make calculations simpler</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="tradition" id="q2-option4" />
                  <Label htmlFor="q2-option4">It's just a traditional rule in mathematics</Label>
                </div>
              </RadioGroup>

              {submitted && (
                <div
                  className={`mt-3 p-3 ${answers.q2 === "honesty" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} rounded-lg`}
                >
                  {answers.q2 === "honesty" ? (
                    <div className="flex items-center">
                      <Check className="h-5 w-5 mr-2" />
                      <span>
                        Correct! Using the proper number of significant digits ensures you don't claim more precision
                        than your measurements actually have.
                      </span>
                    </div>
                  ) : (
                    <div>
                      <p className="font-medium">
                        The correct answer is to honestly represent the precision of your measurements.
                      </p>
                      <p className="mt-1">
                        Reporting too many significant digits gives a false impression of precision that isn't supported
                        by your actual measurements.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={onPrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              Previous
            </Button>

            {!submitted ? (
              <Button onClick={handleSubmit} disabled={!answers.q1 || !answers.q2}>
                Submit Answers
              </Button>
            ) : score === 2 ? (
              <Button onClick={() => setShowCertificate(true)} className="bg-green-600 hover:bg-green-700">
                <Award className="mr-2 h-4 w-4" />
                View Certificate
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setAnswers({ q1: "", q2: "" })
                  setSubmitted(false)
                }}
              >
                Try Again
              </Button>
            )}
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-8 max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <Award className="h-16 w-16 text-yellow-500" />
          </div>

          <h3 className="text-2xl font-bold text-blue-800 mb-2">Certificate of Achievement</h3>
          <p className="text-lg text-slate-700 mb-6">This certifies that you have successfully completed the</p>

          <div className="text-3xl font-bold text-purple-800 mb-6">Significant Digits Mastery Course</div>

          <p className="text-lg text-slate-700 mb-8">
            You've demonstrated understanding of how to properly apply significant digits in calculations and
            measurements.
          </p>

          <div className="flex justify-center">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              size="lg"
              onClick={() => window.print()}
            >
              Print Certificate
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
