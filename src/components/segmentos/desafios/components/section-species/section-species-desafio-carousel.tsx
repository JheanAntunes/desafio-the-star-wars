import EspadaLuz from '@/components/assets/espada-luz.png'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import {
  TypographyList,
  TypographyListItem,
  TypographySmall
} from '@/components/ui/typography'
import { formatedNumber } from '@/utils/formatedNumber'
import { TypeModifyingSpecies } from '@/utils/modiying_data_improve_ui'
import Image from 'next/image'
import Link from 'next/link'
import ShorthandListItem from '../shorthand-list-item'
import SubList from './sub-list'

type TypeSectionDesafioPersonCarouselProps = {
  data_Improved_UI: TypeModifyingSpecies
}

function SectionSpeciesDesafioCarousel({
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
            classification,
            designation,
            average_height,
            average_lifespan,
            hair_colors,
            skin_colors,
            language,
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
                        title="A classificação:"
                        caracteristica={classification}
                      />
                      <ShorthandListItem
                        title="A designação:"
                        caracteristica={designation}
                      />
                      <ShorthandListItem
                        title="A altura:"
                        caracteristica={`${formatedNumber(average_height)}`}
                      />
                      <ShorthandListItem
                        title="A expectativa de vida:"
                        caracteristica={`${formatedNumber(average_lifespan)}`}
                      />
                      <TypographyListItem className="text-zinc-700">
                        <div className="flex flex-col">
                          <TypographySmall className="text-zinc-900">
                            Cores de cabelo:
                          </TypographySmall>
                          <SubList
                            dataCaracteristicas={hair_colors.split(',')}
                            break_by_index={1}
                          />
                        </div>
                      </TypographyListItem>
                      <TypographyListItem className="text-zinc-700">
                        <div className="flex flex-col">
                          <TypographySmall className="text-zinc-900">
                            Cores de pele:
                          </TypographySmall>
                          <SubList
                            dataCaracteristicas={skin_colors.split(',')}
                            break_by_index={1}
                          />
                        </div>
                      </TypographyListItem>
                      <ShorthandListItem
                        title="language:"
                        caracteristica={language}
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

export default SectionSpeciesDesafioCarousel
