import ShorthandCarousel from '@/components/segmentos/components/shorthand-carousel'
import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import { LogicVehiclesCarousel } from '../../logic/logic-vehicles-carousel'
import VehiclesCard from '../desafios/vehicles/components/vehicles-card'
import { TypeSegmento } from '../types/segmento'

type TypeVehiclesCarouselProps = {
  segmento: TypeSegmento
}

async function VehiclesCarousel({ segmento }: TypeVehiclesCarouselProps) {
  const { data_improved_UI } = await LogicVehiclesCarousel()
  return (
    <ShorthandCarousel>
      {data_improved_UI.map((dataVehicle, index) => (
        <CarouselItem
          key={dataVehicle.created}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/${segmento}/vehicles/${index}`}>
            <VehiclesCard {...dataVehicle} />
          </Link>
        </CarouselItem>
      ))}
    </ShorthandCarousel>
  )
}

export default VehiclesCarousel
