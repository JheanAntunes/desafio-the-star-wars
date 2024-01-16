import SkeletonList from '@/components/ui/skeletons/skeleton-list'
import { TypographyList, TypographyListItem } from '@/components/ui/typography'
import { TypeVehicle } from '@/types/Typesfetch'
import { formatedNumber } from '@/utils/formatedNumber'
import { Fragment, Suspense } from 'react'
import DescriptionSubListPerson from '../desafios/planets/[id]/components/description-subList-person'
import DescriptionSubListFilms from './description-sub-list-film'
import ShorthandListItem from './shorthand-list-item'
import SubList from './sub-list'

type TypeListVehicleProps = {
  dataVehicle: TypeVehicle[]
}
const ListVehicle = ({ dataVehicle }: TypeListVehicleProps) => {
  return (
    <TypographyList className="my-2 w-full max-w-3xl">
      {dataVehicle.map(
        ({
          created,
          edited,
          url,
          vehicle_class,
          manufacturer,
          length,
          cost_in_credits,
          crew,
          passengers,
          max_atmosphering_speed,
          cargo_capacity,
          consumables,
          films,
          pilots
        }) => {
          return (
            <Fragment key={created + edited + url}>
              <ShorthandListItem
                title="A classe deste veículo, como 'Rodas' ou 'Repulsorcraft':"
                caracteristica={vehicle_class}
              />
              <ShorthandListItem
                title="O comprimento deste veículo em metros:"
                caracteristica={length}
              />
              <ShorthandListItem
                title="O número de pessoas necessárias para operar ou pilotar este veículo:"
                caracteristica={crew}
              />
              <ShorthandListItem
                title="O número de pessoas não essenciais que este veículo pode transportar:"
                caracteristica={passengers}
              />
              <ShorthandListItem
                title="O número máximo de quilogramas que este veículo pode transportar:"
                caracteristica={formatedNumber(cargo_capacity)}
              />
              <ShorthandListItem
                title="O período máximo que este veículo pode fornecer consumíveis para toda a sua tripulação sem precisar reabastecer:"
                caracteristica={consumables}
              />
              <ShorthandListItem
                title="A velocidade máxima deste veículo na atmosfera:"
                caracteristica={formatedNumber(max_atmosphering_speed)}
              />
              <ShorthandListItem
                title="O custo deste veículo novo, em Créditos Galácticos:"
                caracteristica={formatedNumber(cost_in_credits)}
              />
              <TypographyListItem className="text-sm font-medium leading-none text-zinc-900">
                O(s) fabricante(s) deste veículo:
                <SubList dataCaracteristicas={manufacturer.split(',')} />
              </TypographyListItem>
              {pilots && pilots.length > 0 && (
                <Suspense fallback={<SkeletonList />}>
                  <DescriptionSubListPerson
                    urls={pilots}
                    title="Pessoas pelos quais este veículo foi pilotado:"
                  />
                </Suspense>
              )}
              {films && films.length > 0 && (
                <Suspense fallback={<SkeletonList />}>
                  <DescriptionSubListFilms
                    urls={films}
                    title="Filmes nos quais este veículo apareceu:"
                  />
                </Suspense>
              )}
            </Fragment>
          )
        }
      )}
    </TypographyList>
  )
}

export default ListVehicle
