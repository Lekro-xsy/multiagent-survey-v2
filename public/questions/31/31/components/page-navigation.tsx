import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PageNavigationProps {
  prevHref: string
  nextHref: string
  nextDisabled?: boolean
}

export function PageNavigation({ prevHref, nextHref, nextDisabled = false }: PageNavigationProps) {
  return (
    <div className="flex justify-between w-full max-w-2xl">
      <Link href={prevHref}>
        <Button variant="outline" className="flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
      </Link>

      <Link href={nextHref}>
        <Button className="flex items-center gap-1" disabled={nextDisabled}>
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}
