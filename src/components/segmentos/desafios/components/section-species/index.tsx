import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH2 } from '@/components/ui/typography'
import { Suspense } from 'react'
import SectionSpeciesDesafioCarousel from '../../../components/species-carousel'
import MessageSection from '../message-section'

function SectionDesafioSpecies() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Espécies</TypographyH2>
        <MessageSection />
      </div>
      <div className="flex items-center justify-center">
        <Suspense fallback={<SkeletonCards />}>
          <SectionSpeciesDesafioCarousel segmento="desafios" />
        </Suspense>
      </div>
    </section>
  )
}

export default SectionDesafioSpecies
