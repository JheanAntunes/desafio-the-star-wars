import { TypeFetch, TypePerson } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_Person_improve_UI } from '@/utils/modiying_data_improve_ui'
import PersonCard from './PersonCard'

type TypePersonCardsProps = {
  page?: string
}
const PersonCards = async ({ page }: TypePersonCardsProps) => {
  const { results } = await fetchGet<TypeFetch<TypePerson>>(
    `${BASE_URL_API}/people/?page=${page ?? 1}&format=json`
  )
  const dataFormatedImproveUi = modifying_data_Person_improve_UI(results)
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Grid */}
      {dataFormatedImproveUi.map((dataPerson) => (
        <PersonCard
          dataFormatedImproveUi={dataPerson}
          key={dataPerson.created + dataPerson.hair_color}
        />
      ))}
    </div>
  )
}

export default PersonCards
