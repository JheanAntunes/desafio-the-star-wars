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
import { TypeSpecies } from '@/types/Typesfetch'
import { formatedNumber } from '@/utils/formatedNumber'
import ShorthandListItem from '../../../components/shorthand-list-item'
import SubList from '../../../components/sub-list'

const SpeciesCard = ({
  name,
  segmento,
  classification,
  designation,
  average_height,
  average_lifespan,
  hair_colors,
  skin_colors,
  language
}: TypeSpecies & { segmento: TypeSegmento }) => {
  const verificatedSegmentoDesafios = segmento === 'desafios'

  return (
    <CardChallenge caracteristica={name} categoria="challengerPlanets">
      <CheckedDesafio caracteristica={name} categoria="challengerPlanets" />
      <CardHeader className="pb-0">
        <div className="flex items-center gap-1">
          <CardTitleChallenge
            caracteristica={name}
            categoria="challengerPlanets"
            segmento={segmento}
          >
            Desafio
          </CardTitleChallenge>
          {verificatedSegmentoDesafios ? (
            <ImageEspadaTheme />
          ) : (
            <ImageRoboTheme />
          )}
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
          <TypographyListItem>
            <div className="flex flex-col">
              <TypographySmall>Cores de cabelo:</TypographySmall>
              <SubList
                dataCaracteristicas={hair_colors.split(',')}
                break_by_index={1}
              />
            </div>
          </TypographyListItem>
          <TypographyListItem>
            <div className="flex flex-col">
              <TypographySmall>Cores de pele:</TypographySmall>
              <SubList
                dataCaracteristicas={skin_colors.split(',')}
                break_by_index={1}
              />
            </div>
          </TypographyListItem>
          <ShorthandListItem title="language:" caracteristica={language} />
        </TypographyList>
      </CardContent>
    </CardChallenge>
  )
}

export default SpeciesCard
