import { cookies } from 'next/headers';

export async function POST(req) {
  const { consent } = await req.json();

  //(httpOnly: false)
  cookies().set('consent', consent, {
    httpOnly: false,
    secure: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 год
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
