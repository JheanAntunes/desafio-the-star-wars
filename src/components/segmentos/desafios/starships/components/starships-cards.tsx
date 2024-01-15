import { TypeFetch, TypeStarships } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_STARSHIPS_improve_UI } from '@/utils/modiying_data_improve_ui'
import Link from 'next/link'
import { Fragment } from 'react'
import StarshipsCard from './starships-card'

type TypeStarshipsCardsProps = {
  page?: string
}
const StarshipsCards = async ({ page }: TypeStarshipsCardsProps) => {
  const { results } = await fetchGet<TypeFetch<TypeStarships>>(
    `${BASE_URL_API}/starships/?page=${page ?? 1}&format=json`
  )
  const dataFormatedImproveUi = modifying_data_STARSHIPS_improve_UI(results)
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Grid */}
      {dataFormatedImproveUi.map((dataStarship, index) => (
        <Fragment key={dataStarship.created + dataStarship.edited}>
          <Link
            className="group"
            href={`/desafios/starships/${index}?page=${page ?? 1}`}
          >
            <StarshipsCard {...dataStarship} />
          </Link>
        </Fragment>
      ))}
    </div>
  )
}

export default StarshipsCards
