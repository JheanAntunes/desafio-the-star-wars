import SectionPersonCarousel from '@/components/segmentos/components/person-carousel'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH3 } from '@/components/ui/typography'
import { Suspense } from 'react'
import MessageSection from '../message-section'

function SectionDesafioPerson() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH3>Pessoas</TypographyH3>
        <MessageSection />
      </div>
      <div className="flex items-center justify-center">
        <Suspense fallback={<SkeletonCards />}>
          <SectionPersonCarousel segmento="desafios" />
        </Suspense>
      </div>
    </section>
  )
}

export default SectionDesafioPerson
