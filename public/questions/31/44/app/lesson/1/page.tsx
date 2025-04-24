import Image from "next/image"
import { LessonLayout } from "@/components/lesson-layout"
import { Button } from "@/components/ui/button"

export default function LessonOne() {
  return (
    <LessonLayout title="🚗 From Miami to Jacksonville!" pageNumber={1} totalPages={9}>
      <div className="space-y-6">
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <Image
            src="/florida-road-trip-prep.png"
            alt="Roberto loading his car for a road trip"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg">Roberto left Miami at 6:30 A.M. to drive to Jacksonville.</p>
          <p className="text-lg">He stopped for breakfast from 8:00 A.M. to 8:45 A.M. in West Palm Beach.</p>
          <p className="text-lg">He made another 0.5-hour stop for gas and stretching.</p>
          <p className="text-lg">His average speed while driving was 50 miles per hour.</p>
          <p className="text-lg">He arrived in Jacksonville at 2:30 P.M.</p>
          <p className="text-lg font-bold">How far did he drive, to the nearest 10 miles?</p>
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="animate-pulse">
            Start Trip
          </Button>
        </div>
      </div>
    </LessonLayout>
  )
}
