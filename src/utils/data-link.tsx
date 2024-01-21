import ImageFilmTheme from '@/components/segmentos/components/image-film-theme'
import ImagePeopleTheme from '@/components/segmentos/components/image-people-theme'
import ImagePlanetTheme from '@/components/segmentos/components/image-planet-theme'
import ImageSpeciesTheme from '@/components/segmentos/components/image-species-theme'
import ImageStarshipsTheme from '@/components/segmentos/components/image-starships-theme'
import ImageVehicleTheme from '@/components/segmentos/components/image-vehicle-theme'

export type TypeDataLinks = {
  href: string
  content: string
  icon: React.ReactNode
}

export const dataLinksDesafios: TypeDataLinks[] = [
  {
    href: '/desafios/person',
    content: 'Pessoas',
    icon: <ImagePeopleTheme />
  },
  {
    href: '/desafios/planets',
    content: 'Planetas',
    icon: <ImagePlanetTheme />
  },
  {
    href: '/desafios/films',
    content: 'Filmes',
    icon: <ImageFilmTheme />
  },
  {
    href: '/desafios/starships',
    content: 'Nave Estelares',
    icon: <ImageStarshipsTheme />
  },
  {
    href: '/desafios/vehicles',
    content: 'Veículos',
    icon: <ImageVehicleTheme />
  },
  {
    href: '/desafios/species',
    content: 'Espécies',
    icon: <ImageSpeciesTheme />
  }
]

export const dataLinksDocs: TypeDataLinks[] = [
  {
    href: '/docs/person',
    content: 'Pessoas',
    icon: <ImagePeopleTheme />
  },
  {
    href: '/docs/planets',
    content: 'Planetas',
    icon: <ImagePlanetTheme />
  },
  {
    href: '/docs/films',
    content: 'Filmes',
    icon: <ImageFilmTheme />
  },
  {
    href: '/docs/starships',
    content: 'Nave Estelares',
    icon: <ImageStarshipsTheme />
  },
  {
    href: '/docs/vehicles',
    content: 'Veículos',
    icon: <ImageVehicleTheme />
  },
  {
    href: '/docs/species',
    content: 'Espécies',
    icon: <ImageSpeciesTheme />
  }
]
