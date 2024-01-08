import { CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import PersonCard from '../../person/components/PersonCard'
import SectionDesafioCarousel from '../section-desafio-carousel'
import LogicSectionDesafioPersonCarousel from './logic-section-desafio-person-carousel'

const SectionDesafioPersonCarousel = async () => {
  const { data_Improved_UI } = await LogicSectionDesafioPersonCarousel()
  return (
    <SectionDesafioCarousel>
      {data_Improved_UI.map((dataPerson, index) => (
        <CarouselItem
          key={dataPerson.created}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <Link className="group" href={`/desafios/person/${index + 1}`}>
            <PersonCard dataFormatedImproveUi={dataPerson} />
          </Link>
        </CarouselItem>
      ))}
    </SectionDesafioCarousel>
  )
}

export default SectionDesafioPersonCarousel
