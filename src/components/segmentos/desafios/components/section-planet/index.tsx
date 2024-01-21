import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH2 } from '@/components/ui/typography'
import { Suspense } from 'react'
import SectionPlanetDesafioCarousel from '../../../components/planet-carousel'
import MessageSection from '../message-section'

function SectionDesafioPlanet() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Planetas</TypographyH2>
        <MessageSection />
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
