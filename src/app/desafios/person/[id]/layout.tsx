import AllProviderPerson from '@/components/segmentos/desafios/person/[id]/components/provider/all-provider-person'

export const metadata = {
  title: { absolute: 'Desafio de Pessoa' },
  description: 'Página de desafio da categoria pessoa.',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'server components',
    'client components',
    'React',
    'JavaScript',
    'shadcn-ui'
  ],
  authors: [{ name: 'Jhean' }],
  creator: 'Jhean',
  publisher: 'Jhean'
}

const LayoutDinamicoPerson = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <AllProviderPerson>{children}</AllProviderPerson>
    </>
  )
}

export default LayoutDinamicoPerson
