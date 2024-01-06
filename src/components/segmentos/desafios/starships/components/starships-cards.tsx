import { TypeFetch, TypeStarships } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_STARSHIPS_improve_UI } from '@/utils/modiying_data_improve_ui'
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
      {dataFormatedImproveUi.map((dataStarship) => (
        <Fragment key={dataStarship.created + dataStarship.edited}>
          <StarshipsCard {...dataStarship} />
        </Fragment>
      ))}
    </div>
  )
}

export default StarshipsCards
