import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import FilmCard from '../../films/components/film-card'
import SectionDesafioCarousel from '../section-desafio-carousel'
import LogicSectionDesafioFilmsCarousel from './logic-section-desafio-films-carousel'

async function SectionFilmsDesafioCarousel() {
  const { data_Improved_UI } = await LogicSectionDesafioFilmsCarousel()
  return (
    <SectionDesafioCarousel>
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
    </SectionDesafioCarousel>
  )
}

export default SectionFilmsDesafioCarousel
