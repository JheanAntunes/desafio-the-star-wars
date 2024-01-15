import { TypeFetch, TypeSpecies } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_SPECIES_improve_UI } from '@/utils/modiying_data_improve_ui'
import Link from 'next/link'
import { Fragment } from 'react'
import SpeciesCard from './species-card'

type TypeSpeciesCardsProps = {
  page?: string
}
const SpeciesCards = async ({ page }: TypeSpeciesCardsProps) => {
  const { results } = await fetchGet<TypeFetch<TypeSpecies>>(
    `${BASE_URL_API}/species/?page=${page ?? 1}&format=json`
  )
  const dataFormatedImproveUi = modifying_data_SPECIES_improve_UI(results)
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Grid */}
      {dataFormatedImproveUi.map((dataSpecies, index) => (
        <Fragment key={dataSpecies.created + dataSpecies.edited}>
          <Link
            className="group"
            href={`/desafios/species/${index}?page=${page ?? 1}`}
          >
            <SpeciesCard {...dataSpecies} />
          </Link>
        </Fragment>
      ))}
    </div>
  )
}

export default SpeciesCards
