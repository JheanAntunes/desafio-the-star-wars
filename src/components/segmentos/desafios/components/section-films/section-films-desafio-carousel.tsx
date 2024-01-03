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
import { TypeModifyingFilms } from '@/utils/modiying_data_improve_ui'
import Image from 'next/image'
import Link from 'next/link'
import ShorthandListItem from '../shorthand-list-item'

type TypeSectionDesafioPersonCarouselProps = {
  data_Improved_UI: TypeModifyingFilms
}

function SectionFilmsDesafioCarousel({
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
        {data_Improved_UI.map(({ producer, episode_id, director, created }) => (
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
                      title="Diretor:"
                      caracteristica={director}
                    />
                    <TypographyListItem className="text-zinc-700">
                      <div className="flex flex-col">
                        <TypographySmall className="text-zinc-900">
                          produtor(es)
                        </TypographySmall>
                        <TypographyList className="my-2">
                          {producer.split(' ').map((produtorNome, index) => {
                            // Show two name producers in card
                            if (index > 1) return null
                            return (
                              <TypographyListItem key={produtorNome}>
                                <TypographySmall className="text-zinc-900">
                                  {produtorNome}
                                </TypographySmall>
                              </TypographyListItem>
                            )
                          })}
                          <TypographyListItem>
                            <TypographySmall className="text-zinc-900">
                              E mais {producer.split(' ').length} produtor(es)
                            </TypographySmall>
                          </TypographyListItem>
                        </TypographyList>
                      </div>
                    </TypographyListItem>
                    <ShorthandListItem
                      title="O número do episódio deste filme:"
                      caracteristica={episode_id.toString()}
                    />
                  </TypographyList>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default SectionFilmsDesafioCarousel
