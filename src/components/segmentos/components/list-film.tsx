import SkeletonList from '@/components/ui/skeletons/skeleton-list'
import {
  TypographyList,
  TypographyListItem,
  TypographyP,
  TypographySmall
} from '@/components/ui/typography'
import { TypeFilms } from '@/types/Typesfetch'
import { Fragment, Suspense } from 'react'
import DescriptionSubListPerson from '../desafios/planets/[id]/components/description-subList-person'
import DescriptionSubListPlanet from './description-sub-list-planet'
import DescriptionSubListSpecies from './description-sub-list-species'
import DescriptionSubListStarships from './description-sub-list-starships'
import DescriptionSubListVehicles from './description-sub-list-vehicles'
import ShorthandListItem from './shorthand-list-item'
import SubList from './sub-list'

type TypeListFilmProps = {
  dataFilm: TypeFilms[]
}
const ListFilm = ({ dataFilm }: TypeListFilmProps) => {
  return (
    <TypographyList className="my-2 w-full max-w-3xl">
      {dataFilm.map(
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
                <TypographySmall>
                  O(s) nome(s) do(s) produtor(es) deste filme:
                </TypographySmall>
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
  )
}

export default ListFilm
