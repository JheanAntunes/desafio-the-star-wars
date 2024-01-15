import SkeletonList from '@/components/ui/skeletons/skeleton-list'
import { TypographyList } from '@/components/ui/typography'
import { TypePerson } from '@/types/Typesfetch'
import { Fragment, Suspense } from 'react'
import DescriptionHomeWorld from './description-homeworld'
import DescriptionSubListFilms from './description-sub-list-film'
import DescriptionSubListSpecies from './description-sub-list-species'
import DescriptionSubListStarships from './description-sub-list-starships'
import DescriptionSubListVehicles from './description-sub-list-vehicles'
import ShorthandListItem from './shorthand-list-item'

type TypeListPersonProps = {
  dataPerson: TypePerson[]
}
const ListPerson = ({ dataPerson }: TypeListPersonProps) => {
  return (
    <TypographyList>
      {dataPerson.map(
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
  )
}

export default ListPerson
