import { buttonVariants } from '@/components/ui/button'
import SkeletonList from '@/components/ui/skeletons/skeleton-list'
import {
  TypographyH2,
  TypographyList,
  TypographyListItem,
  TypographyP,
  TypographySmall
} from '@/components/ui/typography'
import { TypeFetch, TypeFilms } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_Films_improve_UI } from '@/utils/modiying_data_improve_ui'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'
import { Fragment, Suspense } from 'react'
import DescriptionSubListPlanet from '../../../components/description-sub-list-planet'
import DescriptionSubListSpecies from '../../../components/description-sub-list-species'
import DescriptionSubListStarships from '../../../components/description-sub-list-starships'
import DescriptionSubListVehicles from '../../../components/description-sub-list-vehicles'
import SubList from '../../../components/section-species/sub-list'
import ShorthandListItem from '../../../components/shorthand-list-item'
import DescriptionSubListPerson from '../../../planets/[id]/components/description-subList-person'

type TypeDesafioFilmDescriptionProps = {
  id: string
  page: string
}

const DesafioFilmDescription = async ({
  id,
  page
}: TypeDesafioFilmDescriptionProps) => {
  const { results } = await fetchGet<TypeFetch<TypeFilms>>(
    `${BASE_URL_API}/films/?page=${page}&format=json`
  )

  const dataFilm = results[Number(id)]

  const dataFormated = modifying_data_Films_improve_UI([dataFilm])

  const isNextIndex = Number(id) + 1
  const NextDesafio = isNextIndex < results.length

  return (
    <section className="mt-8 flex flex-col">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <TypographyH2 className="order-2 md:order-1">Descrição</TypographyH2>
        {NextDesafio && (
          <Link
            href={`/desafios/films/${isNextIndex}?page=${page}`}
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
            episode_id,
            opening_crawl,
            director,
            producer,
            release_date,
            species,
            starships,
            vehicles,
            characters,
            planets
          }) => {
            return (
              <Fragment key={created + edited + url}>
                <TypographyListItem>
                  O número do episódio deste filme:
                  {episode_id}
                </TypographyListItem>
                <ShorthandListItem
                  title="O nome do diretor deste filme:"
                  caracteristica={director}
                />
                <TypographyListItem>
                  O(s) nome(s) do(s) produtor(es) deste filme:
                  <SubList dataCaracteristicas={producer.split(',')} />
                </TypographyListItem>
                <ShorthandListItem
                  title="O formato de data ISO 8601 de lançamento do filme no país do criador original:"
                  caracteristica={release_date}
                />
                {species && species.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DescriptionSubListSpecies
                      urls={species}
                      title="Espécies que estão neste filme"
                    />
                  </Suspense>
                )}
                {starships && starships.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DescriptionSubListStarships
                      urls={starships}
                      title="Naves estelares que estão neste filme"
                    />
                  </Suspense>
                )}
                {vehicles && vehicles.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DescriptionSubListVehicles
                      urls={vehicles}
                      title="Veículos que estão neste filme:"
                    />
                  </Suspense>
                )}
                {characters && characters.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DescriptionSubListPerson
                      urls={characters}
                      title="Pessoas que estão neste filme:"
                    />
                  </Suspense>
                )}
                {planets && planets.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DescriptionSubListPlanet
                      urls={planets}
                      title="Planetários que estão neste filme:"
                    />
                  </Suspense>
                )}
                <TypographyListItem>
                  <TypographySmall className="font-sans">
                    Os parágrafos iniciais no início deste filme:
                  </TypographySmall>
                  <TypographyP className="text-sm">{opening_crawl}</TypographyP>
                </TypographyListItem>
              </Fragment>
            )
          }
        )}
      </TypographyList>
    </section>
  )
}

export default DesafioFilmDescription
