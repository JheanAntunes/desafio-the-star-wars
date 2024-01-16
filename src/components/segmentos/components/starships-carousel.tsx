import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import StarshipsCard from '../desafios/starships/components/starships-card'
import LogicCarouselStarships from '../logic/logic-starship-carousel-starships'
import SectionCarousel from './shorthand-carousel'

async function SectionStarshipsCarousel() {
  const { data_improved_UI } = await LogicCarouselStarships()
  return (
    <SectionCarousel>
      {data_improved_UI.map((dataStarship, index) => (
        <CarouselItem
          key={dataStarship.created + dataStarship.MGLT}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/desafios/starships/${index}`}>
            <StarshipsCard {...dataStarship} />
          </Link>
        </CarouselItem>
      ))}
    </SectionCarousel>
  )
}

export default SectionStarshipsCarousel
