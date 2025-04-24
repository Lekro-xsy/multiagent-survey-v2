"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"

interface PageFourProps {
  onNext: () => void
}

export default function PageFour({ onNext }: PageFourProps) {
  const [answer, setAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null)

  const patterns = [
    { id: "doubling", label: "Doubling" },
    { id: "times2", label: "Times 2" },
    { id: "powers2", label: "Powers of 2" },
    { id: "adding", label: "Adding" },
  ]

  const checkAnswer = () => {
    const userAnswer = Number.parseInt(answer)
    if (userAnswer === 32) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">📈 Can You Find the Pattern?</h1>

      <div className="mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Splitting Round</TableHead>
              <TableHead>Number of Logs</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[0, 1, 2, 3, 4, 5].map((round) => (
              <TableRow key={round}>
                <TableCell>{round}</TableCell>
                <TableCell>
                  {round < 5 ? (
                    Math.pow(2, round)
                  ) : (
                    <Input
                      value={answer}
                      onChange={(e) => {
                        setAnswer(e.target.value)
                        setIsCorrect(null)
                      }}
                      className="w-20"
                      placeholder="?"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-green-700 mb-4">What pattern do you see?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {patterns.map((pattern) => (
            <Button
              key={pattern.id}
              variant={selectedPattern === pattern.id ? "default" : "outline"}
              className={selectedPattern === pattern.id ? "bg-green-600" : ""}
              onClick={() => setSelectedPattern(pattern.id)}
            >
              {pattern.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-green-700 mb-4">Guiding Questions:</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>What happens to the number of logs each time?</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Is this adding or multiplying?</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>How would you represent it mathematically?</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <Button onClick={checkAnswer} className="bg-green-700 hover:bg-green-800" disabled={!answer}>
          Check Answer
        </Button>

        {isCorrect !== null && (
          <div className={`flex items-center ${isCorrect ? "text-green-600" : "text-red-600"}`}>
            {isCorrect ? (
              <>
                <Check className="mr-2" />
                <span>Correct! There are 32 logs after 5 rounds.</span>
              </>
            ) : (
              <>
                <X className="mr-2" />
                <span>Not quite. Try again!</span>
              </>
            )}
          </div>
        )}

        <Button variant="outline" onClick={onNext} disabled={!isCorrect}>
          Continue
        </Button>
      </div>
    </div>
  )
}
