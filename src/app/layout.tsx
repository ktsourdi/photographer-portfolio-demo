import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'AstroGallery Demo - Cosmic Visions',
  description: 'A demo astrophotography portfolio by Hellenic Web3 Studio, built with Next.js, TypeScript, and Tailwind CSS',
  keywords: ['astrophotography', 'portfolio', 'nextjs', 'react', 'typescript', 'tailwindcss'],
  authors: [{ name: 'Hellenic Web3 Studio', url: 'https://www.hellenicweb3.com' }],
  creator: 'Hellenic Web3 Studio',
  openGraph: {
    title: 'AstroGallery Demo - Cosmic Visions',
    description: 'A demo astrophotography portfolio by Hellenic Web3 Studio',
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