import EspadaLuz from '@/components/assets/espada-luz.png'
import ImgRoboDocs from '@/components/assets/img-robo-png.png'
import ShorthandListItem from '@/components/segmentos/components/shorthand-list-item'
import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyList } from '@/components/ui/typography'
import { TypePerson } from '@/types/Typesfetch'
import Image from 'next/image'

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
      <Card className="bg-transparent transition-colors group-hover:border-blue-500">
        <CardHeader className="pb-0">
          <div className="flex items-center gap-1">
            <CardTitle className="font-sans font-normal transition-colors group-hover:text-blue-500">
              {segmento === 'desafios' ? 'Desafio' : name}
            </CardTitle>
            {segmento === 'desafios' ? (
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
      </Card>
    </>
  )
}

export default PersonCard
