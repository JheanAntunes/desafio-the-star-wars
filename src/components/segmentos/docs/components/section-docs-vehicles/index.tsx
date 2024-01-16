import VehiclesCarousel from '@/components/segmentos/components/vehicles-carousel'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH3, TypographyP } from '@/components/ui/typography'
import { Suspense } from 'react'

function SectionDocsVehicles() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH3>Veículos</TypographyH3>
        <TypographyP className="text-zinc-700">
          Clique em algum para ler
        </TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <Suspense fallback={<SkeletonCards />}>
          <VehiclesCarousel segmento="docs" />
        </Suspense>
      </div>
    </section>
  )
}

export default SectionDocsVehicles
