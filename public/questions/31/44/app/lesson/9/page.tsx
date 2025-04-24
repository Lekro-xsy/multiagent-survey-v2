import { LessonLayout } from "@/components/lesson-layout"
import { MiniQuiz } from "@/components/mini-quiz"

export default function LessonNine() {
  return (
    <LessonLayout title="📚 Review and Master!" pageNumber={9} totalPages={9}>
      <div className="space-y-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Key Learning Points:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Break trips into total time vs. non-driving time.</li>
            <li>Use the correct driving time for distance calculations.</li>
            <li>Apply rounding correctly when required.</li>
            <li>Use the formula: Distance = Speed × Time</li>
          </ul>
        </div>

        <p className="text-lg font-medium">Let's check your understanding with a quick quiz:</p>

        <MiniQuiz />

        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-center">
            Congratulations on completing this lesson! You now have the skills to solve distance-time-speed problems in
            various contexts.
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}
