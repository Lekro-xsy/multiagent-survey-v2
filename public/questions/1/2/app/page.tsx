"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Introduction from "@/components/introduction"
import GameRules from "@/components/game-rules"
import GrowthAnimation from "@/components/growth-animation"
import MathematicalModeling from "@/components/mathematical-modeling"
import StudentDerivation from "@/components/student-derivation"
import RevealAnswer from "@/components/reveal-answer"
import VariationChallenge from "@/components/variation-challenge"
import TransferChallenge from "@/components/transfer-challenge"
import Summary from "@/components/summary"

export default function PassItAlongGame() {
  const [currentPage, setCurrentPage] = useState(0)
  const [userAnswers, setUserAnswers] = useState({
    fourthRoundAnswer: "",
    derivation: "",
    variationAnswer: "",
    transferAnswer: "",
  })

  const pages = [
    <Introduction key="intro" />,
    <GameRules key="rules" />,
    <GrowthAnimation key="growth" />,
    <MathematicalModeling
      key="modeling"
      userAnswer={userAnswers.fourthRoundAnswer}
      setUserAnswer={(value) => setUserAnswers({ ...userAnswers, fourthRoundAnswer: value })}
    />,
    <StudentDerivation
      key="derivation"
      userDerivation={userAnswers.derivation}
      setUserDerivation={(value) => setUserAnswers({ ...userAnswers, derivation: value })}
    />,
    <RevealAnswer key="answer" userAnswer={userAnswers.fourthRoundAnswer} userDerivation={userAnswers.derivation} />,
    <VariationChallenge
      key="variation"
      userAnswer={userAnswers.variationAnswer}
      setUserAnswer={(value) => setUserAnswers({ ...userAnswers, variationAnswer: value })}
    />,
    <TransferChallenge
      key="transfer"
      userAnswer={userAnswers.transferAnswer}
      setUserAnswer={(value) => setUserAnswers({ ...userAnswers, transferAnswer: value })}
    />,
    <Summary key="summary" userAnswers={userAnswers} />,
  ]

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="mb-6">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-right text-sm text-gray-500 mt-1">
                Page {currentPage + 1} of {pages.length}
              </div>
            </div>

            <div className="min-h-[500px]">{pages[currentPage]}</div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={goToPreviousPage}
                disabled={currentPage === 0}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </Button>

              <Button
                onClick={goToNextPage}
                disabled={currentPage === pages.length - 1}
                className="flex items-center gap-2"
              >
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
