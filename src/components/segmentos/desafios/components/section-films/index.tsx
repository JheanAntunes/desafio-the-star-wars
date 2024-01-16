import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { Suspense } from 'react'
import SectionFilmsDesafioCarousel from '../../../components/films-carousel'

function SectionDesafioFilms() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Filmes</TypographyH2>
        <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <Suspense fallback={<SkeletonCards />}>
          <SectionFilmsDesafioCarousel segmento="desafios" />
        </Suspense>
      </div>
    </section>
  )
}

export default SectionDesafioFilms
