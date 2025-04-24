import { LessonLayout } from "@/components/lesson-layout"
import { DistanceCalculator } from "@/components/distance-calculator"

export default function LessonSeven() {
  return (
    <LessonLayout title="🔄 Another Braking Challenge!" pageNumber={7} totalPages={9}>
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold">Near Transfer Problem</h2>
          <p className="font-medium text-lg">
            A car moving at 60 miles/hour takes 3 seconds to brake smoothly to a stop. How many feet did it travel while
            stopping?
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="font-semibold">Hints</h3>
          <ol className="mt-2 space-y-2">
            <li>1. Calculate the average speed (half of initial speed)</li>
            <li>2. Convert from miles/hour to feet/second</li>
            <li>3. Multiply by the braking time</li>
          </ol>
        </div>

        <div className="bg-amber-50 p-4 rounded-md">
          <h3 className="font-semibold">Solution Steps</h3>
          <div className="mt-2 space-y-2">
            <p>Average speed = 60 ÷ 2 = 30 miles/hour</p>
            <p>Convert to feet/second: 30 × (5280 ÷ 3600) = 44 feet/second</p>
            <p>Now calculate the distance:</p>
          </div>
        </div>

        <DistanceCalculator averageSpeed={44} brakingTime={3} />
      </div>
    </LessonLayout>
  )
}
