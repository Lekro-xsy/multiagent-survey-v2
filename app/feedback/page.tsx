'use client';
import { useState } from 'react';

export default function FeedbackPage() {
  const [choice, setChoice] = useState<string>('');
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!choice) return;
    await fetch('/api/feedback', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ option: choice }) });
    setSent(true);
  };
  if (sent) return <div className="p-8 text-center"><h2 className="text-xl font-semibold">Thank you for your feedback!</h2></div>;
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">How do you rate this website?</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {(['A','B','C','D'] as const).map(opt => (
          <label key={opt} className="flex items-center space-x-2">
            <input type="radio" name="feedback" value={opt} checked={choice===opt} onChange={() => setChoice(opt)} />
            <span>{opt} – {opt==='A'?'Perfect':opt==='B'?'Good':opt==='C'?'Not Bad':'Terrible'}</span>
          </label>
        ))}
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
      </form>
    </div>
  );
}