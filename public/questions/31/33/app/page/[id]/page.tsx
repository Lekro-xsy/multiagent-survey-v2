import { notFound } from "next/navigation"

import Page1 from "@/components/pages/page-1"
import Page2 from "@/components/pages/page-2"
import Page3 from "@/components/pages/page-3"
import Page4 from "@/components/pages/page-4"
import Page5 from "@/components/pages/page-5"
import Page6 from "@/components/pages/page-6"
import Page7 from "@/components/pages/page-7"
import Page8 from "@/components/pages/page-8"
import Page9 from "@/components/pages/page-9"
import Page10 from "@/components/pages/page-10"
import { PageNavigation } from "@/components/page-navigation"

export default function PageContent({ params }: { params: { id: string } }) {
  const pageId = Number.parseInt(params.id)

  if (isNaN(pageId) || pageId < 1 || pageId > 10) {
    notFound()
  }

  const PageComponent = {
    1: Page1,
    2: Page2,
    3: Page3,
    4: Page4,
    5: Page5,
    6: Page6,
    7: Page7,
    8: Page8,
    9: Page9,
    10: Page10,
  }[pageId]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-teal-500 to-emerald-500 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-white">Math in Context: Shipping Costs</h1>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <PageComponent />
          <div className="mt-8">
            <PageNavigation currentPage={pageId} totalPages={10} />
          </div>
        </div>
      </main>

      <footer className="border-t bg-gray-50 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          Interactive Math Learning Module © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}
