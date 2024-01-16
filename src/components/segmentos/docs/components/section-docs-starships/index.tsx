import StarshipsCarousel from '@/components/segmentos/components/starships-carousel'
import { SkeletonCards } from '@/components/ui/skeletons/skeleton-cards'
import { TypographyH3, TypographyP } from '@/components/ui/typography'
import { Suspense } from 'react'

function SectionDocsStarships() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH3>Nave Estelar</TypographyH3>
        <TypographyP className="text-zinc-700">
          Clique em algum para ler
        </TypographyP>
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
