// app/api/og/route.js
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  const fontData = await fetch(
    new URL('@public/inter-bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#FFE5D4',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter',
        }}
      >
        <img
          src="/logo.ico"
          width={120}
          height={120}
          style={{ marginBottom: '24px' }}
        />
        <h1 style={{ fontSize: '64px', color: '#5C3A3A', margin: 0 }}>
          Persona Beauty Academy
        </h1>
        <p style={{ fontSize: '28px', color: '#5C3A3A', marginTop: '16px' }}>
          Unlock your career in aesthetics
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );
}
