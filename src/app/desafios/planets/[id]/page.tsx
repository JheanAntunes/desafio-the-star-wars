import SkeletonDesafioPersonDescription from '@/components/segmentos/desafios/person/[id]/components/skeletons/skeletonDesafioPersonDescription'
import ChallengerCompleted from '@/components/segmentos/desafios/planets/[id]/components/challenger-completed'
import DesafioPlanets from '@/components/segmentos/desafios/planets/[id]/components/desafio-planets'
import DesafioPlanetDescription from '@/components/segmentos/desafios/planets/[id]/components/desafio-planets-description'
import { Skeleton } from '@/components/ui/skeleton'
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
        <ChallengerCompleted
          id={id}
          page={page ?? '1'}
          challengerCompleted={challengerCompleted}
          fetchCategory="planets"
        >
          <DesafioPlanets id={id} page={currentPage} />{' '}
        </ChallengerCompleted>
      </Suspense>
      <Suspense fallback={<SkeletonDesafioPersonDescription />}>
        <DesafioPlanetDescription id={id} page={currentPage} />
      </Suspense>
    </main>
  )
}

export default PageDinamicaDesafioPlanet
