import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { TypeModifyingStarships } from '@/utils/modiying_data_improve_ui'
import StarshipsCard from '../../starships/components/starships-card'

type TypeSectionDesafioPersonCarouselProps = {
  data_Improved_UI: TypeModifyingStarships
}

function SectionStarshipsDesafioCarousel({
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
        {data_Improved_UI.map((dataStarship) => (
          <CarouselItem
            key={dataStarship.created + dataStarship.MGLT}
            className="pl-8 md:basis-1/2 lg:basis-1/3"
          >
            <StarshipsCard {...dataStarship} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default SectionStarshipsDesafioCarousel
