import SpeciesCarousel from '@/components/segmentos/components/species-carousel'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH3 } from '@/components/ui/typography'
import { Suspense } from 'react'
import SectionMessageSecondary from '../SectionMessageSecondary'

function SectionDocsSpecies() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH3>Espécies</TypographyH3>
        <SectionMessageSecondary />
      </div>
      <div className="flex items-center justify-center">
        <Suspense fallback={<SkeletonCards />}>
          <SpeciesCarousel segmento="docs" />
        </Suspense>
      </div>
    </section>
  )
}

export default SectionDocsSpecies
