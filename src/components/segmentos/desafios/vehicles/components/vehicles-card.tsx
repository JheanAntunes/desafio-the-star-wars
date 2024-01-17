import EspadaLuz from '@/components/assets/espada-luz.png'
import ImgRoboDocs from '@/components/assets/img-robo-png.png'
import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyList } from '@/components/ui/typography'
import { TypeVehicle } from '@/types/Typesfetch'
import { formatedNumber } from '@/utils/formatedNumber'
import Image from 'next/image'
import ShorthandListItem from '../../../components/shorthand-list-item'

const VehiclesCard = ({
  name,
  segmento,
  model,
  vehicle_class,
  cost_in_credits,
  length,
  max_atmosphering_speed
}: TypeVehicle & { segmento: TypeSegmento }) => {
  const verificatedSegmentoDesafios = segmento === 'desafios'
  return (
    <>
      <Card className="bg-transparent transition-colors group-hover:border-blue-500">
        <CardHeader className="pb-0">
          <div className="flex items-center gap-1">
            <CardTitle className="font-sans font-normal transition-colors group-hover:text-blue-500">
              {verificatedSegmentoDesafios ? 'Desafio' : name}
            </CardTitle>
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
            <ShorthandListItem title="O modelo:" caracteristica={model} />
            <ShorthandListItem
              title="A classe:"
              caracteristica={vehicle_class}
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
    </>
  )
}

export default VehiclesCard
