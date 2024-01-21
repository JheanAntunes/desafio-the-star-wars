import StarshipsCarousel from '@/components/segmentos/components/starships-carousel'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH3 } from '@/components/ui/typography'
import { Suspense } from 'react'
import SectionMessageSecondary from '../SectionMessageSecondary'

function SectionDocsStarships() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH3>Nave Estelar</TypographyH3>
        <SectionMessageSecondary />
      </div>
      <div className="flex items-center justify-center">
        <Suspense fallback={<SkeletonCards />}>
          <StarshipsCarousel segmento="docs" />
        </Suspense>
      </div>
    </section>
  )
}

export default SectionDocsStarships
