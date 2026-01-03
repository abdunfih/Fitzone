import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Fallback font configuration that doesn't require network access
const inter = Inter({
  subsets: ['latin'],
  preload: false, // Disable preloading to avoid network requests
  display: 'swap' // Use system font while loading
})
import { Providers } from '@/components/providers'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'FitZone Gym - Transform Your Body, Transform Your Life',
  description: 'Professional gym with state-of-the-art equipment, certified trainers, and personalized fitness programs. Join thousands of members achieving their fitness goals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}