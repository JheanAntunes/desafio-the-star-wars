import { TypeFetch, TypeStarships } from '@/types/Typesfetch'
import { BASE_URL_API_STARSHIPS, fetchGet } from '@/utils/fetch'
import { modifying_data_STARSHIPS_improve_UI } from '@/utils/modiying_data_improve_ui'

const LogicSectionStarships = async () => {
  const { results } = await fetchGet<TypeFetch<TypeStarships>>(
    BASE_URL_API_STARSHIPS
  )

  const data_improved_UI = modifying_data_STARSHIPS_improve_UI(results)

  return { data_improved_UI }
}

export default LogicSectionStarships
