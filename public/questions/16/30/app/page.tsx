import { LearningJourney } from "@/components/learning-journey"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-orange-800">Proportional Reasoning Journey</h1>
        <LearningJourney />
      </div>
    </main>
  )
}
