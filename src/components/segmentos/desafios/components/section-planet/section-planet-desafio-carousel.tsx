import { CarouselItem } from '@/components/ui/carousel'
import PlanetCard from '../../planets/components/planet-card'
import SectionDesafioCarousel from '../section-desafio-carousel'
import { LogicSectionDesafioPlanetCarousel } from './logic-section-desafio-planet-carousel'

async function SectionPlanetDesafioCarousel() {
  const { data_improved_UI } = await LogicSectionDesafioPlanetCarousel()
  return (
    <SectionDesafioCarousel>
      {data_improved_UI.map((dataPlanet) => (
        <CarouselItem
          key={dataPlanet.created + dataPlanet.climate}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <PlanetCard {...dataPlanet} />
        </CarouselItem>
      ))}
    </SectionDesafioCarousel>
  )
}

export default SectionPlanetDesafioCarousel
