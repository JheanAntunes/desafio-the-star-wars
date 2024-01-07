import { TypeFetch, TypeFilms } from '@/types/Typesfetch'
import { BASE_URL_API_Films, fetchGet } from '@/utils/fetch'
import { modifying_data_Films_improve_UI } from '@/utils/modiying_data_improve_ui'

async function LogicSectionDesafioFilmsCarousel() {
  const { results } = await fetchGet<TypeFetch<TypeFilms>>(BASE_URL_API_Films)

  const data_Improved_UI = modifying_data_Films_improve_UI(results)

  return {
    data_Improved_UI
  }
}

export default LogicSectionDesafioFilmsCarousel
