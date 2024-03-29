import StarshipsDescription from '@/components/segmentos/components/starships-description'
import ChallengeCompletedStarships from '@/components/segmentos/desafios/starships/[id]/components/challenge-completed-starships'
import { Skeleton } from '@/components/ui/skeleton'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { Suspense } from 'react'

export const metadata = {
  title: { absolute: 'Desafio de Nave estelar' },
  description: 'Página de desafio da categoria Nave estelar.',
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

type TypePageDesafioStarshipsProps = {
  params: TypeParams
  searchParams: TypeSearchParams
}

const PageDesafioStarships = ({
  params,
  searchParams
}: TypePageDesafioStarshipsProps) => {
  const { id } = params
  const { page, challengerCompleted } = searchParams
  const currentPage = page ?? '1'
  return (
    <main className="container flex flex-col gap-8 py-8">
      <Suspense fallback={<Skeleton className="h-80 w-full" />}>
        <ChallengeCompletedStarships
          id={id}
          page={currentPage}
          challengerCompleted={challengerCompleted}
        />
      </Suspense>
      <Suspense fallback={<SkeletonDescription />}>
        <StarshipsDescription id={id} page={currentPage} segmento="desafios" />
      </Suspense>
    </main>
  )
}

export default PageDesafioStarships
