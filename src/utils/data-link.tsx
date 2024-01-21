import ImagePeopleTheme from '@/components/segmentos/components/image-people-theme'
import ImageSpeciesTheme from '@/components/segmentos/components/image-species-theme'
import ImageStarshipsTheme from '@/components/segmentos/components/image-starships-theme'
import ImageVehicleTheme from '@/components/segmentos/components/image-vehicle-theme'

export type TypeDataLinks = {
  href: string
  content: string
  icon?: React.ReactNode
}

export const dataLinksDesafios: TypeDataLinks[] = [
  {
    href: '/desafios/person',
    content: 'Pessoas',
    icon: <ImagePeopleTheme />
  },
  {
    href: '/desafios/planets',
    content: 'Planetas'
  },
  {
    href: '/desafios/films',
    content: 'Filmes'
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
    content: 'Pessoas'
  },
  {
    href: '/docs/planets',
    content: 'Planetas'
  },
  {
    href: '/docs/films',
    content: 'Filmes'
  },
  {
    href: '/docs/starships',
    content: 'Nave Estelares'
  },
  {
    href: '/docs/vehicles',
    content: 'Veículos'
  },
  {
    href: '/docs/species',
    content: 'Espécies'
  }
]
