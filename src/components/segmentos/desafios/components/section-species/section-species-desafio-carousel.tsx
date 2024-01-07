import { CarouselItem } from '@/components/ui/carousel'
import SpeciesCard from '../../species/components/species-card'
import SectionDesafioCarousel from '../section-desafio-carousel'
import { LogicSectionDesafioSpeciesCarousel } from './logic-section-desafio-species-carousel'

async function SectionSpeciesDesafioCarousel() {
  const { data_improved_UI } = await LogicSectionDesafioSpeciesCarousel()
  return (
    <SectionDesafioCarousel>
      {data_improved_UI.map((dataSpecie) => (
        <CarouselItem
          key={dataSpecie.created + dataSpecie.average_lifespan}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <SpeciesCard {...dataSpecie} />
        </CarouselItem>
      ))}
    </SectionDesafioCarousel>
  )
}

export default SectionSpeciesDesafioCarousel
