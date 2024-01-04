import { TypeFetch, TypeSpecies } from '@/types/Typesfetch'
import { BASE_URL_API_SPECIES, fetchGet } from '@/utils/fetch'
import { modifying_data_SPECIES_improve_UI } from '@/utils/modiying_data_improve_ui'

export const LogicSectionSpecies = async () => {
  const { results } =
    await fetchGet<TypeFetch<TypeSpecies>>(BASE_URL_API_SPECIES)

  const data_improved_UI = modifying_data_SPECIES_improve_UI(results)

  return {
    data_improved_UI
  }
}
