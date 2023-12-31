import { TypePerson } from '@/types/Typesfetch'

export const modifying_property_improve_UI = (caracteristica: string) => {
  switch (caracteristica) {
    case 'unknown':
      return 'Desconhecido'
      break
    case 'n/a':
      return 'Não tem'
      break
    default:
      return caracteristica
      break
  }
}

export const modifying_data_improve_UI = (results: TypePerson[]) => {
  return results.map((person) => ({
    ...person,
    birth_year: modifying_property_improve_UI(person.hair_color),
    hair_color: modifying_property_improve_UI(person.hair_color),
    gender: modifying_property_improve_UI(person.hair_color),
    eye_color: modifying_property_improve_UI(person.hair_color),
    films: person.films ? person.films : null,
    species: person.films ? person.films : null,
    starships: person.films ? person.films : null,
    vehicles: person.films ? person.films : null
  }))
}

export type TypeModifyingPerson = ReturnType<typeof modifying_data_improve_UI>
