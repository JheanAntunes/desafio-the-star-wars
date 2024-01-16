import SpeciesCarousel from '@/components/segmentos/components/species-carousel'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH3, TypographyP } from '@/components/ui/typography'
import { Suspense } from 'react'

function SectionDocsSpecies() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH3>Espécies</TypographyH3>
        <TypographyP className="text-zinc-700">
          Clique em algum para ler
        </TypographyP>
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
