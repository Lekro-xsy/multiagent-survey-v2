interface MathEquationProps {
  equation: string
  className?: string
}

export function MathEquation({ equation, className = "" }: MathEquationProps) {
  return (
    <div className={`my-2 text-center ${className}`}>
      <span className="text-lg font-medium">$${equation}$$</span>
    </div>
  )
}
