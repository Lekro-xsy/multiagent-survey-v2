import Link from "next/link"
import { Home, Calculator, BookOpen, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center mr-4 space-x-2">
          <Calculator className="h-6 w-6" />
          <span className="font-bold hidden sm:inline-block">Unit Rate Calculator</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/lesson/1" className="text-sm font-medium transition-colors hover:text-primary">
            Lessons
          </Link>
          <Link href="/practice" className="text-sm font-medium transition-colors hover:text-primary">
            Practice
          </Link>
          <Link href="/calculator" className="text-sm font-medium transition-colors hover:text-primary">
            Calculator
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/lesson/1">
                  <BookOpen className="mr-2 h-4 w-4" />
                  <span>Lessons</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/practice">
                  <BookOpen className="mr-2 h-4 w-4" />
                  <span>Practice</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/calculator">
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>Calculator</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
