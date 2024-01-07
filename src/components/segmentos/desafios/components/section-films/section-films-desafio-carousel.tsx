import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { TypeModifyingFilms } from '@/utils/modiying_data_improve_ui'
import FilmCard from '../../films/components/film-card'

type TypeSectionDesafioPersonCarouselProps = {
  data_Improved_UI: TypeModifyingFilms
}

function SectionFilmsDesafioCarousel({
  data_Improved_UI
}: TypeSectionDesafioPersonCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      className="w-full max-w-xs md:max-w-3xl lg:max-w-5xl"
    >
      <CarouselContent className="-ml-8">
        {data_Improved_UI.map((dataFilm) => (
          <CarouselItem
            key={dataFilm.created + dataFilm.characters}
            className="pl-8 md:basis-1/2 lg:basis-1/3"
          >
            <FilmCard {...dataFilm} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default SectionFilmsDesafioCarousel
