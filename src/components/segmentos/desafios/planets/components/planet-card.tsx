import EspadaLuz from '@/components/assets/espada-luz.png'
import ImgRoboDocs from '@/components/assets/img-robo-png.png'
import CardChallenge from '@/components/segmentos/components/card-challenge'
import CardTitleChallenge from '@/components/segmentos/components/card-title-challenge'
import CheckedDesafio from '@/components/segmentos/components/checked-desafio'
import ShorthandListItem from '@/components/segmentos/components/shorthand-list-item'
import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { CardContent, CardHeader } from '@/components/ui/card'
import { TypographyList } from '@/components/ui/typography'
import { TypePlanet } from '@/types/Typesfetch'
import { formatedNumber } from '@/utils/formatedNumber'
import Image from 'next/image'

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
