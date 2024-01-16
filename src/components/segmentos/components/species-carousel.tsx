import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import { LogicSpeciesCarousel } from '../../logic/logic-species-carousel'
import SpeciesCard from '../desafios/species/components/species-card'
import { TypeCarouselSegmento } from '../types/carousel-segmento'
import ShorthandCarousel from './shorthand-carousel'

type TypeSpeciesCarouselProps = {
  segmento: TypeCarouselSegmento
}

async function SpeciesCarousel({ segmento }: TypeSpeciesCarouselProps) {
  const { data_improved_UI } = await LogicSpeciesCarousel()
  return (
    <ShorthandCarousel>
      {data_improved_UI.map((dataSpecie, index) => (
        <CarouselItem
          key={dataSpecie.created + dataSpecie.average_lifespan}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/${segmento}/species/${index}`}>
            <SpeciesCard {...dataSpecie} />
          </Link>
        </CarouselItem>
      ))}
    </ShorthandCarousel>
  )
}

export default SpeciesCarousel
