import CategoriaDesafios from '@/components/layouts/desafio/categoria-desafios'
import { TypographyH1 } from '@/components/ui/typography'

export const metadata = {
  title: {
    template: 'Desafios | %s',
    default: 'Desafios'
  },
  description:
    'Página de desafios com várias categorias que você pode escolher para se divertir e conhecer mais sobre a história star wars.',
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
  publisher: 'Jhean'
}

function LayoutDesafios({ children }: React.PropsWithChildren) {
  return (
    <>
      <TypographyH1 className="mb-20 mt-[47px] text-center">
        Desafios Star Wars
      </TypographyH1>
      <CategoriaDesafios />
      {/* render rota */}
      {children}
    </>
  )
}

export default LayoutDesafios
