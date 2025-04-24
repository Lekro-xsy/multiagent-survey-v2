import { LessonLayout } from "@/components/lesson-layout"
import { SpeedTimeGraph } from "@/components/speed-time-graph"

export default function LessonThree() {
  return (
    <LessonLayout title="📈 Understanding Uniform Braking" pageNumber={3} totalPages={9}>
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold">Visualizing Speed and Distance</h2>
          <p>
            When a car brakes with uniform deceleration, its speed decreases linearly from the initial speed to zero, as
            shown in the graph below.
          </p>
        </div>

        <SpeedTimeGraph initialSpeed={42} brakingTime={2.5} showArea={true} />

        <div className="bg-blue-100 p-4 rounded-md">
          <h3 className="font-semibold text-blue-800">Key Concept</h3>
          <p className="text-blue-700">
            With uniform deceleration, the average speed equals half of the initial speed.
          </p>
          <div className="mt-2 p-2 bg-white rounded border border-blue-200">
            <p className="text-center font-medium">Average Speed = ½ × Initial Speed</p>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-md">
          <h3 className="font-semibold text-amber-800">Important Note</h3>
          <p className="text-amber-700">
            The area under the speed-time graph represents the total distance traveled. This is why we can calculate the
            distance by multiplying the average speed by the time.
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}
