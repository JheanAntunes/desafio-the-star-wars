import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { Suspense } from 'react'
import SectionPlanetDesafioCarousel from '../../../components/planet-carousel'

function SectionDesafioPlanet() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Planetas</TypographyH2>
        <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <Suspense fallback={<SkeletonCards />}>
          <SectionPlanetDesafioCarousel segmento="desafios" />
        </Suspense>
      </div>
    </section>
  )
}

export default SectionDesafioPlanet
