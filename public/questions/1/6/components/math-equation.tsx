interface MathEquationProps {
  equation: string
}

export default function MathEquation({ equation }: MathEquationProps) {
  return <div className="my-2 rounded bg-white px-2 py-1 font-medium text-indigo-900">{equation}</div>
}
