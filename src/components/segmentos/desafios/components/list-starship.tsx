import SkeletonList from '@/components/ui/skeletons/skeleton-list'
import { TypographyList, TypographyListItem } from '@/components/ui/typography'
import { TypeStarships } from '@/types/Typesfetch'
import { formatedNumber } from '@/utils/formatedNumber'
import { Fragment, Suspense } from 'react'
import DescriptionSubListPerson from '../planets/[id]/components/description-subList-person'
import DescriptionSubListFilms from './description-sub-list-film'
import SubList from './section-species/sub-list'
import ShorthandListItem from './shorthand-list-item'

type TypeListStarshipProps = {
  dataStarship: TypeStarships[]
}
const ListStarship = ({ dataStarship }: TypeListStarshipProps) => {
  return (
    <TypographyList className="my-2 w-full max-w-3xl">
      {dataStarship.map(
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
  )
}

export default ListStarship
