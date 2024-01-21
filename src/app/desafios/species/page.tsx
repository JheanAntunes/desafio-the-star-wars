import MessageSection from '@/components/segmentos/desafios/components/message-section'
import SpeciesCards from '@/components/segmentos/desafios/species/components/species-cards'
import SpeciesPagination from '@/components/segmentos/desafios/species/components/species-pagination'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import SkeletonPagination from '@/components/ui/skeletons/skeleton-pagination'
import { TypographyH2 } from '@/components/ui/typography'
import { Suspense } from 'react'

type TypeParamsSearch = {
  page?: string
}
function PageSpeciesDesafio({
  searchParams
}: {
  searchParams: TypeParamsSearch
}) {
  const { page } = searchParams

  return (
    <main className="container my-8 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <TypographyH2>Desafio de Espécies</TypographyH2>
        <MessageSection />
      </div>
      <Suspense fallback={<SkeletonCards />}>
        <SpeciesCards page={page} segmento="desafios" />
      </Suspense>
      <Suspense fallback={<SkeletonPagination />}>
        <SpeciesPagination page={page} segmento="desafios" />
      </Suspense>
    </main>
  )
}

export default PageSpeciesDesafio
