import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { TypeFetch, TypeVehicle } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_VEHICLES_improve_UI } from '@/utils/modiying_data_improve_ui'
import Link from 'next/link'
import { Fragment } from 'react'
import VehiclesCard from './vehicles-card'

type TypeVehiclesCardsProps = {
  page?: string
  segmento: TypeSegmento
}
const VehiclesCards = async ({ page, segmento }: TypeVehiclesCardsProps) => {
  const { results } = await fetchGet<TypeFetch<TypeVehicle>>(
    `${BASE_URL_API}/vehicles/?page=${page ?? 1}&format=json`
  )
  const dataFormatedImproveUi = modifying_data_VEHICLES_improve_UI(results)
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Grid */}
      {dataFormatedImproveUi.map((dataVehicles, index) => (
        <Fragment key={dataVehicles.created + dataVehicles.edited}>
          <Link
            className="group"
            href={`/${segmento}/vehicles/${index}?page=${page ?? 1}`}
          >
            <VehiclesCard {...dataVehicles} segmento={segmento} />
          </Link>
        </Fragment>
      ))}
    </div>
  )
}

export default VehiclesCards
