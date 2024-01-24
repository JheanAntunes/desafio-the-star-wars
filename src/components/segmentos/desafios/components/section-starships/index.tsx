import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH3 } from '@/components/ui/typography'
import { Suspense } from 'react'
import SectionStarshipsDesafioCarousel from '../../../components/starships-carousel'
import MessageSection from '../message-section'

function SectionDesafioStarships() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH3>Naves estelares</TypographyH3>
        <MessageSection />
      </div>
      <div className="flex items-center justify-center">
        <Suspense fallback={<SkeletonCards />}>
          <SectionStarshipsDesafioCarousel segmento="desafios" />
        </Suspense>
      </div>
    </section>
  )
}

export default SectionDesafioStarships
