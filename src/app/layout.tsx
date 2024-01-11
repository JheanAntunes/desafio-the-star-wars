import { fontSans, inter } from '@/components/assets/fonts'
import Header from '@/components/layouts/header'
import StarBackground from '@/components/layouts/stars-background'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import '../styles/globals.css'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${fontSans.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="body">
          <StarBackground />
        </div>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
