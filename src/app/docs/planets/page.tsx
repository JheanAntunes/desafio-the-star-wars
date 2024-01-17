import PlanetCards from '@/components/segmentos/desafios/planets/components/planet-cards'
import PlanetPagination from '@/components/segmentos/desafios/planets/components/planet-pagination'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import SkeletonPagination from '@/components/ui/skeletons/skeleton-pagination'
import { TypographyH2 } from '@/components/ui/typography'
import { Suspense } from 'react'

type TypeParamsSearch = {
  page?: string
}
function PagePlanetsDocs({ searchParams }: { searchParams: TypeParamsSearch }) {
  const { page } = searchParams

  return (
    <main className="container my-8 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <TypographyH2>Documentação de Planetas</TypographyH2>
      </div>
      <Suspense fallback={<SkeletonCards />}>
        <PlanetCards page={page} segmento="docs" />
      </Suspense>
      <Suspense fallback={<SkeletonPagination />}>
        <PlanetPagination page={page} segmento="docs" />
      </Suspense>
    </main>
  )
}

export default PagePlanetsDocs
