import {
  TypeFilms,
  TypePerson,
  TypePlanet,
  TypeStarships,
  TypeVehicle
} from '@/types/Typesfetch'

export const modifying_property_improve_UI = (caracteristica: string) => {
  switch (caracteristica.toLowerCase()) {
    case 'unknown':
      return 'Desconhecido'
      break
    case 'n/a':
      return 'Não tem'
      break
    case 'none':
      return 'Nenhum'
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

export const modifying_data_Films_improve_UI = (results: TypeFilms[]) => {
  return results.map((film) => ({
    ...film,
    title: modifying_property_improve_UI(film.title),
    director: modifying_property_improve_UI(film.director),
    producer: modifying_property_improve_UI(film.producer),
    opening_crawl: modifying_property_improve_UI(film.opening_crawl),
    characters: film.characters ? film.characters : null,
    species: film.species ? film.species : null,
    vehicles: film.vehicles ? film.vehicles : null,
    starships: film.starships ? film.starships : null,
    planets: film.planets ? film.planets : null
  }))
}

export const modifying_data_STARSHIPS_improve_UI = (
  results: TypeStarships[]
) => {
  return results.map((starship) => ({
    ...starship,
    MGLT: modifying_property_improve_UI(starship.MGLT),
    cargo_capacity: modifying_property_improve_UI(starship.cargo_capacity),
    consumables: modifying_property_improve_UI(starship.consumables),
    cost_in_credits: modifying_property_improve_UI(starship.cost_in_credits),
    created: modifying_property_improve_UI(starship.created),
    crew: modifying_property_improve_UI(starship.crew),
    edited: modifying_property_improve_UI(starship.edited),
    hyperdrive_rating: modifying_property_improve_UI(
      starship.hyperdrive_rating
    ),
    length: modifying_property_improve_UI(starship.length),
    manufacturer: modifying_property_improve_UI(starship.manufacturer),
    max_atmosphering_speed: modifying_property_improve_UI(
      starship.max_atmosphering_speed
    ),
    model: modifying_property_improve_UI(starship.model),
    name: modifying_property_improve_UI(starship.cargo_capacity),
    passengers: modifying_property_improve_UI(starship.passengers),
    films: starship.films ? starship.films : null,
    pilots: starship.pilots ? starship.pilots : null,
    starship_class: modifying_property_improve_UI(starship.starship_class)
  }))
}
export const modifying_data_VEHICLES_improve_UI = (results: TypeVehicle[]) => {
  return results.map((vehicle) => ({
    ...vehicle,
    name: modifying_property_improve_UI(vehicle.name),
    model: modifying_property_improve_UI(vehicle.model),
    manufacturer: modifying_property_improve_UI(vehicle.manufacturer),
    cost_in_credits: modifying_property_improve_UI(vehicle.cost_in_credits),
    length: modifying_property_improve_UI(vehicle.length),
    max_atmosphering_speed: modifying_property_improve_UI(
      vehicle.max_atmosphering_speed
    ),
    crew: modifying_property_improve_UI(vehicle.crew),
    passengers: modifying_property_improve_UI(vehicle.passengers),
    cargo_capacity: modifying_property_improve_UI(vehicle.cargo_capacity),
    consumables: modifying_property_improve_UI(vehicle.consumables),
    vehicle_class: modifying_property_improve_UI(vehicle.vehicle_class),
    pilots: vehicle.pilots ? vehicle.pilots : null,
    films: vehicle.films ? vehicle.films : null
  }))
}

export type TypeModifyingPerson = ReturnType<
  typeof modifying_data_Person_improve_UI
>

export type TypeModifyingPlanet = ReturnType<
  typeof modifying_data_Planet_improve_UI
>

export type TypeModifyingFilms = ReturnType<
  typeof modifying_data_Films_improve_UI
>

export type TypeModifyingStarships = ReturnType<
  typeof modifying_data_STARSHIPS_improve_UI
>

export type TypeModifyingVehicles = ReturnType<
  typeof modifying_data_VEHICLES_improve_UI
>
