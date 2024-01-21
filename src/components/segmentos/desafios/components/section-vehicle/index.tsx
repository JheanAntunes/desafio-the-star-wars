import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH2 } from '@/components/ui/typography'
import { Suspense } from 'react'
import SectionVehiclesDesafioCarousel from '../../../components/vehicles-carousel'
import MessageSection from '../message-section'

function SectionDesafioVehicles() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Veículos</TypographyH2>
        <MessageSection />
      </div>
      <div className="flex items-center justify-center">
        <Suspense fallback={<SkeletonCards />}>
          <SectionVehiclesDesafioCarousel segmento="desafios" />
        </Suspense>
      </div>
    </section>
  )
}

export default SectionDesafioVehicles
