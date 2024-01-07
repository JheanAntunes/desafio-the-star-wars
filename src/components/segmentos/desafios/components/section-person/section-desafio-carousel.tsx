import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { TypeModifyingPerson } from '@/utils/modiying_data_improve_ui'
import PersonCard from '../../person/components/PersonCard'

type TypeSectionDesafioPersonCarouselProps = {
  data_Improved_UI: TypeModifyingPerson
}

function SectionDesafioCarousel({
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
        {data_Improved_UI.map((dataPerson) => (
          <CarouselItem
            key={dataPerson.created}
            className="pl-8 md:basis-1/2 lg:basis-1/3"
          >
            <PersonCard dataFormatedImproveUi={dataPerson} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default SectionDesafioCarousel
