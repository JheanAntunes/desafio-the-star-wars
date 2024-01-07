import { TypeFetch, TypeVehicle } from '@/types/Typesfetch'
import { BASE_URL_API_VEHICLES, fetchGet } from '@/utils/fetch'
import { modifying_data_VEHICLES_improve_UI } from '@/utils/modiying_data_improve_ui'

export const LogicSectionDesafioVehiclesCarousel = async () => {
  const { results } = await fetchGet<TypeFetch<TypeVehicle>>(
    BASE_URL_API_VEHICLES
  )
  const data_improved_UI = modifying_data_VEHICLES_improve_UI(results)

  return {
    data_improved_UI
  }
}
