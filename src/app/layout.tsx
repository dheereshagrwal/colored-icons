import type { Metadata } from 'next'
import './globals.css'
import { SearchContextProvider } from '@/context/SearchContextProvider'
import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });

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
    <html lang="en" className="scroll-smooth overflow-y-scroll">
      <body className={`px-8 mx-auto ${outfit.className}`}>
        <SearchContextProvider>
          {children}
        </SearchContextProvider>
      </body>
    </html>
  )
}
