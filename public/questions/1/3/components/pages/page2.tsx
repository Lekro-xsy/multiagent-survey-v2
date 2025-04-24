"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, RefreshCw, HelpCircle } from "lucide-react"

export default function Page2() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null)
    } else {
      setExpandedCard(index)
    }
  }

  const cards = [
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "📅 Day 10: 2 Leaves",
      description: "The seed grows its initial 2 leaves by day 10. This is our starting point.",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-amber-600" />,
      title: "🔁 Every 10 Days: Number of Leaves Doubles",
      description: "Every 10 days, the number of leaves becomes twice as many. This is exponential growth.",
    },
    {
      icon: <HelpCircle className="h-8 w-8 text-blue-600" />,
      title: "❓ Question: How Many Leaves on Day 60?",
      description:
        "We need to calculate how many leaves the plant will have after 60 days (50 days after our starting point).",
    },
  ]

  return (
    <div className="flex flex-col items-center">
      <motion.h1
        className="text-3xl font-bold text-blue-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🔍 Understanding Each Piece of Information!
      </motion.h1>

      <div className="w-full max-w-2xl space-y-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card
              className={`cursor-pointer transition-all duration-300 ${
                expandedCard === index ? "border-2 border-blue-400" : "hover:border-blue-200"
              }`}
              onClick={() => toggleCard(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-full">{card.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    {expandedCard === index && (
                      <motion.p
                        className="text-gray-600 mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        {card.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 bg-blue-50 p-4 rounded-lg max-w-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-blue-700">Click on each card to see more detailed explanations!</p>
      </motion.div>
    </div>
  )
}
