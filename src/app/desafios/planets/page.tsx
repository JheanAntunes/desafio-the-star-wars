import PlanetCards from '@/components/segmentos/desafios/planets/components/planet-cards'
import PlanetPagination from '@/components/segmentos/desafios/planets/components/planet-pagination'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import SkeletonPagination from '@/components/ui/skeletons/skeleton-pagination'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { Suspense } from 'react'

type TypeParamsSearch = {
  page?: string
}
function PagePlanetDesafio({
  searchParams
}: {
  searchParams: TypeParamsSearch
}) {
  const { page } = searchParams

  return (
    <main className="container my-8 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <TypographyH2>Desafio de Planetas</TypographyH2>
        <TypographyP>Clique em algum desafio abaixo para começar.</TypographyP>
      </div>
      <Suspense fallback={<SkeletonCards />}>
        <PlanetCards page={page} />
      </Suspense>
      <Suspense fallback={<SkeletonPagination />}>
        <PlanetPagination page={page} />
      </Suspense>
    </main>
  )
}

export default PagePlanetDesafio
