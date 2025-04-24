import { LessonLayout } from "@/components/lesson-layout"
import { TransferProblem } from "@/components/transfer-problem"
import Image from "next/image"

export default function LessonEight() {
  const scenario = `A train departs at 8:00 A.M. and arrives at 4:30 P.M.
It makes two scheduled stops totaling 1 hour.
The train's average speed during travel is 70 miles per hour.
How far did the train travel?`

  return (
    <LessonLayout title="🚀 Same Math, Different Journey!" pageNumber={8} totalPages={9}>
      <div className="space-y-6">
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src="/countryside-express.png"
            alt="Train traveling through countryside"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-lg">
          Let's try a different context that uses the same mathematical structure. This time, we're dealing with a train
          journey instead of a car trip.
        </p>

        <TransferProblem scenario={scenario} correctDrivingTime="7.5" correctDistance="525" />

        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="font-semibold">Key Insight:</p>
          <p>
            The same mathematical model can be applied to many different real-world scenarios. The important thing is to
            identify the correct variables and relationships.
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}
