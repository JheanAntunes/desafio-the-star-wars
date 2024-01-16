import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { Suspense } from 'react'
import SectionVehiclesDesafioCarousel from '../../../components/vehicles-carousel'

function SectionDesafioVehicles() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Veículos</TypographyH2>
        <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
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
