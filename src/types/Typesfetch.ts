export type TypePerson = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[] | null[]
  species: string[] | null[]
  vehicles: string[] | null[]
  starships: string[] | null[]
  created: string
  edited: string
  url: string
}

export type TypePlanet = {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[] | null
  films: string[] | null
  created: string
  edited: string
  url: string
}

export type TypeFilms = {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[] | null
  planets: string[] | null
  starships: string[] | null
  vehicles: string[] | null
  species: string[] | null
  created: string
  edited: string
  url: string
}

export type TypeStarships = {
  MGLT: string
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  created: string
  crew: string
  edited: string
  hyperdrive_rating: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  model: string
  name: string
  passengers: string
  films: string[] | null
  pilots: string[] | null
  starship_class: string
  url: string
}

export type TypeVehicle = {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  vehicle_class: string
  pilots: string[] | null
  films: string[] | null
  created: string
  edited: string
  url: string
}

export type TypeFetch<TypeResults> = {
  count: number
  next: null | string
  previous: null | string
  results: TypeResults[]
}
