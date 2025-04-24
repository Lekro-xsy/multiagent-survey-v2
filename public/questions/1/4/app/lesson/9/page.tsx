import { LessonLayout } from "@/components/lesson-layout"
import { Quiz } from "@/components/quiz"

export default function LessonNine() {
  const questions = [
    {
      id: "q1",
      question: "What is the average speed if the initial speed is 50 mph?",
      options: ["25 mph", "50 mph", "100 mph", "12.5 mph"],
      correctAnswer: 0,
    },
    {
      id: "q2",
      question: "Uniform braking means the average speed is the same as the initial speed.",
      options: ["True", "False"],
      correctAnswer: 1,
    },
    {
      id: "q3",
      question: "A car brakes from 36 mph to a stop in 3 seconds. How far does it travel?",
      options: ["54 feet", "79 feet", "108 feet", "158 feet"],
      correctAnswer: 1,
    },
  ]

  return (
    <LessonLayout title="📚 Wrap Up and Reflect" pageNumber={9} totalPages={9}>
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold">Key Learning Points</h2>
          <ul>
            <li>When uniform braking occurs, the average speed equals half of the initial speed.</li>
            <li>Always convert units before multiplying in physics problems.</li>
            <li>The formula Distance = Average Speed × Time applies to uniform motion problems.</li>
            <li>The area under a speed-time graph represents the distance traveled.</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="font-semibold">Formula Summary</h3>
          <div className="mt-2 p-2 bg-white rounded border border-blue-200">
            <p className="text-center font-medium">Average Speed = ½ × Initial Speed</p>
            <p className="text-center font-medium mt-2">Distance = Average Speed × Time</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Mini-Quiz</h2>
          <p className="mb-4">Test your understanding with these questions:</p>
          <Quiz questions={questions} />
        </div>
      </div>
    </LessonLayout>
  )
}
