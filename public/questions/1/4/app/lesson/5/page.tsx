import { LessonLayout } from "@/components/lesson-layout"
import { DistanceCalculator } from "@/components/distance-calculator"

export default function LessonFive() {
  return (
    <LessonLayout title="✍️ Time to Solve!" pageNumber={5} totalPages={9}>
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold">Calculate the Distance</h2>
          <p>
            Now that we have converted the average speed to feet per second, we can calculate the distance traveled
            during braking.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="font-semibold">Step 3: Calculate the distance</h3>
          <p className="mt-1">Use the formula: Distance = Average Speed × Time</p>
          <div className="mt-2 p-2 bg-white rounded border border-blue-200">
            <p className="font-medium">Average speed = 21 miles/hour = 30.8 feet/second</p>
            <p className="font-medium">Time = 2.5 seconds</p>
          </div>
        </div>

        <DistanceCalculator averageSpeed={30.8} brakingTime={2.5} />
      </div>
    </LessonLayout>
  )
}
