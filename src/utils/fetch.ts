export const BASE_URL_API_PEOPLE = 'https://swapi.dev/api/people/?format=json'

export const fetchGet = async <TData>(url: string, options?: RequestInit) => {
  const response = await fetch(url, options)
  if (!response.ok) throw new Error('fetchGet: Request failed')
  const data: TData = await response.json()
  return data
}
