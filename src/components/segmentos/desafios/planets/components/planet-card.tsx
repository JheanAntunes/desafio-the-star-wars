import EspadaLuz from '@/components/assets/espada-luz.png'
import ShorthandListItem from '@/components/segmentos/desafios/components/shorthand-list-item'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyList } from '@/components/ui/typography'
import { TypePlanet } from '@/types/Typesfetch'
import { formatedNumber } from '@/utils/formatedNumber'
import Image from 'next/image'

type TypePlanetCardProps = TypePlanet

const PlanetCard = ({
  population,
  climate,
  diameter,
  gravity,
  orbital_period,
  rotation_period,
  terrain
}: TypePlanetCardProps) => {
  return (
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
    </Card>
  )
}

export default PlanetCard
