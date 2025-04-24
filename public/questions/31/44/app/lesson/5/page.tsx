import { LessonLayout } from "@/components/lesson-layout"
import { StudentSolution } from "@/components/student-solution"

export default function LessonFive() {
  return (
    <LessonLayout title="✍️ You Try It!" pageNumber={5} totalPages={9}>
      <div className="space-y-6">
        <p className="text-lg">
          Now it's your turn to solve the problem. Use what you've learned to calculate how far Roberto drove.
        </p>

        <div className="p-4 bg-blue-50 rounded-lg mb-6">
          <p className="font-semibold">Remember the problem:</p>
          <p>
            Roberto left Miami at 6:30 A.M. and arrived in Jacksonville at 2:30 P.M. He had a 45-minute breakfast stop
            and a 30-minute gas/stretching stop. His average driving speed was 50 mph.
          </p>
          <p className="font-semibold mt-2">How far did he drive, to the nearest 10 miles?</p>
        </div>

        <StudentSolution />
      </div>
    </LessonLayout>
  )
}
