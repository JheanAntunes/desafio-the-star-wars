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
  films: string[] | never[]
  species: string[] | never[]
  vehicles: string[] | never[]
  starships: string[] | never[]
  created: string
  edited: string
  url: string
}

export type TypeFetchPerson = {
  count: number
  next: string
  previous: string | null
  results: TypePerson[]
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
  residents: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

export type TypeFetchPlanet = {
  count: number
  next: string
  previous: string | null
  results: TypePlanet[]
}
