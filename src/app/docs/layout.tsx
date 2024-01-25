import CategoriaDocs from '@/components/layouts/docs/categoria-docs'
import { TypographyH1 } from '@/components/ui/typography'

export const metadata = {
  title: {
    template: 'Documentação | %s',
    default: 'Documentação'
  },
  description:
    'Página de Documentação com várias categorias que você pode escolher para se divertir e conhecer mais sobre a história star wars.',
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

function LayoutDocs({ children }: React.PropsWithChildren) {
  return (
    <>
      <TypographyH1 className="mb-20 mt-[47px] text-center">
        Documentação Star Wars
      </TypographyH1>
      <CategoriaDocs />
      {/* render rota */}
      {children}
    </>
  )
}

export default LayoutDocs
