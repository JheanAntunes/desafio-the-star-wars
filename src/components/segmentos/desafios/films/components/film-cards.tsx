import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { TypeFetch, TypeFilms } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_Films_improve_UI } from '@/utils/modiying_data_improve_ui'
import Link from 'next/link'
import { Fragment } from 'react'
import FilmCard from './film-card'

type TypeFilmsCardsProps = {
  page?: string
  segmento: TypeSegmento
}
const FilmsCards = async ({ page, segmento }: TypeFilmsCardsProps) => {
  const { results } = await fetchGet<TypeFetch<TypeFilms>>(
    `${BASE_URL_API}/films/?page=${page ?? 1}&format=json`
  )
  const dataFormatedImproveUi = modifying_data_Films_improve_UI(results)
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Grid */}
      {dataFormatedImproveUi.map((dataFilm, index) => (
        <Fragment key={dataFilm.created + dataFilm.edited}>
          <Link
            className="group"
            href={`/${segmento}/films/${index}?page=${page ?? 1}`}
          >
            <FilmCard {...dataFilm} segmento={segmento} />
          </Link>
        </Fragment>
      ))}
    </div>
  )
}

export default FilmsCards
