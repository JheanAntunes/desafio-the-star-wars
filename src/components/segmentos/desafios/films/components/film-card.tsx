import EspadaLuz from '@/components/assets/espada-luz.png'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TypographyList,
  TypographyListItem,
  TypographySmall
} from '@/components/ui/typography'
import { TypeFilms } from '@/types/Typesfetch'
import Image from 'next/image'
import Link from 'next/link'
import SubList from '../../components/section-species/sub-list'
import ShorthandListItem from '../../components/shorthand-list-item'

const FilmCard = ({ director, producer, episode_id }: TypeFilms) => {
  return (
    <>
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
              <ShorthandListItem title="Diretor:" caracteristica={director} />
              <TypographyListItem className="text-zinc-700">
                <div className="flex flex-col">
                  <TypographySmall className="text-zinc-900">
                    produtor(es)
                  </TypographySmall>
                  <SubList
                    dataCaracteristicas={producer.split(' ')}
                    break_by_index={1}
                  />
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
    </>
  )
}

export default FilmCard
