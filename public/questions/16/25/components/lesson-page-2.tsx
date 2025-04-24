"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion"

interface LessonPage2Props {
  onNext: () => void
  onPrev: () => void
}

export default function LessonPage2({ onNext, onPrev }: LessonPage2Props) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">📏 Their Measurements</h2>
        <p className="text-slate-600 italic">Notice the different levels of precision</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Measurement</TableHead>
              <TableHead className="w-1/3">Value</TableHead>
              <TableHead className="w-1/3">Precision</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Width</TableCell>
              <TableCell className="text-center">
                <span className="text-xl font-semibold text-blue-600">21.25 ft</span>
              </TableCell>
              <TableCell>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">4 significant digits</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Length</TableCell>
              <TableCell className="text-center">
                <span className="text-xl font-semibold text-amber-600">41 ft</span>
              </TableCell>
              <TableCell>
                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">2 significant digits</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </motion.div>

      <div className="bg-slate-100 p-6 rounded-lg max-w-2xl mx-auto">
        <h3 className="font-semibold text-lg mb-3">What are significant digits?</h3>
        <p className="mb-3">
          Significant digits (or figures) are the digits in a number that carry meaningful information about the
          precision of the measurement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="font-medium">
              In <span className="text-blue-600">21.25 ft</span>:
            </p>
            <ul className="list-disc list-inside mt-1 text-sm">
              <li>All 4 digits (2, 1, 2, 5) are significant</li>
              <li>Measured to the nearest 0.01 ft</li>
              <li>High precision measurement</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="font-medium">
              In <span className="text-amber-600">41 ft</span>:
            </p>
            <ul className="list-disc list-inside mt-1 text-sm">
              <li>Only 2 digits (4, 1) are significant</li>
              <li>Measured to the nearest 1 ft</li>
              <li>Lower precision measurement</li>
            </ul>
          </div>
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
        <Button onClick={onNext}>
          Calculate Area
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
            className="ml-2 h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Button>
      </div>
    </div>
  )
}
