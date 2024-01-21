import FilmsCarousel from '@/components/segmentos/components/films-carousel'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH3 } from '@/components/ui/typography'
import { Suspense } from 'react'
import SectionMessageSecondary from '../SectionMessageSecondary'

function SectionDocsFilms() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH3>Filmes</TypographyH3>
        <SectionMessageSecondary />
      </div>
      <div className="flex items-center justify-center">
        <Suspense fallback={<SkeletonCards />}>
          <FilmsCarousel segmento="docs" />
        </Suspense>
      </div>
    </section>
  )
}

export default SectionDocsFilms
