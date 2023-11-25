import type { Metadata } from 'next'
import './globals.css'
import { SearchContextProvider } from '../context/SearchContextProvider'

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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@master/src/app/ci.css"
        />
      </head>
      <body className="px-8 mx-auto font-inter">
        <SearchContextProvider>
          {children}
        </SearchContextProvider>
      </body>
    </html>
  )
}
