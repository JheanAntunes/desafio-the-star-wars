export const BASE_URL_API = 'https://swapi.dev/api'
export const BASE_URL_API_PEOPLE = 'https://swapi.dev/api/people/?format=json'
export const BASE_URL_API_Planets = 'https://swapi.dev/api/planets/?format=json'
export const BASE_URL_API_Films = 'https://swapi.dev/api/films/?format=json'
export const BASE_URL_API_STARSHIPS =
  'https://swapi.dev/api/starships/?format=json'
export const BASE_URL_API_VEHICLES =
  'https://swapi.dev/api/vehicles/?format=json'
export const BASE_URL_API_SPECIES = 'https://swapi.dev/api/species/?format=json'

export const fetchGet = async <TData>(url: string, options?: RequestInit) => {
  const response = await fetch(url, options)
  if (!response.ok) throw new Error('fetchGet: Request failed')
  const data: TData = await response.json()
  return data
}
