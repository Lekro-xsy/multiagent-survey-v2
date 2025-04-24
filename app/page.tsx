import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Navigation</h1>
      <ul className="list-disc pl-5 space-y-3">
        <li><Link href="/primary" className="text-blue-600 hover:underline">Primary School</Link></li>
        <li><Link href="/secondary" className="text-blue-600 hover:underline">Secondary School</Link></li>
        <li><Link href="/senior-high" className="text-blue-600 hover:underline">Senior High School</Link></li>
        <li><Link href="/feedback" className="text-blue-600 hover:underline">Feedback</Link></li>
      </ul>
    </div>
  );
}