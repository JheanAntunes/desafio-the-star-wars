import PersonCards from '@/components/segmentos/desafios/person/components/person-cards'
import PersonPagination from '@/components/segmentos/desafios/person/components/person-pagination'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import SkeletonPagination from '@/components/ui/skeletons/skeleton-pagination'
import { TypographyH2 } from '@/components/ui/typography'
import { Suspense } from 'react'

type TypeParamsSearch = {
  page?: string
}
function PagePersonDocs({ searchParams }: { searchParams: TypeParamsSearch }) {
  const { page } = searchParams

  return (
    <main className="container my-8 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <TypographyH2>Documentação de Pessoa</TypographyH2>
      </div>
      <Suspense fallback={<SkeletonCards />}>
        <PersonCards page={page} segmento="docs" />
      </Suspense>
      <Suspense fallback={<SkeletonPagination />}>
        <PersonPagination page={page} segmento="docs" />
      </Suspense>
    </main>
  )
}

export default PagePersonDocs
