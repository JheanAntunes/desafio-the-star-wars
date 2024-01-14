import { buttonVariants } from '@/components/ui/button'
import SkeletonList from '@/components/ui/skeletons/skeleton-list'
import {
  TypographyH2,
  TypographyList,
  TypographyListItem
} from '@/components/ui/typography'
import { TypeFetch, TypeStarships } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { formatedNumber } from '@/utils/formatedNumber'
import { modifying_data_STARSHIPS_improve_UI } from '@/utils/modiying_data_improve_ui'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'
import { Fragment, Suspense } from 'react'
import DescriptionSubListFilms from '../../../components/description-sub-list-film'
import SubList from '../../../components/section-species/sub-list'
import ShorthandListItem from '../../../components/shorthand-list-item'
import DescriptionSubListPerson from '../../../planets/[id]/components/description-subList-person'

type TypeStarshipsDescriptionProps = {
  id: string
  page: string
}

const StarshipsDescription = async ({
  id,
  page
}: TypeStarshipsDescriptionProps) => {
  const { results } = await fetchGet<TypeFetch<TypeStarships>>(
    `${BASE_URL_API}/starships/?page=${page}&format=json`
  )

  const dataStarships = results[Number(id)]

  const dataFormated = modifying_data_STARSHIPS_improve_UI([dataStarships])

  const isNextIndex = Number(id) + 1
  const NextDesafio = isNextIndex < results.length

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <TypographyH2 className="order-2 md:order-1">Descrição</TypographyH2>
        {NextDesafio && (
          <Link
            href={`/desafios/starships/${isNextIndex}?page=${page}`}
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
            starship_class,
            manufacturer,
            cost_in_credits,
            length,
            crew,
            passengers,
            max_atmosphering_speed,
            hyperdrive_rating,
            MGLT,
            cargo_capacity,
            consumables,
            films,
            pilots
          }) => {
            return (
              <Fragment key={created + edited + url}>
                <ShorthandListItem
                  title='A classe desta nave estelar, como "Starfighter" ou
                "Deep Space Mobile Battlestation":'
                  caracteristica={starship_class}
                />
                <ShorthandListItem
                  title="O custo desta nave estelar é novo, em créditos galácticos:"
                  caracteristica={formatedNumber(cost_in_credits)}
                />
                <ShorthandListItem
                  title="O comprimento desta nave em metros:"
                  caracteristica={formatedNumber(length)}
                />
                <ShorthandListItem
                  title="O número de pessoal necessário para operar ou pilotar esta nave:"
                  caracteristica={crew}
                />
                <ShorthandListItem
                  title="O número de pessoas não essenciais que esta nave pode transportar:"
                  caracteristica={passengers}
                />
                <ShorthandListItem
                  title="A velocidade máxima desta nave na atmosfera. 'Não tem' se esta nave for incapaz de voar na atmosfera:"
                  caracteristica={formatedNumber(max_atmosphering_speed)}
                />
                <ShorthandListItem
                  title="A classe deste hiperpropulsor de nave estelar:"
                  caracteristica={hyperdrive_rating}
                />
                <ShorthandListItem
                  title="O número máximo de quilogramas que esta nave pode transportar:"
                  caracteristica={formatedNumber(cargo_capacity)}
                />
                <ShorthandListItem
                  title="O período máximo de tempo que esta nave pode fornecer consumíveis para toda a sua tripulação sem precisar reabastecer:"
                  caracteristica={consumables}
                />
                <ShorthandListItem
                  title="O número máximo de Megalights que esta nave pode viajar em uma hora padrão. Um 'Megalight' é uma unidade padrão de distância e nunca foi definida antes no universo Star Wars. Este valor só é realmente útil para medir a diferença na velocidade das naves estelares. Podemos assumir que é semelhante a UA, a distância entre o nosso Sol (Sol) e a Terra:"
                  caracteristica={MGLT}
                />
                <TypographyListItem>
                  O(s) fabricante(s) desta nave estelar.
                  <SubList dataCaracteristicas={manufacturer.split(',')} />
                </TypographyListItem>
                {pilots && pilots.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DescriptionSubListPerson
                      urls={pilots}
                      title="Pessoas pelos quais esta nave foi pilotada:"
                    />
                  </Suspense>
                )}
                {films && films.length > 0 && (
                  <Suspense fallback={<SkeletonList />}>
                    <DescriptionSubListFilms
                      urls={films}
                      title="Filmes nos quais esta nave apareceu:"
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

export default StarshipsDescription
