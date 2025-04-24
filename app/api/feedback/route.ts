import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'data', 'feedback.json');

function initData() {
  try {
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  } catch {
    fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
    const init = { A: 0, B: 0, C: 0, D: 0 };
    fs.writeFileSync(DATA_PATH, JSON.stringify(init, null, 2));
    return init;
  }
}

export async function POST(request: Request) {
  const { option } = await request.json();
  if (!['A','B','C','D'].includes(option)) return NextResponse.json({ error: 'Invalid option' }, { status: 400 });
  const data = initData(); data[option]++;
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json(initData());
}