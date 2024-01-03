import { TypeFetchFilms } from '@/types/Typesfetch'
import { BASE_URL_API_Films, fetchGet } from '@/utils/fetch'
import { modifying_data_Films_improve_UI } from '@/utils/modiying_data_improve_ui'

async function LogicSectionDesafioFilms() {
  const { results } = await fetchGet<TypeFetchFilms>(BASE_URL_API_Films)

  const data_Improved_UI = modifying_data_Films_improve_UI(results)

  return {
    data_Improved_UI
  }
}

export default LogicSectionDesafioFilms
