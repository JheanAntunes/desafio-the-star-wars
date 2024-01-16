import PlanetCarousel from '@/components/segmentos/components/planet-carousel'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH3, TypographyP } from '@/components/ui/typography'
import { Suspense } from 'react'

function SectionDocsPlanet() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH3>Planetas</TypographyH3>
        <TypographyP className="text-zinc-700">
          Clique em algum para ler
        </TypographyP>
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
