import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { TypeModifyingSpecies } from '@/utils/modiying_data_improve_ui'
import SpeciesCard from '../../species/components/species-card'

type TypeSectionDesafioPersonCarouselProps = {
  data_Improved_UI: TypeModifyingSpecies
}

function SectionSpeciesDesafioCarousel({
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
        {data_Improved_UI.map((dataSpecie) => (
          <CarouselItem
            key={dataSpecie.created + dataSpecie.average_lifespan}
            className="pl-8 md:basis-1/2 lg:basis-1/3"
          >
            <SpeciesCard {...dataSpecie} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default SectionSpeciesDesafioCarousel
