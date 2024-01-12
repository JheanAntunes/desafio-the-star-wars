import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import PlanetCard from '../../planets/components/planet-card'
import SectionDesafioCarousel from '../section-desafio-carousel'
import { LogicSectionDesafioPlanetCarousel } from './logic-section-desafio-planet-carousel'

async function SectionPlanetDesafioCarousel() {
  const { data_improved_UI } = await LogicSectionDesafioPlanetCarousel()
  return (
    <SectionDesafioCarousel>
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
    </SectionDesafioCarousel>
  )
}

export default SectionPlanetDesafioCarousel
