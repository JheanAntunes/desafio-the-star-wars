import PlanetDescription from '@/components/segmentos/components/planets-description'
import ChallengerCompletedPlanet from '@/components/segmentos/desafios/planets/[id]/components/challenger-completed-planet'
import { Skeleton } from '@/components/ui/skeleton'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { Suspense } from 'react'

export const metadata = {
  title: { absolute: 'Desafio de Planeta' },
  description: 'Página de desafio da categoria pessoa.',
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
