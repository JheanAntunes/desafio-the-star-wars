import VehiclesCards from '@/components/segmentos/desafios/vehicles/components/vehicles-cards'
import VehiclesPagination from '@/components/segmentos/desafios/vehicles/components/vehicles-pagination'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import SkeletonPagination from '@/components/ui/skeletons/skeleton-pagination'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { Suspense } from 'react'

type TypeParamsSearch = {
  page?: string
}
function PageVehiclesDesafio({
  searchParams
}: {
  searchParams: TypeParamsSearch
}) {
  const { page } = searchParams

  return (
    <main className="container my-8 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <TypographyH2>Desafio de Veículos</TypographyH2>
        <TypographyP>Clique em algum desafio abaixo para começar.</TypographyP>
      </div>
      <Suspense fallback={<SkeletonCards />}>
        <VehiclesCards page={page} segmento="desafios" />
      </Suspense>
      <Suspense fallback={<SkeletonPagination />}>
        <VehiclesPagination page={page} segmento="desafios" />
      </Suspense>
    </main>
  )
}

export default PageVehiclesDesafio
