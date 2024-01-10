import { TypographyH2, TypographyList } from '@/components/ui/typography'
import { TypeFetch, TypePerson } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_Person_improve_UI } from '@/utils/modiying_data_improve_ui'
import { Fragment, Suspense } from 'react'
import ShorthandListItem from '../../../components/shorthand-list-item'
import DesafioPersonDescriptionSubListSpecies from './desafio-person-description-species'
import DesafioPersonDescriptionSubListStarships from './desafio-person-description-starships'
import { default as DesafioPersonDescriptionSubListFilms } from './desafio-person-description-sub-list-film'
import DesafioPersonDescriptionSubListVehicles from './desafio-person-description-vehicles'

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

  return (
    <section className="flex flex-col">
      <TypographyH2>Descrição</TypographyH2>
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
            vehicles
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
                {films && films.length > 0 && (
                  <Suspense fallback={<p>Carregando lista de filmes</p>}>
                    <DesafioPersonDescriptionSubListFilms urls={films} />
                  </Suspense>
                )}
                {species && species.length > 0 && (
                  <Suspense fallback={<p>Carregando lista de Espécie</p>}>
                    <DesafioPersonDescriptionSubListSpecies urls={species} />
                  </Suspense>
                )}
                {starships && starships.length > 0 && (
                  <Suspense
                    fallback={<p>Carregando lista de Nave estelares</p>}
                  >
                    <DesafioPersonDescriptionSubListStarships
                      urls={starships}
                    />
                  </Suspense>
                )}
                {vehicles && vehicles.length > 0 && (
                  <Suspense fallback={<p>Carregando lista de veículos</p>}>
                    <DesafioPersonDescriptionSubListVehicles urls={vehicles} />
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

// name string -- O nome desta pessoa.
// birth_year string -- O ano de nascimento da pessoa, usando o padrão do universo de ABY ou ABY - Antes da Batalha de Yavin ou Depois da Batalha de Yavin. A Batalha de Yavin é uma batalha que ocorre no final do episódio IV de Star Wars: Uma Nova Esperança.
// eye_color string - A cor dos olhos desta pessoa. Será "desconhecido" se não for conhecido ou "n/a" se a pessoa não tiver olho.
// gender string - O sexo desta pessoa. Ou "masculino", "feminino" ou "desconhecido", "n/a" se a pessoa não tiver gênero.
// hair_color string - A cor do cabelo desta pessoa. Será "desconhecido" se não for conhecido ou "n/a" se a pessoa não tiver cabelo.
// height string -- A altura da pessoa em centímetros.
// mass string -- A massa da pessoa em quilogramas.
// skin_color string -- A cor da pele desta pessoa.
// homeworld string -- O URL de um recurso planetário, um planeta onde esta pessoa nasceu ou habita.
// films matriz -- Uma série de URLs de recursos de filmes em que essa pessoa esteve.
// species matriz -- Uma série de URLs de recursos de espécies às quais esta pessoa pertence.
// starships matriz -- Uma série de URLs de recursos de naves estelares que esta pessoa pilotou.
// vehicles matriz -- Uma série de URLs de recursos de veículos que essa pessoa pilotou.
// url string -- o URL hipermídia deste recurso.
// created string -- o formato de data ISO 8601 da hora em que este recurso foi criado.
// edited string -- o formato de data ISO 8601 da hora em que este recurso foi editado.
