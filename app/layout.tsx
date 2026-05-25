import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Vojtěch Prokeš | Osobní & Online trenér – Brno',
  description: 'Vojtěch Prokeš - osobní & online trenér v Brně. Osobní tréninky 1:1, tréninkové plány na míru a online coaching. Jsem kdykoli k dispozici.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${oswald.variable}`} style={{ background: "#fff" }}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
