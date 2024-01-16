import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import { LogicPlanetCarousel } from '../../logic/logic-planet-carousel'
import PlanetCard from '../desafios/planets/components/planet-card'
import { TypeSegmento } from '../types/segmento'
import ShorthandCarousel from './shorthand-carousel'

type TypePlanetCarouselProps = {
  segmento: TypeSegmento
}
async function PlanetCarousel({ segmento }: TypePlanetCarouselProps) {
  const { data_improved_UI } = await LogicPlanetCarousel()
  return (
    <ShorthandCarousel>
      {data_improved_UI.map((dataPlanet, index) => (
        <CarouselItem
          key={dataPlanet.created + dataPlanet.climate}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/${segmento}/planets/${index}`}>
            <PlanetCard {...dataPlanet} />
          </Link>
        </CarouselItem>
      ))}
    </ShorthandCarousel>
  )
}

export default PlanetCarousel
