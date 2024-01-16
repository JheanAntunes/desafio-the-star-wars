import SkeletonList from '@/components/ui/skeletons/skeleton-list'
import { TypographyList, TypographyListItem } from '@/components/ui/typography'
import { TypePlanet } from '@/types/Typesfetch'
import { Fragment, Suspense } from 'react'
import DescriptionSubListPerson from '../planets/[id]/components/description-subList-person'
import DescriptionSubListFilms from './description-sub-list-film'
import SubList from './sub-list'
import ShorthandListItem from './shorthand-list-item'

type TypeListPlanetProps = {
  dataPlanet: TypePlanet[]
}
const ListPlanet = ({ dataPlanet }: TypeListPlanetProps) => {
  return (
    <TypographyList className="my-2 w-full max-w-3xl">
      {dataPlanet.map(
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
                  <DescriptionSubListFilms
                    urls={films}
                    title="filmes nos quais este planeta apareceu:"
                  />
                </Suspense>
              )}
              {residents && residents.length > 0 && (
                <Suspense fallback={<SkeletonList />}>
                  <DescriptionSubListPerson
                    urls={residents}
                    title="Pessoas que vivem neste planeta:"
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

export default ListPlanet
