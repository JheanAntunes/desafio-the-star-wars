import { CarouselItem } from '@/components/ui/carousel'
import StarshipsCard from '../../starships/components/starships-card'
import SectionDesafioCarousel from '../section-desafio-carousel'
import LogicSectionDesafioCarouselStarships from './logic-section-desafio-carousel-starships'

async function SectionStarshipsDesafioCarousel() {
  const { data_improved_UI } = await LogicSectionDesafioCarouselStarships()
  return (
    <SectionDesafioCarousel>
      {data_improved_UI.map((dataStarship) => (
        <CarouselItem
          key={dataStarship.created + dataStarship.MGLT}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <StarshipsCard {...dataStarship} />
        </CarouselItem>
      ))}
    </SectionDesafioCarousel>
  )
}

export default SectionStarshipsDesafioCarousel
