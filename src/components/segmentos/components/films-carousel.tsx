import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import LogicFilmsCarousel from '../../logic/logic-films-carousel'
import FilmCard from '../desafios/films/components/film-card'
import { TypeCarouselSegmento } from '../types/carousel-segmento'
import ShorthandCarousel from './shorthand-carousel'

type TypeFilmsCarouselProps = {
  segmento: TypeCarouselSegmento
}
async function FilmsCarousel({ segmento }: TypeFilmsCarouselProps) {
  const { data_Improved_UI } = await LogicFilmsCarousel()
  return (
    <ShorthandCarousel>
      {data_Improved_UI.map((dataFilm, index) => (
        <CarouselItem
          key={dataFilm.created + dataFilm.characters}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/${segmento}/films/${index}`}>
            <FilmCard {...dataFilm} />
          </Link>
        </CarouselItem>
      ))}
    </ShorthandCarousel>
  )
}

export default FilmsCarousel
