import Link from 'next/link';

export default function SeniorHighPage() {
  const questions = Array.from({ length: 15 }, (_, i) => i + 31);
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Senior High School Questions</h1>
      <ul className="list-decimal pl-5 space-y-2">
        {questions.map(id => (
          <li key={id}>
            <Link href={`/question/${id}`} className="text-blue-500 hover:underline">
              Question {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}