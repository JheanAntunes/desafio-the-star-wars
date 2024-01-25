import VehicleDescription from '@/components/segmentos/components/vehicle-description'
import ChallengeCompletedVehicles from '@/components/segmentos/desafios/vehicles/[id]/components/challenge-completed-vehicle'
import { Skeleton } from '@/components/ui/skeleton'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { Suspense } from 'react'

export const metadata = {
  title: { absolute: 'Desafio de Veículo' },
  description: 'Página de desafio da categoria Veículos.',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'server components',
    'client components',
    'React',
    'JavaScript',
    'shadcn-ui'
  ],
  authors: [{ name: 'Jhean' }],
  creator: 'Jhean',
  publisher: 'Jhean'
}

type TypeParams = {
  id: string
}

type TypeSearchParams = {
  page?: string
  challengerCompleted?: string
}

type TypePageDinamicaDesafioVehicleProps = {
  params: TypeParams
  searchParams: TypeSearchParams
}

const PageDinamicaDesafioVehicle = ({
  params,
  searchParams
}: TypePageDinamicaDesafioVehicleProps) => {
  const { id } = params
  const { page, challengerCompleted } = searchParams
  const currentPage = page ?? '1'
  return (
    <main className="container flex flex-col gap-8 py-8">
      <Suspense fallback={<Skeleton className="h-80 w-full" />}>
        <ChallengeCompletedVehicles
          id={id}
          page={currentPage}
          challengerCompleted={challengerCompleted}
        />
      </Suspense>
      <Suspense fallback={<SkeletonDescription />}>
        <VehicleDescription id={id} page={currentPage} segmento="desafios" />
      </Suspense>
    </main>
  )
}

export default PageDinamicaDesafioVehicle
