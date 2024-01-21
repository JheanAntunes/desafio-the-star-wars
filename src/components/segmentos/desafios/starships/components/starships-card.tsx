import CardChallenge from '@/components/segmentos/components/card-challenge'
import CardTitleChallenge from '@/components/segmentos/components/card-title-challenge'
import CheckedDesafio from '@/components/segmentos/components/checked-desafio'
import ImageEspadaTheme from '@/components/segmentos/components/image-espada-theme'
import ImageRoboTheme from '@/components/segmentos/components/image-robo-theme'
import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { CardContent, CardHeader } from '@/components/ui/card'
import { TypographyList } from '@/components/ui/typography'
import { TypeStarships } from '@/types/Typesfetch'
import { formatedNumber } from '@/utils/formatedNumber'
import ShorthandListItem from '../../../components/shorthand-list-item'

const StarshipsCard = ({
  name,
  segmento,
  model,
  starship_class,
  cost_in_credits,
  length,
  max_atmosphering_speed
}: TypeStarships & { segmento: TypeSegmento }) => {
  const verificatedSegmentoDesafios = segmento === 'desafios'
  return (
    <CardChallenge caracteristica={name} categoria="challengerStarships">
      <CheckedDesafio caracteristica={name} categoria="challengerStarships" />
      <CardHeader className="pb-0">
        <div className="flex items-center gap-1">
          <CardTitleChallenge
            caracteristica={name}
            categoria="challengerStarships"
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
          <ShorthandListItem title="O modelo:" caracteristica={model} />
          <ShorthandListItem
            title="A classe:"
            caracteristica={starship_class}
          />
          <ShorthandListItem
            title="O custo:"
            caracteristica={formatedNumber(cost_in_credits)}
          />
          <ShorthandListItem
            title="O comprimento em metros:"
            caracteristica={`${formatedNumber(length)}m`}
          />
          <ShorthandListItem
            title="A velocidade máxima:"
            caracteristica={max_atmosphering_speed}
          />
        </TypographyList>
      </CardContent>
    </CardChallenge>
  )
}

export default StarshipsCard
