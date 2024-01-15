import ChallengerCompletedSpecies from '@/components/segmentos/desafios/species/[id]/components/challenge-completed-species'
import SpeciesDescription from '@/components/segmentos/desafios/species/[id]/components/species-description'
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

type TypePageDinamicaDesafioSpecies = {
  searchParams: TypeSearchParams
  params: TypeParams
}

//dinamica rota
const PageDinamicaDesafioSpecies = ({
  params,
  searchParams
}: TypePageDinamicaDesafioSpecies) => {
  const { id } = params
  const { page, challengerCompleted } = searchParams
  const currentPage = page ?? '1'
  return (
    <main className="container flex flex-col gap-8">
      <Suspense fallback={<Skeleton className="h-80 w-full" />}>
        <ChallengerCompletedSpecies
          id={id}
          page={currentPage}
          challengerCompleted={challengerCompleted}
        />
      </Suspense>
      <Suspense fallback={<SkeletonDescription />}>
        <SpeciesDescription id={id} page={currentPage} />
      </Suspense>
    </main>
  )
}

export default PageDinamicaDesafioSpecies
