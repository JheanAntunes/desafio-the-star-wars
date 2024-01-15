import { Skeleton } from '@/components/ui/skeleton'
import SkeletonList from '@/components/ui/skeletons/skeleton-list'
import { TypographyList, TypographyListItem } from '@/components/ui/typography'
import { TypeSpecies } from '@/types/Typesfetch'
import { Fragment, Suspense } from 'react'
import DescriptionSubListPerson from '../planets/[id]/components/description-subList-person'
import DescriptionHomeWorld from './description-homeworld'
import DescriptionSubListFilms from './description-sub-list-film'
import SubList from './section-species/sub-list'
import ShorthandListItem from './shorthand-list-item'

type TypeListSpeciesProps = {
  dataSpecie: TypeSpecies[]
}
const ListSpecies = ({ dataSpecie }: TypeListSpeciesProps) => {
  return (
    <TypographyList className="my-2 w-full max-w-3xl">
      {dataSpecie.map(
        ({
          created,
          edited,
          url,
          designation,
          average_height,
          average_lifespan,
          eye_colors,
          hair_colors,
          skin_colors,
          language,
          homeworld,
          people,
          films
        }) => {
          return (
            <Fragment key={created + edited + url}>
              <ShorthandListItem
                title='A designação desta espécie, como "senciente": '
                caracteristica={designation}
              />
              <ShorthandListItem
                title="A altura média desta espécie em centímetros: "
                caracteristica={average_height}
              />
              <ShorthandListItem
                title="A expectativa de vida média desta espécie em anos: "
                caracteristica={average_lifespan}
              />
              <ShorthandListItem
                title="A língua geralmente falada por esta espécie: "
                caracteristica={language}
              />
              <TypographyListItem>
                Cores de olhos comuns para esta espécie, &quot;nenhuma&quot; se
                esta espécie normalmente não tem olhos:
                <SubList dataCaracteristicas={eye_colors.split(',')} />
              </TypographyListItem>
              <TypographyListItem>
                Cores de cabelo comuns para esta espécie, &quot;nenhuma&quot; se
                esta espécie normalmente não tem cabelo:
                <SubList dataCaracteristicas={hair_colors.split(',')} />
              </TypographyListItem>
              <TypographyListItem>
                Cores de pele comuns para esta espécie, &quot;nenhuma&quot; se
                esta espécie normalmente não tiver pele:
                <SubList dataCaracteristicas={skin_colors.split(',')} />
              </TypographyListItem>
              {homeworld && (
                <Suspense fallback={<Skeleton className="h-3 w-full" />}>
                  <DescriptionHomeWorld
                    homeworld={homeworld}
                    title="Um planeta de origem desta espécie: "
                  />
                </Suspense>
              )}
              {people && people.length > 0 && (
                <Suspense fallback={<SkeletonList />}>
                  <DescriptionSubListPerson
                    urls={people}
                    title="Pessoas que fazem parte desta espécie: "
                  />
                </Suspense>
              )}
              {films && films.length > 0 && (
                <Suspense fallback={<SkeletonList />}>
                  <DescriptionSubListFilms
                    urls={films}
                    title="Filmes em que esta espécie apareceu: "
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

export default ListSpecies
