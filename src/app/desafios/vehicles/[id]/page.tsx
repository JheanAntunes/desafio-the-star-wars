import ChallengeCompletedVehicles from '@/components/segmentos/desafios/vehicles/[id]/components/challenge-completed-vehicle'
import VehicleDescription from '@/components/segmentos/desafios/vehicles/[id]/components/vehicle-description'
import { Skeleton } from '@/components/ui/skeleton'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { Suspense } from 'react'

type TypeParams = {
  id: string
}

type TypeSearchParams = {
  page?: string
  challengerCompleted?: string
}

type TypePageDesafioVehicleProps = {
  params: TypeParams
  searchParams: TypeSearchParams
}

const PageDesafioVehicle = ({
  params,
  searchParams
}: TypePageDesafioVehicleProps) => {
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
        <VehicleDescription id={id} page={currentPage} />
      </Suspense>
    </main>
  )
}

export default PageDesafioVehicle
