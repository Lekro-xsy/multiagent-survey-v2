"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

export default function Page4() {
  const [showExplanation, setShowExplanation] = useState<number | null>(null)

  const tableData = [
    { days: 0, leaves: 0, explanation: "The seed has just been planted and hasn't sprouted yet." },
    { days: 10, leaves: 2, explanation: "On day 10, the seed has grown 2 leaves. This is our starting point." },
    { days: 20, leaves: 4, explanation: "On day 20, the number of leaves doubles: 2 × 2 = 4 leaves." },
    { days: 30, leaves: 8, explanation: "On day 30, the number of leaves doubles again: 4 × 2 = 8 leaves." },
    { days: 40, leaves: 16, explanation: "On day 40, the number of leaves doubles: 8 × 2 = 16 leaves." },
    { days: 50, leaves: 32, explanation: "On day 50, the number of leaves doubles: 16 × 2 = 32 leaves." },
    { days: 60, leaves: "???", explanation: "How many leaves will there be on day 60? Try to figure it out!" },
  ]

  return (
    <div className="flex flex-col items-center">
      <motion.h1
        className="text-3xl font-bold text-blue-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📊 Using a Table to See the Growth Pattern!
      </motion.h1>

      <motion.div
        className="w-full max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Table className="border rounded-lg overflow-hidden">
          <TableHeader className="bg-blue-50">
            <TableRow>
              <TableHead className="text-center font-bold">Days (Total)</TableHead>
              <TableHead className="text-center font-bold">Number of Leaves</TableHead>
              <TableHead className="text-center font-bold">View Explanation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index} className={index === tableData.length - 1 ? "bg-yellow-50" : ""}>
                <TableCell className="text-center font-medium">Day {row.days}</TableCell>
                <TableCell className="text-center">
                  {index === tableData.length - 1 ? (
                    <span className="text-xl font-bold text-red-500">{row.leaves}</span>
                  ) : (
                    <span>{row.leaves}</span>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowExplanation(showExplanation === index ? null : index)}
                    className="text-blue-600"
                  >
                    <Info className="h-4 w-4 mr-1" />
                    {showExplanation === index ? "Hide" : "Explain"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      {showExplanation !== null && (
        <motion.div
          className="bg-blue-50 p-4 rounded-lg w-full max-w-2xl mb-8"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-blue-800">{tableData[showExplanation].explanation}</p>
        </motion.div>
      )}

      <motion.div
        className="bg-green-50 p-6 rounded-lg max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-green-700 mb-4">What Pattern Do You Notice?</h3>
        <p className="mb-4">Look carefully at the data in the table. Can you discover the growth pattern?</p>
        <ul className="list-disc list-inside space-y-2 text-green-800">
          <li>Every 10 days, the number of leaves becomes how many times the previous amount?</li>
          <li>From day 10 to day 50, how many times has the number of leaves increased?</li>
          <li>Can you predict how many leaves there will be on day 60?</li>
        </ul>
      </motion.div>
    </div>
  )
}
