import FilmDescription from '@/components/segmentos/components/film-description'
import ChallengeCompletedFilm from '@/components/segmentos/desafios/films/[id]/components/challenge-completed-film'
import { Skeleton } from '@/components/ui/skeleton'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { Suspense } from 'react'

type TypeURLParams = {
  id: string
}

type TypeURLSeachParams = {
  page?: string
  challengerCompleted?: string
}

type TypePageChallengeFilm = {
  params: TypeURLParams
  searchParams: TypeURLSeachParams
}

const PageChallengeFilm = ({ params, searchParams }: TypePageChallengeFilm) => {
  const { id } = params
  const { challengerCompleted, page } = searchParams
  const currentPage = page ?? '1'

  return (
    <main className="container py-8">
      <Suspense fallback={<Skeleton className="h-80 w-full" />}>
        <ChallengeCompletedFilm
          id={id}
          page={currentPage}
          challengerCompleted={challengerCompleted}
        />
      </Suspense>
      <Suspense fallback={<SkeletonDescription />}>
        <FilmDescription id={id} page={currentPage} segmento="desafios" />
      </Suspense>
    </main>
  )
}

export default PageChallengeFilm
