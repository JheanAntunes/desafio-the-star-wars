import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import StarshipsCard from '../../starships/components/starships-card'
import SectionDesafioCarousel from '../section-desafio-carousel'
import LogicSectionDesafioCarouselStarships from './logic-section-desafio-carousel-starships'

async function SectionStarshipsDesafioCarousel() {
  const { data_improved_UI } = await LogicSectionDesafioCarouselStarships()
  return (
    <SectionDesafioCarousel>
      {data_improved_UI.map((dataStarship, index) => (
        <CarouselItem
          key={dataStarship.created + dataStarship.MGLT}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/desafios/person/${index}`}>
            <StarshipsCard {...dataStarship} />
          </Link>
        </CarouselItem>
      ))}
    </SectionDesafioCarousel>
  )
}

export default SectionStarshipsDesafioCarousel
