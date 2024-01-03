import { TypeFetchPlanet } from '@/types/Typesfetch'
import { BASE_URL_API_Planets, fetchGet } from '@/utils/fetch'
import { modifying_data_Planet_improve_UI } from '@/utils/modiying_data_improve_ui'

export const LogicSectionPlanet = async () => {
  const { results } = await fetchGet<TypeFetchPlanet>(BASE_URL_API_Planets)

  const data_improved_UI = modifying_data_Planet_improve_UI(results)

  return {
    data_improved_UI
  }
}
