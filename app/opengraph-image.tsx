import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Manuel Rojo Vivot — UX/UI & Product Designer'

async function loadGoogleFont(weight: 500 | 700, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@${weight}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/)

  if (match) {
    const res = await fetch(match[1])
    if (res.ok) return res.arrayBuffer()
  }

  throw new Error(`No se pudo cargar Plus Jakarta Sans (${weight})`)
}

export default async function OpengraphImage() {
  const name = 'Manuel Rojo Vivot'
  const role = 'UX/UI & Product Designer'

  const [photoBuffer, nameFont, roleFont] = await Promise.all([
    readFile(join(process.cwd(), 'public/images/about-photo.jpg')),
    loadGoogleFont(700, name),
    loadGoogleFont(500, role),
  ])

  const photoSrc = `data:image/png;base64,${photoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          width: 1200,
          height: 630,
          display: 'flex',
          backgroundColor: '#111110',
        }}
      >
        <img
          src={photoSrc}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background:
              'linear-gradient(0deg, rgba(17,17,16,0.92) 0%, rgba(17,17,16,0.6) 42%, rgba(17,17,16,0.15) 68%, rgba(17,17,16,0) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 64,
            bottom: 56,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 700,
              fontSize: 60,
              color: '#F5F4F0',
              letterSpacing: '-0.01em',
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
              fontSize: 28,
              color: '#2DCC8F',
              marginTop: 14,
              letterSpacing: '0.02em',
            }}
          >
            {role}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Plus Jakarta Sans', data: nameFont, weight: 700, style: 'normal' },
        { name: 'Plus Jakarta Sans', data: roleFont, weight: 500, style: 'normal' },
      ],
    }
  )
}
