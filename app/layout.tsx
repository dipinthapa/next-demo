import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Woven Light Hero',
  description: 'An interactive tapestry of light and motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}