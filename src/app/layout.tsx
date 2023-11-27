import type { Metadata } from 'next'
import './globals.css'
import { SearchContextProvider } from '../context/SearchContextProvider'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Colored Icons',
  description: 'Colored Icons is a collection of colored icons for web developers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`px-8 mx-auto ${inter.className}`}>
        <SearchContextProvider>
          {children}
        </SearchContextProvider>
      </body>
    </html>
  )
}
