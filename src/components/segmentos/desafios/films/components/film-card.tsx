import CardChallenge from '@/components/segmentos/components/card-challenge'
import CardTitleChallenge from '@/components/segmentos/components/card-title-challenge'
import CheckedDesafio from '@/components/segmentos/components/checked-desafio'
import ImageEspadaTheme from '@/components/segmentos/components/image-espada-theme'
import ImageRoboTheme from '@/components/segmentos/components/image-robo-theme'
import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { CardContent, CardHeader } from '@/components/ui/card'
import {
  TypographyList,
  TypographyListItem,
  TypographySmall
} from '@/components/ui/typography'
import { TypeFilms } from '@/types/Typesfetch'
import ShorthandListItem from '../../../components/shorthand-list-item'
import SubList from '../../../components/sub-list'

const FilmCard = ({
  title,
  director,
  producer,
  episode_id,
  segmento
}: TypeFilms & { segmento: TypeSegmento }) => {
  const verificatedSegmentoDesafio = segmento === 'desafios'
  return (
    <>
      <CardChallenge caracteristica={title} categoria="challengerFilms">
        <CheckedDesafio caracteristica={title} categoria="challengerFilms" />
        <CardHeader className="pb-0">
          <div className="flex items-center gap-1">
            <CardTitleChallenge
              caracteristica={title}
              categoria="challengerFilms"
              segmento={segmento}
            >
              Desafio
            </CardTitleChallenge>
            {verificatedSegmentoDesafio ? (
              <ImageEspadaTheme />
            ) : (
              <ImageRoboTheme />
            )}
          </div>
        </CardHeader>
        <CardContent>
          <TypographyList className="group-hover:decoration-blue-500">
            <ShorthandListItem title="Diretor:" caracteristica={director} />
            <TypographyListItem className="">
              <div className="flex flex-col">
                <TypographySmall className="text-zinc-800 dark:text-gray-300">
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
      </CardChallenge>
    </>
  )
}

export default FilmCard
