import { TypePerson, TypePlanet } from '@/types/Typesfetch'

export const modifying_property_improve_UI = (caracteristica: string) => {
  switch (caracteristica.toLowerCase()) {
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

export const modifying_data_Person_improve_UI = (results: TypePerson[]) => {
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

export const modifying_data_Planet_improve_UI = (results: TypePlanet[]) => {
  return results.map((planet) => ({
    ...planet,
    climate: modifying_property_improve_UI(planet.climate),
    diameter: modifying_property_improve_UI(planet.diameter),
    gravity: modifying_property_improve_UI(planet.gravity),
    orbital_period: modifying_property_improve_UI(planet.orbital_period),
    population: modifying_property_improve_UI(planet.population),
    surface_water: modifying_property_improve_UI(planet.surface_water),
    rotation_period: modifying_property_improve_UI(planet.rotation_period),
    terrain: modifying_property_improve_UI(planet.terrain),
    name: modifying_property_improve_UI(planet.name),
    residents: planet.residents ? planet.residents : null,
    films: planet.films ? planet.films : null
  }))
}

export type TypeModifyingPerson = ReturnType<
  typeof modifying_data_Person_improve_UI
>

export type TypeModifyingPlanet = ReturnType<
  typeof modifying_data_Planet_improve_UI
>
