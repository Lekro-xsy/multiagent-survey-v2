import { LessonLayout } from "@/components/lesson-layout"
import { FormulaBuilder } from "@/components/formula-builder"

export default function LessonFour() {
  const formulaSteps = [
    {
      label: "Total trip time",
      formula: "2:30 P.M. - 6:30 A.M. = ? hours",
      answer: "8",
      hint: "Count the hours from 6:30 A.M. to 2:30 P.M.",
    },
    {
      label: "Total stop time",
      formula: "0.75 + 0.5 = ? hours",
      answer: "1.25",
      hint: "Add the breakfast stop (0.75 hour) and the gas/stretching stop (0.5 hour).",
    },
    {
      label: "Actual driving time",
      formula: "8 - 1.25 = ? hours",
      answer: "6.75",
      hint: "Subtract the total stop time from the total trip time.",
    },
    {
      label: "Distance",
      formula: "50 × 6.75 = ? miles",
      answer: "337.5",
      hint: "Multiply the speed (50 mph) by the driving time (6.75 hours).",
    },
  ]

  return (
    <LessonLayout title="🧮 Building the Driving Distance Equation" pageNumber={4} totalPages={9}>
      <div className="space-y-6">
        <p className="text-lg">
          Now let's set up the mathematical model to solve for the distance Roberto drove. Fill in the missing values in
          each step.
        </p>

        <FormulaBuilder steps={formulaSteps} />

        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="font-medium">Remember:</p>
          <p>
            To find distance, we use the formula: <span className="font-mono">Distance = Speed × Time</span>
          </p>
          <p>But we must use the correct driving time, not the total trip time.</p>
        </div>
      </div>
    </LessonLayout>
  )
}
