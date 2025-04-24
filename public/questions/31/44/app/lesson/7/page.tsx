import { LessonLayout } from "@/components/lesson-layout"
import { TransferProblem } from "@/components/transfer-problem"

export default function LessonSeven() {
  const scenario = `Samantha left Orlando at 7:00 A.M. and arrived in Savannah at 2:00 P.M.
She had a 1-hour lunch break and two 15-minute stops.
Her average driving speed was 55 miles per hour.
How far did she drive?`

  return (
    <LessonLayout title="🔄 Another Highway Trip!" pageNumber={7} totalPages={9}>
      <div className="space-y-6">
        <p className="text-lg">
          Now let's apply what we've learned to a similar problem. Use the same approach to solve this new scenario.
        </p>

        <TransferProblem scenario={scenario} correctDrivingTime="5.5" correctDistance="302.5" />

        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="font-medium">Solution approach:</p>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li>Calculate total trip time (7:00 A.M. to 2:00 P.M. = 7 hours)</li>
            <li>Calculate total stop time (1 hour + 2 × 15 minutes = 1.5 hours)</li>
            <li>Calculate driving time (7 - 1.5 = 5.5 hours)</li>
            <li>Calculate distance (55 mph × 5.5 hours = 302.5 miles)</li>
          </ol>
        </div>
      </div>
    </LessonLayout>
  )
}
