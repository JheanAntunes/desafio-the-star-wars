import { buttonVariants } from '@/components/ui/button'
import SkeletonList from '@/components/ui/skeletons/skeleton-list'
import {
  TypographyH2,
  TypographyList,
  TypographyListItem
} from '@/components/ui/typography'
import { TypeFetch, TypeVehicle } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { formatedNumber } from '@/utils/formatedNumber'
import { modifying_data_VEHICLES_improve_UI } from '@/utils/modiying_data_improve_ui'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'
import { Fragment, Suspense } from 'react'
import DescriptionSubListFilms from '../../../components/description-sub-list-film'
import SubList from '../../../components/section-species/sub-list'
import ShorthandListItem from '../../../components/shorthand-list-item'
import DescriptionSubListPerson from '../../../planets/[id]/components/description-subList-person'

type TypeVehicleDescriptionProps = {
  id: string
  page: string
}

const VehicleDescription = async ({
  id,
  page
}: TypeVehicleDescriptionProps) => {
  const { results } = await fetchGet<TypeFetch<TypeVehicle>>(
    `${BASE_URL_API}/vehicles/?page=${page}&format=json`
  )

  const dataVehicle = results[Number(id)]

  const dataFormated = modifying_data_VEHICLES_improve_UI([dataVehicle])

  const isNextIndex = Number(id) + 1
  const NextDesafio = isNextIndex < results.length

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <TypographyH2 className="order-2 md:order-1">Descrição</TypographyH2>
        {NextDesafio && (
          <Link
            href={`/desafios/vehicles/${isNextIndex}?page=${page}`}
            className={buttonVariants({
              variant: 'outline',
              className: 'order-1 flex gap-1 font-sans md:order-2'
            })}
          >
            Próximo Desafio <NavigationIcon width={20} height={20} />
          </Link>
        )}
      </div>
      <TypographyList className="my-2 w-full max-w-3xl">
        {dataFormated.map(
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
    </section>
  )
}

export default VehicleDescription
