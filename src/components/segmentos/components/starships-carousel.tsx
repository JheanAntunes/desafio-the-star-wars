import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import LogicCarouselStarships from '../../logic/logic-starship-carousel-starships'
import StarshipsCard from '../desafios/starships/components/starships-card'
import { TypeCarouselSegmento } from '../types/carousel-segmento'
import ShorthandCarousel from './shorthand-carousel'

type TypeStarshipsCarouselProps = {
  segmento: TypeCarouselSegmento
}

async function StarshipsCarousel({ segmento }: TypeStarshipsCarouselProps) {
  const { data_improved_UI } = await LogicCarouselStarships()
  return (
    <ShorthandCarousel>
      {data_improved_UI.map((dataStarship, index) => (
        <CarouselItem
          key={dataStarship.created + dataStarship.MGLT}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/${segmento}/starships/${index}`}>
            <StarshipsCard {...dataStarship} />
          </Link>
        </CarouselItem>
      ))}
    </ShorthandCarousel>
  )
}

export default StarshipsCarousel
