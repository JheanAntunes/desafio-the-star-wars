import PlanetCarousel from '@/components/segmentos/components/planet-carousel'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH3 } from '@/components/ui/typography'
import { Suspense } from 'react'
import SectionMessageSecondary from '../SectionMessageSecondary'

function SectionDocsPlanet() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH3>Planetas</TypographyH3>
        <SectionMessageSecondary />
      </div>
      <div className="flex items-center justify-center">
        <Suspense fallback={<SkeletonCards />}>
          <PlanetCarousel segmento="docs" />
        </Suspense>
      </div>
    </section>
  )
}

export default SectionDocsPlanet
