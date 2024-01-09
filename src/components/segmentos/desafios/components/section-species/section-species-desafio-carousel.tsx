import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import SpeciesCard from '../../species/components/species-card'
import SectionDesafioCarousel from '../section-desafio-carousel'
import { LogicSectionDesafioSpeciesCarousel } from './logic-section-desafio-species-carousel'

async function SectionSpeciesDesafioCarousel() {
  const { data_improved_UI } = await LogicSectionDesafioSpeciesCarousel()
  return (
    <SectionDesafioCarousel>
      {data_improved_UI.map((dataSpecie, index) => (
        <CarouselItem
          key={dataSpecie.created + dataSpecie.average_lifespan}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/desafios/person/${index}`}>
            <SpeciesCard {...dataSpecie} />
          </Link>
        </CarouselItem>
      ))}
    </SectionDesafioCarousel>
  )
}

export default SectionSpeciesDesafioCarousel
