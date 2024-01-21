import CardChallenge from '@/components/segmentos/components/card-challenge'
import CardTitleChallenge from '@/components/segmentos/components/card-title-challenge'
import CheckedDesafio from '@/components/segmentos/components/checked-desafio'
import ImageEspadaTheme from '@/components/segmentos/components/image-espada-theme'
import ImageRoboTheme from '@/components/segmentos/components/image-robo-theme'
import ShorthandListItem from '@/components/segmentos/components/shorthand-list-item'
import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { CardContent, CardHeader } from '@/components/ui/card'
import { TypographyList } from '@/components/ui/typography'
import { TypePerson } from '@/types/Typesfetch'

type TypePersonCardProps = {
  dataFormatedImproveUi: TypePerson
  segmento: TypeSegmento
}

const PersonCard = ({
  dataFormatedImproveUi,
  segmento
}: TypePersonCardProps) => {
  const {
    name,
    birth_year,
    eye_color,
    hair_color,
    gender,
    height,
    mass,
    skin_color
  } = dataFormatedImproveUi
  return (
    <>
      <CardChallenge caracteristica={name} categoria="challengerPersons">
        <CheckedDesafio caracteristica={name} categoria="challengerPersons" />
        <CardHeader className="pb-0">
          <div className="flex items-center gap-1">
            <CardTitleChallenge
              caracteristica={name}
              categoria="challengerPersons"
              segmento={segmento}
            >
              Desafio
            </CardTitleChallenge>
            {segmento === 'desafios' ? (
              <ImageEspadaTheme />
            ) : (
              <ImageRoboTheme />
            )}
          </div>
        </CardHeader>
        <CardContent>
          <TypographyList>
            <ShorthandListItem
              title="Ano de nascimento:"
              caracteristica={birth_year}
            />
            <ShorthandListItem
              title="A cor dos olhos:"
              caracteristica={eye_color}
            />
            <ShorthandListItem
              title="A cor do cabelo:"
              caracteristica={hair_color}
            />
            <ShorthandListItem title="Gênero:" caracteristica={gender} />
            <ShorthandListItem
              title="A altura em centímetros:"
              caracteristica={`${height}cm`}
            />
            <ShorthandListItem
              title="A massa em quilogramas:"
              caracteristica={`${mass}kg`}
            />
            <ShorthandListItem
              title="A cor da pele:"
              caracteristica={skin_color}
            />
          </TypographyList>
        </CardContent>
      </CardChallenge>
    </>
  )
}

export default PersonCard
