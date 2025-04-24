import { LessonLayout } from "@/components/lesson-layout"
import { CarAnimation } from "@/components/car-animation"

export default function LessonOne() {
  return (
    <LessonLayout title="🚗🛑 Slowing Down Safely" pageNumber={1} totalPages={9}>
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold">The Physics of Braking</h2>
          <p>
            When a car brakes smoothly (constant pressure on the brakes), the car's average speed during the stop is
            half of its original speed.
          </p>
          <p className="font-medium text-lg">
            Suppose a car moving at 42 miles per hour takes 2.5 seconds to brake to a complete stop.
          </p>
          <p className="font-medium text-lg">How many feet does the car travel during that time?</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-md">
          <p className="text-sm text-blue-700">
            Click the "Start Braking!" button below to see the car slow down to a stop. Notice how the car's speed
            decreases uniformly from its initial speed to zero.
          </p>
        </div>

        <CarAnimation initialSpeed={42} brakingTime={2.5} />
      </div>
    </LessonLayout>
  )
}
