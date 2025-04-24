import { LessonLayout } from "@/components/lesson-layout"
import { DragDropFacts } from "@/components/drag-drop-facts"

export default function LessonTwo() {
  return (
    <LessonLayout title="🧩 What Do We Know?" pageNumber={2} totalPages={9}>
      <div className="space-y-6">
        <p className="text-lg">
          Let's organize what we know about Roberto's trip. Drag each fact into the appropriate category.
        </p>

        <DragDropFacts />

        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="font-medium">Tip:</p>
          <p>
            When solving distance problems, it's important to separate information about travel time from information
            about stops.
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}
