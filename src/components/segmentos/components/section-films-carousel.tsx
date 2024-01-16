import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import FilmCard from '../desafios/films/components/film-card'
import LogicSectionFilmsCarousel from '../logic/logic-films-carousel'
import SectionCarousel from './shorthand-carousel'

async function SectionFilmsCarousel() {
  const { data_Improved_UI } = await LogicSectionFilmsCarousel()
  return (
    <SectionCarousel>
      {data_Improved_UI.map((dataFilm, index) => (
        <CarouselItem
          key={dataFilm.created + dataFilm.characters}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/desafios/films/${index}`}>
            <FilmCard {...dataFilm} />
          </Link>
        </CarouselItem>
      ))}
    </SectionCarousel>
  )
}

export default SectionFilmsCarousel
