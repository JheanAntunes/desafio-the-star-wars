import { CardTitle } from '@/components/ui/card'
import { TypeFetch, TypePerson } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_Person_improve_UI } from '@/utils/modiying_data_improve_ui'
import Link from 'next/link'
import PersonCard from './PersonCard'

type TypePersonCardsProps = {
  page?: string
}
const PersonCards = async ({ page }: TypePersonCardsProps) => {
  const currentPage = page ?? 1

  const { results } = await fetchGet<TypeFetch<TypePerson>>(
    `${BASE_URL_API}/people/?page=${currentPage}&format=json`
  )
  const dataFormatedImproveUi = modifying_data_Person_improve_UI(results)

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Grid */}
      {dataFormatedImproveUi.map((dataPerson, index) => (
        <Link
          className="group"
          href={`/desafios/person/${index}?page=${currentPage}`}
          key={dataPerson.created + dataPerson.hair_color}
        >
          <PersonCard dataFormatedImproveUi={dataPerson}>
            <CardTitle className="font-sans font-normal transition-colors group-hover:text-blue-500">
              Desafio
            </CardTitle>
          </PersonCard>
        </Link>
      ))}
    </div>
  )
}

export default PersonCards
