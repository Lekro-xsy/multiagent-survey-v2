import Link from "next/link"
import { ArrowLeft, ArrowRight, Home } from "lucide-react"

import { Button } from "@/components/ui/button"

interface PageNavigationProps {
  currentPage: number
  totalPages: number
}

export function PageNavigation({ currentPage, totalPages }: PageNavigationProps) {
  return (
    <div className="flex items-center justify-between border-t pt-4">
      <div>
        {currentPage > 1 ? (
          <Link href={`/page/${currentPage - 1}`}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
          </Link>
        ) : (
          <Link href="/">
            <Button variant="outline" size="sm">
              <Home className="mr-2 h-4 w-4" /> Home
            </Button>
          </Link>
        )}
      </div>
      <div className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </div>
      <div>
        {currentPage < totalPages ? (
          <Link href={`/page/${currentPage + 1}`}>
            <Button variant="outline" size="sm">
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Link href="/">
            <Button variant="outline" size="sm">
              <Home className="mr-2 h-4 w-4" /> Home
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
