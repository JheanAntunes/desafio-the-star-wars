import StarshipsCards from '@/components/segmentos/desafios/starships/components/starships-cards'
import StarshipsPagination from '@/components/segmentos/desafios/starships/components/starships-pagination'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import SkeletonPagination from '@/components/ui/skeletons/skeleton-pagination'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { Suspense } from 'react'

type TypeParamsSearch = {
  page?: string
}
function PageStarshipsDesafio({
  searchParams
}: {
  searchParams: TypeParamsSearch
}) {
  const { page } = searchParams

  return (
    <main className="container my-8 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <TypographyH2>Desafio de Naves Estelares</TypographyH2>
        <TypographyP>Clique em algum desafio abaixo para começar.</TypographyP>
      </div>
      <Suspense fallback={<SkeletonCards />}>
        <StarshipsCards page={page} segmento="desafios" />
      </Suspense>
      <Suspense fallback={<SkeletonPagination />}>
        <StarshipsPagination page={page} segmento="desafios" />
      </Suspense>
    </main>
  )
}

export default PageStarshipsDesafio
