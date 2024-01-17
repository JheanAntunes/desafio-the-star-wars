import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { TypeFetch, TypePlanet } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_Planet_improve_UI } from '@/utils/modiying_data_improve_ui'
import Link from 'next/link'
import { Fragment } from 'react'
import PlanetCard from './planet-card'

type TypePlanetCardsProps = {
  page?: string
  segmento: TypeSegmento
}
const PlanetCards = async ({ page, segmento }: TypePlanetCardsProps) => {
  const { results } = await fetchGet<TypeFetch<TypePlanet>>(
    `${BASE_URL_API}/planets/?page=${page ?? 1}&format=json`
  )
  const dataFormatedImproveUi = modifying_data_Planet_improve_UI(results)
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Grid */}
      {dataFormatedImproveUi.map((dataPlanet, index) => (
        <Fragment key={dataPlanet.created + dataPlanet.edited}>
          <Link
            className="group"
            href={`/${segmento}/planets/${index}?page=${page ?? 1}`}
          >
            <PlanetCard {...dataPlanet} segmento={segmento} />
          </Link>
        </Fragment>
      ))}
    </div>
  )
}

export default PlanetCards
