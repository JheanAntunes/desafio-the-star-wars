import { TypeFetch, TypePlanet } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_Planet_improve_UI } from '@/utils/modiying_data_improve_ui'
import { Fragment } from 'react'
import PlanetCard from './planet-card'

type TypePlanetCardsProps = {
  page?: string
}
const PlanetCards = async ({ page }: TypePlanetCardsProps) => {
  const { results } = await fetchGet<TypeFetch<TypePlanet>>(
    `${BASE_URL_API}/planets/?page=${page ?? 1}&format=json`
  )
  const dataFormatedImproveUi = modifying_data_Planet_improve_UI(results)
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Grid */}
      {dataFormatedImproveUi.map((dataPlanet) => (
        <Fragment key={dataPlanet.created + dataPlanet.edited}>
          <PlanetCard {...dataPlanet} />
        </Fragment>
      ))}
    </div>
  )
}

export default PlanetCards
