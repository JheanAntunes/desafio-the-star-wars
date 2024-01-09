import EspadaLuz from '@/components/assets/espada-luz.png'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyList } from '@/components/ui/typography'
import { TypeStarships } from '@/types/Typesfetch'
import { formatedNumber } from '@/utils/formatedNumber'
import Image from 'next/image'
import ShorthandListItem from '../../components/shorthand-list-item'

const StarshipsCard = ({
  model,
  starship_class,
  cost_in_credits,
  length,
  max_atmosphering_speed
}: TypeStarships) => {
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
    </Card>
  )
}

export default StarshipsCard
