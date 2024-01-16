import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import PlanetCard from '../desafios/planets/components/planet-card'
import { LogicPlanetCarousel } from '../../logic/logic-planet-carousel'
import ShorthandCarousel from './shorthand-carousel'

async function PlanetCarousel() {
  const { data_improved_UI } = await LogicPlanetCarousel()
  return (
    <ShorthandCarousel>
      {data_improved_UI.map((dataPlanet, index) => (
        <CarouselItem
          key={dataPlanet.created + dataPlanet.climate}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/desafios/planets/${index}`}>
            <PlanetCard {...dataPlanet} />
          </Link>
        </CarouselItem>
      ))}
    </ShorthandCarousel>
  )
}

export default PlanetCarousel
