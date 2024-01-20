import EspadaLuz from '@/components/assets/espada-luz.png'
import ImgRoboDocs from '@/components/assets/img-robo-png.png'
import CardChallenge from '@/components/segmentos/components/card-challenge'
import CardTitleChallenge from '@/components/segmentos/components/card-title-challenge'
import CheckedDesafio from '@/components/segmentos/components/checked-desafio'
import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { CardContent, CardHeader } from '@/components/ui/card'
import {
  TypographyList,
  TypographyListItem,
  TypographySmall
} from '@/components/ui/typography'
import { TypeSpecies } from '@/types/Typesfetch'
import { formatedNumber } from '@/utils/formatedNumber'
import Image from 'next/image'
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
            <Image
              src={EspadaLuz}
              alt=""
              height={32}
              width={32}
              className="object-contain"
            />
          ) : (
            <Image
              src={ImgRoboDocs}
              alt=""
              height={32}
              width={32}
              className="object-contain"
            />
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
          <ShorthandListItem title="language:" caracteristica={language} />
        </TypographyList>
      </CardContent>
    </CardChallenge>
  )
}

export default SpeciesCard
