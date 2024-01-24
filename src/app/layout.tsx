import { fontSans, inter } from '@/components/assets/fonts'
import Header from '@/components/layouts/header'
import StarBackground from '@/components/layouts/stars-background'
import { ThemeProvider } from '@/components/provider/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import '../styles/globals.css'

export const metadata = {
  title: {
    template: 'Stars Wars | %s',
    default: 'Stars Wars'
  },
  description:
    'Site para aprender mais sobre star wars com desafios e documentação.',
  applicationName: 'Star wars',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'server components',
    'React',
    'JavaScript',
    'shadcn-ui'
  ],
  authors: [{ name: 'Jhean' }],
  creator: 'Jhean',
  publisher: 'Jhean',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={`${fontSans.variable}`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="body">
            <StarBackground />
          </div>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
