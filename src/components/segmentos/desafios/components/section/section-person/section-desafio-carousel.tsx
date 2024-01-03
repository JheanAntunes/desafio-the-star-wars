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
import { TypeModifyingPerson } from '@/utils/modiying_data_improve_ui'
import Image from 'next/image'
import Link from 'next/link'
import ShorthandListItem from '../shorthand-list-item'

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
        {data_Improved_UI.map(
          ({
            birth_year,
            eye_color,
            hair_color,
            gender,
            height,
            mass,
            skin_color,
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
                        title="Ano de nascimento:"
                        caracteristica={birth_year}
                      />
                      <ShorthandListItem
                        title="A cor dos olhos:"
                        caracteristica={eye_color}
                      />
                      <ShorthandListItem
                        title="A cor do cabelo:"
                        caracteristica={hair_color}
                      />
                      <ShorthandListItem
                        title="Gênero:"
                        caracteristica={gender}
                      />
                      <ShorthandListItem
                        title="A altura em centímetros:"
                        caracteristica={`${height}cm`}
                      />
                      <ShorthandListItem
                        title="A massa em quilogramas:"
                        caracteristica={`${mass}kg`}
                      />
                      <ShorthandListItem
                        title="A cor da pele:"
                        caracteristica={skin_color}
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

export default SectionDesafioCarousel
