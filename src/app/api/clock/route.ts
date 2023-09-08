import { NextResponse } from 'next/server';

import { currentTime } from './clock';

export async function GET(request: Request) {
  const time = currentTime();
  return NextResponse.json(time);
}
