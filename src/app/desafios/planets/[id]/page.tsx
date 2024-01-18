import PlanetDescription from '@/components/segmentos/components/planets-description'
import ChallengerCompletedPlanet from '@/components/segmentos/desafios/planets/[id]/components/challenger-completed-planet'
import { Skeleton } from '@/components/ui/skeleton'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { Suspense } from 'react'

type TypeSearchParams = {
  page?: string
  challengerCompleted?: string
}

type TypeParams = {
  id: string
}

type TypePageDinamicaDesafioPlanet = {
  searchParams: TypeSearchParams
  params: TypeParams
}

//dinamica rota
const PageDinamicaDesafioPlanet = ({
  params,
  searchParams
}: TypePageDinamicaDesafioPlanet) => {
  const { id } = params
  const { page, challengerCompleted } = searchParams
  const currentPage = page ?? '1'
  return (
    <main className="container flex flex-col gap-8">
      <Suspense fallback={<Skeleton className="h-80 w-full" />}>
        <ChallengerCompletedPlanet
          id={id}
          page={page ?? '1'}
          challengerCompleted={challengerCompleted}
        />
      </Suspense>
      <Suspense fallback={<SkeletonDescription />}>
        <PlanetDescription id={id} page={currentPage} segmento="desafios" />
      </Suspense>
    </main>
  )
}

export default PageDinamicaDesafioPlanet
