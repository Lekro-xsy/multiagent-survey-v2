import { LessonLayout } from "@/components/lesson-layout"
import { UnitConversion } from "@/components/unit-conversion"

export default function LessonFour() {
  return (
    <LessonLayout title="🧮 Building the Distance Equation" pageNumber={4} totalPages={9}>
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold">Setting Up the Mathematical Model</h2>
          <p>To solve this problem, we need to follow these steps:</p>
          <ol>
            <li>Find the average speed during braking</li>
            <li>Convert the average speed from miles per hour to feet per second</li>
            <li>Calculate the distance using the formula: Distance = Average Speed × Time</li>
          </ol>
        </div>

        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="font-semibold">Step 1: Find the average speed</h3>
          <p className="mt-1">With uniform deceleration, the average speed is half of the initial speed:</p>
          <div className="mt-2 p-2 bg-white rounded border border-blue-200">
            <p className="text-center font-medium">Average Speed = 42 ÷ 2 = 21 miles/hour</p>
          </div>
        </div>

        <UnitConversion initialSpeed={42} />
      </div>
    </LessonLayout>
  )
}
