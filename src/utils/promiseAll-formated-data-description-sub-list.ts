import {
  TypeFilms,
  TypePerson,
  TypeSpecies,
  TypeStarships,
  TypeVehicle
} from '@/types/Typesfetch'
import { fetchGet } from '@/utils/fetch'

// Generic para o type da propriedade chave ser um keyof do generic
type PromiseAllFormatedDataDescriptionSubListParams<T> = {
  urls: string[]
  chave: keyof T
}

// a restrição do generics
type TypeGenericsPromiseAllFormatedDataDescriptionSubList =
  | TypeVehicle
  | TypePerson
  | TypeFilms
  | TypeSpecies
  | TypeStarships

const promiseAllFormatedDataDescriptionSubList = async <
  T extends TypeGenericsPromiseAllFormatedDataDescriptionSubList
>({
  chave,
  urls
}: PromiseAllFormatedDataDescriptionSubListParams<T>) => {
  const arrayFetch = urls.map((url) => fetchGet<T>(`${url}?format=json`))
  const resolvedPromisesArray: Awaited<T[]> = await Promise.all(arrayFetch)
  const dataDescription = resolvedPromisesArray.map((data) => {
    if (data && data[chave] && !Array.isArray(data[chave])) return data[chave]
    return null
  }) as string[] | null[]
  return dataDescription[0] ? (dataDescription as string[]) : null
}

export default promiseAllFormatedDataDescriptionSubList
