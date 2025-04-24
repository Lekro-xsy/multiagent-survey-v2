"use client"

import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface BarChartProps {
  firstYearHours: number
  onSecondYearChange: (value: number) => void
}

export function BarChart({ firstYearHours, onSecondYearChange }: BarChartProps) {
  const [secondYearHours, setSecondYearHours] = useState(firstYearHours)

  const handleChange = (value: number[]) => {
    setSecondYearHours(value[0])
    onSecondYearChange(value[0])
  }

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <Label>Adjust the second-year study time:</Label>
        <Slider
          value={[secondYearHours]}
          min={firstYearHours}
          max={firstYearHours + 4}
          step={1}
          onValueChange={handleChange}
        />
        <div className="text-center text-sm">Second year: {secondYearHours} hours</div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-20 text-right text-sm font-medium">Year 1:</div>
          <div className="h-8 w-full max-w-[220px] rounded-md bg-blue-500"></div>
          <div className="text-sm">{firstYearHours} hours</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-20 text-right text-sm font-medium">Year 2:</div>
          <div
            className={`h-8 rounded-md ${secondYearHours === firstYearHours + 2 ? "bg-green-500" : "bg-orange-400"}`}
            style={{ width: `${(secondYearHours / firstYearHours) * 220}px` }}
          ></div>
          <div className="text-sm">{secondYearHours} hours</div>
        </div>
      </div>

      {secondYearHours === firstYearHours + 2 ? (
        <div className="rounded-lg bg-green-50 p-4 text-green-800">
          <p className="font-medium">Correct!</p>
          <p>
            The second year is 2 hours more than the first year: {firstYearHours} + 2 = {firstYearHours + 2} hours
          </p>
        </div>
      ) : (
        <div className="rounded-lg bg-orange-50 p-4 text-orange-800">
          <p className="font-medium">Not quite right!</p>
          <p>Adjust the slider to show 2 hours more than the first year.</p>
        </div>
      )}
    </div>
  )
}
