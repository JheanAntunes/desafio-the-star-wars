import SpeciesCards from '@/components/segmentos/desafios/species/components/species-cards'
import SpeciesPagination from '@/components/segmentos/desafios/species/components/species-pagination'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import SkeletonPagination from '@/components/ui/skeletons/skeleton-pagination'
import { TypographyH2 } from '@/components/ui/typography'
import { Suspense } from 'react'

export const metadata = {
  title: 'Espécie',
  description: 'Página de documentação da categoria espécie.',
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

type TypeParamsSearch = {
  page?: string
}
function PageSpeciesDocs({ searchParams }: { searchParams: TypeParamsSearch }) {
  const { page } = searchParams

  return (
    <main className="container my-8 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <TypographyH2>Documentação de Espécies</TypographyH2>
      </div>
      <Suspense fallback={<SkeletonCards />}>
        <SpeciesCards page={page} segmento="docs" />
      </Suspense>
      <Suspense fallback={<SkeletonPagination />}>
        <SpeciesPagination page={page} segmento="docs" />
      </Suspense>
    </main>
  )
}

export default PageSpeciesDocs
