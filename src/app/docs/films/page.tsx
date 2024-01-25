import FilmsCards from '@/components/segmentos/desafios/films/components/film-cards'
import FilmsPagination from '@/components/segmentos/desafios/films/components/film-pagination'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import SkeletonPagination from '@/components/ui/skeletons/skeleton-pagination'
import { TypographyH2 } from '@/components/ui/typography'
import { Suspense } from 'react'

export const metadata = {
  title: 'Filmes',
  description: 'Página de Documentação da categoria filmes.',
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
function PageFilmsDocs({ searchParams }: { searchParams: TypeParamsSearch }) {
  const { page } = searchParams

  return (
    <main className="container my-8 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <TypographyH2>Documentação de Filmes</TypographyH2>
      </div>
      <Suspense fallback={<SkeletonCards />}>
        <FilmsCards page={page} segmento="docs" />
      </Suspense>
      <Suspense fallback={<SkeletonPagination />}>
        <FilmsPagination page={page} segmento="docs" />
      </Suspense>
    </main>
  )
}

export default PageFilmsDocs
