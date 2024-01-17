import StarshipsCards from '@/components/segmentos/desafios/starships/components/starships-cards'
import StarshipsPagination from '@/components/segmentos/desafios/starships/components/starships-pagination'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import SkeletonPagination from '@/components/ui/skeletons/skeleton-pagination'
import { TypographyH2 } from '@/components/ui/typography'
import { Suspense } from 'react'

type TypeParamsSearch = {
  page?: string
}
function PageStarshipsDocs({
  searchParams
}: {
  searchParams: TypeParamsSearch
}) {
  const { page } = searchParams

  return (
    <main className="container my-8 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <TypographyH2>Documentação de Nave estelar</TypographyH2>
      </div>
      <Suspense fallback={<SkeletonCards />}>
        <StarshipsCards page={page} segmento="docs" />
      </Suspense>
      <Suspense fallback={<SkeletonPagination />}>
        <StarshipsPagination page={page} segmento="docs" />
      </Suspense>
    </main>
  )
}

export default PageStarshipsDocs
