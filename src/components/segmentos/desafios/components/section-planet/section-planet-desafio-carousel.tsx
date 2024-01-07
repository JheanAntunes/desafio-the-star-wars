import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { TypeModifyingPlanet } from '@/utils/modiying_data_improve_ui'
import PlanetCard from '../../planets/components/planet-card'

type TypeSectionDesafioPersonCarouselProps = {
  data_Improved_UI: TypeModifyingPlanet
}

function SectionPlanetDesafioCarousel({
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
        {data_Improved_UI.map((dataPlanet) => (
          <CarouselItem
            key={dataPlanet.created + dataPlanet.climate}
            className="pl-8 md:basis-1/2 lg:basis-1/3"
          >
            <PlanetCard {...dataPlanet} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default SectionPlanetDesafioCarousel
