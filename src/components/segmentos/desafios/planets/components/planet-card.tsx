import CardChallenge from '@/components/segmentos/components/card-challenge'
import CardTitleChallenge from '@/components/segmentos/components/card-title-challenge'
import CheckedDesafio from '@/components/segmentos/components/checked-desafio'
import ImageEspadaTheme from '@/components/segmentos/components/image-espada-theme'
import ImageRoboTheme from '@/components/segmentos/components/image-robo-theme'
import ShorthandListItem from '@/components/segmentos/components/shorthand-list-item'
import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { CardContent, CardHeader } from '@/components/ui/card'
import { TypographyList } from '@/components/ui/typography'
import { TypePlanet } from '@/types/Typesfetch'
import { formatedNumber } from '@/utils/formatedNumber'

type TypePlanetCardProps = TypePlanet & { segmento: TypeSegmento }

const PlanetCard = ({
  name,
  segmento,
  population,
  climate,
  diameter,
  gravity,
  orbital_period,
  rotation_period,
  terrain
}: TypePlanetCardProps) => {
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
            {verificatedSegmentoDesafios ? 'Desafio' : name}
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
            title="População:"
            caracteristica={formatedNumber(population)}
          />
          <ShorthandListItem title="Clima:" caracteristica={climate} />
          <ShorthandListItem
            title="Diâmetro:"
            caracteristica={formatedNumber(diameter)}
          />
          <ShorthandListItem
            title="Gravidade:"
            caracteristica={formatedNumber(gravity)}
          />
          <ShorthandListItem
            title="Periodo orbital:"
            caracteristica={`${formatedNumber(orbital_period)}`}
          />
          <ShorthandListItem
            title="Periodo de Rotação:"
            caracteristica={`${rotation_period}`}
          />
          <ShorthandListItem title="Terreno:" caracteristica={terrain} />
        </TypographyList>
      </CardContent>
    </CardChallenge>
  )
}

export default PlanetCard
