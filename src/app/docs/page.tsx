import SectionDocsFilms from '@/components/segmentos/docs/components/section-docs-films'
import SectionDocsPerson from '@/components/segmentos/docs/components/section-docs-person'
import SectionDocsPlanet from '@/components/segmentos/docs/components/section-docs-planets'
import SectionDocsSpecies from '@/components/segmentos/docs/components/section-docs-species'
import SectionDocsStarships from '@/components/segmentos/docs/components/section-docs-starships'
import SectionDocsVehicles from '@/components/segmentos/docs/components/section-docs-vehicles'

export const metadata = {
  title: 'Documentação',
  description:
    'Página de documentação com várias categorias que você pode escolher.',
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

function PageDocs() {
  return (
    <main className="my-8 flex flex-col gap-8">
      <SectionDocsPerson />
      <SectionDocsPlanet />
      <SectionDocsFilms />
      <SectionDocsStarships />
      <SectionDocsVehicles />
      <SectionDocsSpecies />
    </main>
  )
}

export default PageDocs
