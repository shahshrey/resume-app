import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shrey Shah - Resume',
  description: 'AI Software Engineer with over 8 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background-main text-text-primary min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 