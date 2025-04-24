import { LessonLayout } from "@/components/lesson-layout"
import { DragDropFacts } from "@/components/drag-drop-facts"

export default function LessonTwo() {
  const facts = [
    {
      id: "1",
      text: "Initial speed: 42 miles/hour",
      category: null,
    },
    {
      id: "2",
      text: "Braking time: 2.5 seconds",
      category: null,
    },
    {
      id: "3",
      text: "Average speed: half of 42 mph",
      category: null,
    },
    {
      id: "4",
      text: "Distance traveled during braking",
      category: null,
    },
    {
      id: "5",
      text: "Speed must be converted from miles/hour to feet/second",
      category: null,
    },
  ]

  return (
    <LessonLayout title="🧩 What Information Do We Have?" pageNumber={2} totalPages={9}>
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold">Breaking Down the Problem</h2>
          <p>
            Before we solve this problem, let's organize the information we have. Drag each piece of information to the
            appropriate category.
          </p>
        </div>

        <DragDropFacts facts={facts} />
      </div>
    </LessonLayout>
  )
}
