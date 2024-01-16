import SectionCarousel from '@/components/segmentos/components/shorthand-carousel'
import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import VehiclesCard from '../desafios/vehicles/components/vehicles-card'
import { LogicVehiclesCarousel } from '../logic/logic-vehicles-carousel'

async function SectionVehiclesCarousel() {
  const { data_improved_UI } = await LogicVehiclesCarousel()
  return (
    <SectionCarousel>
      {data_improved_UI.map((dataVehicle, index) => (
        <CarouselItem
          key={dataVehicle.created}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/desafios/vehicles/${index}`}>
            <VehiclesCard {...dataVehicle} />
          </Link>
        </CarouselItem>
      ))}
    </SectionCarousel>
  )
}

export default SectionVehiclesCarousel
