import EspadaLuz from '@/components/assets/espada-luz.png'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TypographyList,
  TypographyListItem,
  TypographySmall
} from '@/components/ui/typography'
import { TypeSpecies } from '@/types/Typesfetch'
import { formatedNumber } from '@/utils/formatedNumber'
import Image from 'next/image'
import SubList from '../../components/sub-list'
import ShorthandListItem from '../../components/shorthand-list-item'

const SpeciesCard = ({
  classification,
  designation,
  average_height,
  average_lifespan,
  hair_colors,
  skin_colors,
  language
}: TypeSpecies) => {
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
    </Card>
  )
}

export default SpeciesCard
