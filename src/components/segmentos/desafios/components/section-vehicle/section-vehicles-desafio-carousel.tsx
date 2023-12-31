import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import VehiclesCard from '../../vehicles/components/vehicles-card'
import { LogicSectionDesafioVehiclesCarousel } from './logic-section-desafio-vehicles-carousel'

async function SectionVehiclesDesafioCarousel() {
  const { data_improved_UI } = await LogicSectionDesafioVehiclesCarousel()
  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      className="w-full max-w-xs md:max-w-3xl lg:max-w-5xl"
    >
      <CarouselContent className="-ml-8">
        {data_improved_UI.map((dataVehicle) => (
          <CarouselItem
            key={dataVehicle.created}
            className="pl-8 md:basis-1/2 lg:basis-1/3"
          >
            <VehiclesCard {...dataVehicle} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default SectionVehiclesDesafioCarousel
