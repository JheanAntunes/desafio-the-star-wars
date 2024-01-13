import { buttonVariants } from '@/components/ui/button'
import SkeletonList from '@/components/ui/skeletons/skeleton-list'
import {
  TypographyH2,
  TypographyList,
  TypographyListItem
} from '@/components/ui/typography'
import { TypeFetch, TypePlanet } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_Planet_improve_UI } from '@/utils/modiying_data_improve_ui'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'
import { Fragment, Suspense } from 'react'
import SubList from '../../../components/section-species/sub-list'
import ShorthandListItem from '../../../components/shorthand-list-item'
import DesafioPersonDescriptionSubListFilms from '../../../person/[id]/components/desafio-person-description-sub-list-film'
import DesafioPlanetDescriptionSubListResidents from './desafio-planets-description-subList-residents'

type TypeDesafioPlanetDescriptionProps = {
  id: string
  page: string
}

const DesafioPlanetDescription = async ({
  id,
  page
}: TypeDesafioPlanetDescriptionProps) => {
  const { results } = await fetchGet<TypeFetch<TypePlanet>>(
    `${BASE_URL_API}/planets/?page=${page}&format=json`
  )
  const dataPlanet = results[Number(id)]

  const dataFormated = modifying_data_Planet_improve_UI([dataPlanet])

  const isNextIndex = Number(id) + 1
  const NextDesafio = isNextIndex < results.length

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <TypographyH2 className="order-2 md:order-1">Descrição</TypographyH2>
        {NextDesafio && (
          <Link
            href={`/desafios/planets/${isNextIndex}?page=${page}`}
            className={buttonVariants({
              variant: 'outline',
              className: 'order-1 flex gap-1 font-sans md:order-2'
            })}
          >
            Próximo Desafio <NavigationIcon width={20} height={20} />
          </Link>
        )}
      </div>
      <TypographyList className="my-2">
        {dataFormated.map(
          ({
            created,
            edited,
            climate,
            diameter,
            gravity,
            orbital_period,
            population,
            rotation_period,
            surface_water,
            terrain,
            url,
            residents,
            films
          }) => {
            return (
              <Fragment key={created + edited + climate + diameter + url}>
                <ShorthandListItem
                  title="O diâmetro deste planeta em quilômetros:"
                  caracteristica={diameter}
                />
                <ShorthandListItem
                  title="O número de horas padrão que este planeta leva para completar uma única rotação em seu eixo:"
                  caracteristica={rotation_period}
                />
                <ShorthandListItem
                  title="O número de dias padrão que este planeta leva para completar uma única órbita de sua estrela local:"
                  caracteristica={orbital_period}
                />
                <ShorthandListItem
                  title="Um número que denota a gravidade deste planeta, onde '1' é normal ou 1 padrão G. '2' é duas vezes ou 2 Gs padrão. '0,5' é metade ou 0,5 Gs padrão:"
                  caracteristica={gravity}
                />
                <ShorthandListItem
                  title="A população média de seres sencientes que habitam este planeta:"
                  caracteristica={population}
                />
                <ShorthandListItem
                  title="O clima deste planeta. Separados por vírgula se forem diversos:"
                  caracteristica={climate}
                />
                <TypographyListItem className="text-sm font-medium leading-none text-zinc-900">
                  O terreno deste planeta:
                  <SubList dataCaracteristicas={terrain.split(',')} />
                </TypographyListItem>
                <ShorthandListItem
                  title="A porcentagem da superfície do planeta que contém água ou corpos d'água que ocorrem naturalmente:"
                  caracteristica={surface_water}
                />
                {films && films.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DesafioPersonDescriptionSubListFilms urls={films} />
                  </Suspense>
                )}
                {residents && residents.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DesafioPlanetDescriptionSubListResidents
                      urls={residents}
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

export default DesafioPlanetDescription
