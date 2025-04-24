"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PatternPage() {
  const [currentLevel, setCurrentLevel] = useState(0)
  const levels = ["Dim", "Illuminated", "Radiant", "Dazzling"]

  const handleNextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">How Does Brightness Change?</h1>

            <div className="w-full max-w-3xl mb-12">
              <div className="flex flex-col items-center">
                <div className="relative w-full h-64 mb-8">
                  {levels.map((level, index) => {
                    const isVisible = index <= currentLevel
                    const width = isVisible ? Math.pow(9, index) * 10 : 0
                    const maxWidth = Math.min(width, 800)

                    return (
                      <div key={level} className="mb-8">
                        <div className="flex items-center mb-2">
                          <span className="font-medium w-24 text-right mr-4">{level}</span>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: isVisible ? maxWidth : 0 }}
                            transition={{ duration: 1 }}
                            className="h-12 bg-yellow-400 rounded-md"
                          />
                        </div>
                        {index < currentLevel && (
                          <div className="flex justify-center">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-800 font-bold">
                              ×9
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {currentLevel < levels.length - 1 ? (
                  <Button onClick={handleNextLevel} size="lg" className="mt-4">
                    Show Next Level
                  </Button>
                ) : (
                  <div className="p-4 bg-green-100 rounded-lg border border-green-300 mt-4">
                    <p className="text-lg font-medium text-green-800">
                      Each level is 9 times brighter than the previous one!
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-between w-full max-w-xl">
              <Link href="/problem">
                <Button variant="outline">Previous</Button>
              </Link>
              <Link href="/model">
                <Button disabled={currentLevel < levels.length - 1}>Next: Build a Model</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
