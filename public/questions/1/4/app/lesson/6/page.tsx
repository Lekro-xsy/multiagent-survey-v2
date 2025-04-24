import { LessonLayout } from "@/components/lesson-layout"
import { CarAnimation } from "@/components/car-animation"

export default function LessonSix() {
  return (
    <LessonLayout title="🎯 Check Your Work!" pageNumber={6} totalPages={9}>
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold">Solution Walkthrough</h2>

          <h3>Step 1: Find the average speed</h3>
          <p>With uniform deceleration, the average speed is half of the initial speed:</p>
          <p className="font-medium">Average Speed = 42 ÷ 2 = 21 miles/hour</p>

          <h3>Step 2: Convert to feet per second</h3>
          <p>We need to convert 21 miles/hour to feet/second:</p>
          <p className="font-medium">
            21 miles/hour × (5280 feet / 1 mile) × (1 hour / 3600 seconds) = 30.8 feet/second
          </p>

          <h3>Step 3: Calculate the distance</h3>
          <p>Using the formula Distance = Average Speed × Time:</p>
          <p className="font-medium">Distance = 30.8 feet/second × 2.5 seconds = 77 feet</p>

          <div className="bg-green-100 p-4 rounded-md mt-4">
            <h3 className="font-semibold text-green-800">Final Answer</h3>
            <p className="text-green-700 font-medium">The car traveled 77 feet while braking.</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="font-medium mb-2">Visual Recap:</p>
          <CarAnimation initialSpeed={42} brakingTime={2.5} distanceTraveled={77} />
        </div>
      </div>
    </LessonLayout>
  )
}
