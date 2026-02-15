import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'Ubuntu Web Lab | Soluções Digitais & Engenharia de Software',
  description:
    'Consultoria em Engenharia de Software e Desenvolvimento Full-Stack. Soluções customizadas, plataformas educacionais e dashboards corporativos com foco em excelência e inovação.',
}

export const viewport: Viewport = {
  themeColor: '#572011',
  width: 'device-width',
  initialScale: 1,
}

import { CookieBanner } from '@/components/cookie-banner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
