import { TypeFetch, TypeFilms } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_Films_improve_UI } from '@/utils/modiying_data_improve_ui'
import { Fragment } from 'react'
import FilmCard from './film-card'

type TypeFilmsCardsProps = {
  page?: string
}
const FilmsCards = async ({ page }: TypeFilmsCardsProps) => {
  const { results } = await fetchGet<TypeFetch<TypeFilms>>(
    `${BASE_URL_API}/films/?page=${page ?? 1}&format=json`
  )
  const dataFormatedImproveUi = modifying_data_Films_improve_UI(results)
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Grid */}
      {dataFormatedImproveUi.map((dataFilm) => (
        <Fragment key={dataFilm.created + dataFilm.edited}>
          <FilmCard {...dataFilm} />
        </Fragment>
      ))}
    </div>
  )
}

export default FilmsCards
