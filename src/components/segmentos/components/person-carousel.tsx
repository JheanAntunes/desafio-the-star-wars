import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import LogicPersonCarousel from '../../logic/logic-person-carousel'
import PersonCard from '../desafios/person/components/PersonCard'
import { TypeSegmento } from '../types/segmento'
import ShorthandCarousel from './shorthand-carousel'

type TypePersonCarouselProps = {
  segmento: TypeSegmento
}
const PersonCarousel = async ({ segmento }: TypePersonCarouselProps) => {
  const { data_Improved_UI } = await LogicPersonCarousel()
  return (
    <ShorthandCarousel>
      {data_Improved_UI.map((dataPerson, index) => (
        <CarouselItem
          key={dataPerson.created}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/${segmento}/person/${index}`}>
            <PersonCard
              dataFormatedImproveUi={dataPerson}
              segmento={segmento}
            />
          </Link>
        </CarouselItem>
      ))}
    </ShorthandCarousel>
  )
}

export default PersonCarousel
