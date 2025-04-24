import { PageContainer } from "@/components/page-container"
import { PageNavigation } from "@/components/page-navigation"

export default function SolutionPage() {
  return (
    <PageContainer title="🎯 Check Your Work!" pageNumber={6} totalPages={9}>
      <div className="flex flex-col items-center">
        <div className="bg-amber-50 p-6 rounded-lg shadow-md max-w-2xl mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Solution Walkthrough:</h2>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">Step 1: Find Farm 2 pecks</h3>
              <div className="flex items-center gap-2 text-lg">
                <span>2 × 17 = 34 pecks</span>
              </div>
              <p className="text-gray-600 mt-2">Farm 2 sells twice as many apples as Farm 1, so we multiply 17 by 2.</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">Step 2: Find total pecks</h3>
              <div className="flex items-center gap-2 text-lg">
                <span>17 + 34 = 51 pecks</span>
              </div>
              <p className="text-gray-600 mt-2">We add the pecks from both farms to find the total.</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">Step 3: Convert to bushels</h3>
              <div className="flex items-center gap-2 text-lg">
                <span>51 ÷ 4 = 12.75 bushels</span>
              </div>
              <p className="text-gray-600 mt-2">Since 1 bushel = 4 pecks, we divide the total pecks by 4.</p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold text-green-700 mb-2">Final Answer:</h3>
              <p className="text-lg font-medium">Together, the two farms sold 12.75 bushels of apples.</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-2xl mb-8">
          <h2 className="text-xl font-bold text-center mb-6">Visual Recap:</h2>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="text-center">
              <div className="flex gap-2 justify-center mb-2">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold">17</span>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold">34</span>
                </div>
              </div>
              <p className="text-sm font-medium">51 Pecks Total</p>
            </div>

            <div className="text-4xl font-bold">→</div>

            <div className="text-center">
              <div className="relative w-24 h-32 bg-amber-100 rounded-lg border-2 border-amber-400 flex items-end justify-center overflow-hidden">
                <div className="absolute bottom-0 w-full h-3/4 bg-red-400"></div>
                <div className="absolute bottom-0 w-full">
                  <div className="h-8 border-t-2 border-dashed border-amber-700 relative">
                    <span className="absolute -top-4 right-2 text-xs font-bold">75%</span>
                  </div>
                  <div className="h-8 border-t-2 border-dashed border-amber-700"></div>
                  <div className="h-8 border-t-2 border-dashed border-amber-700"></div>
                </div>
              </div>
              <p className="text-sm font-medium mt-2">12.75 Bushels</p>
            </div>
          </div>
        </div>

        <PageNavigation prevHref="/lesson/solve" nextHref="/lesson/transfer1" />
      </div>
    </PageContainer>
  )
}
