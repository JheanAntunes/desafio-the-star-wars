import { buttonVariants } from '@/components/ui/button'
import SkeletonList from '@/components/ui/skeletons/skeleton-list'
import { TypographyH2, TypographyList } from '@/components/ui/typography'
import { TypeFetch, TypePerson } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_Person_improve_UI } from '@/utils/modiying_data_improve_ui'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'
import { Fragment, Suspense } from 'react'
import DescriptionHomeWorld from '../../../components/description-homeworld'
import DescriptionSubListFilms from '../../../components/description-sub-list-film'
import DescriptionSubListSpecies from '../../../components/description-sub-list-species'
import DescriptionSubListStarships from '../../../components/description-sub-list-starships'
import DescriptionSubListVehicles from '../../../components/description-sub-list-vehicles'
import ShorthandListItem from '../../../components/shorthand-list-item'

type TypeDesafioPersonDescriptionProps = {
  id: string
  page: string
}

const DesafioPersonDescription = async ({
  id,
  page
}: TypeDesafioPersonDescriptionProps) => {
  const { results } = await fetchGet<TypeFetch<TypePerson>>(
    `${BASE_URL_API}/people/?page=${page}&format=json`
  )
  const dataPerson = results[Number(id)]

  const dataFormated = modifying_data_Person_improve_UI([dataPerson])

  const isNextIndex = Number(id) + 1
  const NextDesafio = isNextIndex < results.length

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <TypographyH2 className="order-2 md:order-1">Descrição</TypographyH2>
        {NextDesafio && (
          <Link
            href={`/desafios/person/${isNextIndex}?page=${page}`}
            className={buttonVariants({
              variant: 'outline',
              className: 'order-1 flex gap-1 font-sans md:order-2'
            })}
          >
            Próximo Desafio <NavigationIcon width={20} height={20} />
          </Link>
        )}
      </div>
      <TypographyList>
        {dataFormated.map(
          ({
            created,
            edited,
            birth_year,
            eye_color,
            gender,
            hair_color,
            height,
            mass,
            skin_color,
            species,
            films,
            starships,
            vehicles,
            homeworld
          }) => {
            return (
              <Fragment
                key={created + edited + skin_color + eye_color + hair_color}
              >
                <ShorthandListItem
                  title="O ano de nascimento da pessoa:"
                  caracteristica={birth_year}
                />
                <ShorthandListItem
                  title="A cor dos olhos desta pessoa:"
                  caracteristica={eye_color}
                />
                <ShorthandListItem
                  title="O sexo desta pessoa:"
                  caracteristica={gender}
                />
                <ShorthandListItem
                  title="A cor do cabelo desta pessoa:"
                  caracteristica={hair_color}
                />
                <ShorthandListItem
                  title="A altura da pessoa em centímetros:"
                  caracteristica={height}
                />
                <ShorthandListItem
                  title="A massa da pessoa em quilogramas:"
                  caracteristica={mass}
                />
                <ShorthandListItem
                  title="A cor da pele desta pessoa:"
                  caracteristica={skin_color}
                />
                {homeworld && (
                  <Suspense fallback={<SkeletonList />}>
                    <DescriptionHomeWorld
                      homeworld={homeworld}
                      title="um planeta onde esta pessoa nasceu ou habita:"
                    />
                  </Suspense>
                )}
                {films && films.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DescriptionSubListFilms
                      urls={films}
                      title="filmes em que essa pessoa esteve:"
                    />
                  </Suspense>
                )}
                {species && species.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DescriptionSubListSpecies
                      urls={species}
                      title="Espécies às quais esta pessoa pertence:"
                    />
                  </Suspense>
                )}
                {starships && starships.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DescriptionSubListStarships
                      urls={starships}
                      title="Naves estelares que esta pessoa pilotou:"
                    />
                  </Suspense>
                )}
                {vehicles && vehicles.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DescriptionSubListVehicles
                      urls={vehicles}
                      title="Veículos que essa pessoa pilotou:"
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

export default DesafioPersonDescription
