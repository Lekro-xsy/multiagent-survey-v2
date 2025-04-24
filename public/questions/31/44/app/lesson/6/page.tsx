import { LessonLayout } from "@/components/lesson-layout"
import { SolutionReveal } from "@/components/solution-reveal"
import Image from "next/image"

export default function LessonSix() {
  return (
    <LessonLayout title="🎯 Let's Check!" pageNumber={6} totalPages={9}>
      <div className="space-y-6">
        <p className="text-lg">Let's walk through the complete solution step by step.</p>

        <SolutionReveal />

        <div className="relative w-full h-64 rounded-lg overflow-hidden mt-8">
          <Image
            src="/miami-to-jacksonville-route.png"
            alt="Map showing the route from Miami to Jacksonville"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </LessonLayout>
  )
}
