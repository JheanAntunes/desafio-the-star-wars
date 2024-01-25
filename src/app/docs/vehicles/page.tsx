import VehiclesCards from '@/components/segmentos/desafios/vehicles/components/vehicles-cards'
import VehiclesPagination from '@/components/segmentos/desafios/vehicles/components/vehicles-pagination'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import SkeletonPagination from '@/components/ui/skeletons/skeleton-pagination'
import { TypographyH2 } from '@/components/ui/typography'
import { Suspense } from 'react'

export const metadata = {
  title: 'Veículos',
  description: 'Página de documentação da categoria Veículos.',
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
function PageVehiclesDocs({
  searchParams
}: {
  searchParams: TypeParamsSearch
}) {
  const { page } = searchParams

  return (
    <main className="container my-8 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <TypographyH2>Documentação de Veículos</TypographyH2>
      </div>
      <Suspense fallback={<SkeletonCards />}>
        <VehiclesCards page={page} segmento="docs" />
      </Suspense>
      <Suspense fallback={<SkeletonPagination />}>
        <VehiclesPagination page={page} segmento="docs" />
      </Suspense>
    </main>
  )
}

export default PageVehiclesDocs
