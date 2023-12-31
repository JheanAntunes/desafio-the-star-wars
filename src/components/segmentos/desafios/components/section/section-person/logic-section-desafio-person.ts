import { TypeFetchPerson } from '@/types/Typesfetch'
import { BASE_URL_API_PEOPLE, fetchGet } from '@/utils/fetch'
import { modifying_data_improve_UI } from '@/utils/modiying_data_improve_ui'

async function LogicSectionDesafioPerson() {
  const { results } = await fetchGet<TypeFetchPerson>(BASE_URL_API_PEOPLE)

  const data_Improved_UI = modifying_data_improve_UI(results)

  return {
    data_Improved_UI
  }
}

export default LogicSectionDesafioPerson
