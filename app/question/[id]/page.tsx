import { notFound } from 'next/navigation';

interface Params { params: { id: string } }
export default function QuestionPage({ params }: Params) {
  const id = Number(params.id);
  if (isNaN(id) || id < 1 || id > 45) notFound();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Question {id}</h1>
      <div className="border rounded overflow-hidden" style={{ height: '80vh' }}>
        <iframe src={`/questions/${id}/index.html`} width="100%" height="100%" frameBorder="0" />
      </div>
    </div>
  );
}