import { CarouselItem } from '@/components/ui/carousel'
import PersonCard from '../../person/components/PersonCard'
import SectionDesafioCarousel from '../section-desafio-carousel'
import LogicSectionDesafioPersonCarousel from './logic-section-desafio-person-carousel'

const SectionDesafioPersonCarousel = async () => {
  const { data_Improved_UI } = await LogicSectionDesafioPersonCarousel()
  return (
    <SectionDesafioCarousel>
      {data_Improved_UI.map((dataPerson) => (
        <CarouselItem
          key={dataPerson.created}
          className="pl-8 md:basis-1/2 lg:basis-1/3"
        >
          <PersonCard dataFormatedImproveUi={dataPerson} />
        </CarouselItem>
      ))}
    </SectionDesafioCarousel>
  )
}

export default SectionDesafioPersonCarousel
