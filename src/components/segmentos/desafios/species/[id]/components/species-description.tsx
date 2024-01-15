import { buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import SkeletonList from '@/components/ui/skeletons/skeleton-list'
import {
  TypographyH2,
  TypographyList,
  TypographyListItem
} from '@/components/ui/typography'
import { TypeFetch, TypeSpecies } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_SPECIES_improve_UI } from '@/utils/modiying_data_improve_ui'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'
import { Fragment, Suspense } from 'react'
import DescriptionHomeWorld from '../../../components/description-homeworld'
import DescriptionSubListFilms from '../../../components/description-sub-list-film'
import SubList from '../../../components/section-species/sub-list'
import ShorthandListItem from '../../../components/shorthand-list-item'
import DescriptionSubListPerson from '../../../planets/[id]/components/description-subList-person'

type TypeSpeciesDescriptionProps = {
  id: string
  page: string
}

const SpeciesDescription = async ({
  id,
  page
}: TypeSpeciesDescriptionProps) => {
  const { results } = await fetchGet<TypeFetch<TypeSpecies>>(
    `${BASE_URL_API}/species/?page=${page}&format=json`
  )
  const dataSpecie = results[Number(id)]

  const dataFormated = modifying_data_SPECIES_improve_UI([dataSpecie])

  const isNextIndex = Number(id) + 1
  const NextDesafio = isNextIndex < results.length

  return (
    <section className="flex flex-col pb-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <TypographyH2 className="order-2 md:order-1">Descrição</TypographyH2>
        {NextDesafio && (
          <Link
            href={`/desafios/species/${isNextIndex}?page=${page}`}
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
                  Cores de olhos comuns para esta espécie, &quot;nenhuma&quot;
                  se esta espécie normalmente não tem olhos:
                  <SubList dataCaracteristicas={eye_colors.split(',')} />
                </TypographyListItem>
                <TypographyListItem>
                  Cores de cabelo comuns para esta espécie, &quot;nenhuma&quot;
                  se esta espécie normalmente não tem cabelo:
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
    </section>
  )
}

export default SpeciesDescription
