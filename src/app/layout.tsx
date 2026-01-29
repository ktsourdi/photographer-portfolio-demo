import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'AstroGallery Demo - Cosmic Visions',
  description: 'A demo astrophotography portfolio showcasing modern web development with Next.js, TypeScript, and Tailwind CSS',
  keywords: ['astrophotography', 'portfolio', 'nextjs', 'react', 'typescript', 'tailwindcss'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'AstroGallery Demo - Cosmic Visions',
    description: 'A demo astrophotography portfolio showcasing modern web development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
} 