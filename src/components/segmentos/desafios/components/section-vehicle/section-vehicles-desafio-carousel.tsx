import EspadaLuz from '@/components/assets/espada-luz.png'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { TypographyList } from '@/components/ui/typography'
import { formatedNumber } from '@/utils/formatedNumber'
import { TypeModifyingVehicles } from '@/utils/modiying_data_improve_ui'
import Image from 'next/image'
import Link from 'next/link'
import ShorthandListItem from '../shorthand-list-item'

type TypeSectionDesafioPersonCarouselProps = {
  data_Improved_UI: TypeModifyingVehicles
}

function SectionVehiclesDesafioCarousel({
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
        {data_Improved_UI.map(
          ({
            model,
            vehicle_class,
            length,
            cost_in_credits,
            max_atmosphering_speed,
            created
          }) => (
            <CarouselItem
              key={created}
              className="pl-8 md:basis-1/2 lg:basis-1/3"
            >
              <Link href="#" className="group">
                <Card className="bg-transparent transition-colors group-hover:border-blue-500">
                  <CardHeader className="pb-0">
                    <div className="flex items-center gap-1">
                      <CardTitle className="font-sans font-normal transition-colors group-hover:text-blue-500">
                        Desafio
                      </CardTitle>
                      <Image
                        src={EspadaLuz}
                        alt=""
                        height={32}
                        width={32}
                        className="object-contain"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <TypographyList className="group-hover:decoration-blue-500">
                      <ShorthandListItem
                        title="O modelo:"
                        caracteristica={model}
                      />
                      <ShorthandListItem
                        title="A classe:"
                        caracteristica={vehicle_class}
                      />
                      <ShorthandListItem
                        title="O custo:"
                        caracteristica={formatedNumber(cost_in_credits)}
                      />
                      <ShorthandListItem
                        title="O comprimento em metros:"
                        caracteristica={`${formatedNumber(length)}m`}
                      />
                      <ShorthandListItem
                        title="A velocidade máxima:"
                        caracteristica={max_atmosphering_speed}
                      />
                    </TypographyList>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default SectionVehiclesDesafioCarousel
