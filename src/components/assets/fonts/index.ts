import { Poppins as FontSans, Inter } from 'next/font/google'

export const fontSans = FontSans({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-sans'
})

export const inter = Inter({ subsets: ['latin'] })
