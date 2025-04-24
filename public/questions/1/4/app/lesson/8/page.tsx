import { LessonLayout } from "@/components/lesson-layout"
import { DistanceCalculator } from "@/components/distance-calculator"

export default function LessonEight() {
  return (
    <LessonLayout title="🚀 Same Math, Different Scene!" pageNumber={8} totalPages={9}>
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold">Far Transfer Problem</h2>
          <p className="font-medium text-lg">
            A train moving at 30 miles/hour applies brakes and uniformly stops in 5 seconds. How many feet did the train
            travel during the braking?
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="font-semibold">Your Turn</h3>
          <p className="mt-2">
            Apply the same modeling approach we used for cars to solve this train problem. Remember that the physics
            principles remain the same regardless of the vehicle.
          </p>
        </div>

        <div className="bg-amber-50 p-4 rounded-md">
          <h3 className="font-semibold">Work Space</h3>
          <div className="mt-2 space-y-2">
            <p>Step 1: Calculate the average speed</p>
            <p>Step 2: Convert to feet/second</p>
            <p>Step 3: Calculate the distance</p>
          </div>
        </div>

        <DistanceCalculator averageSpeed={22} brakingTime={5} />
      </div>
    </LessonLayout>
  )
}
