import { TypographyH2, TypographyP } from '@/components/ui/typography'
import SectionPlanetDesafioCarousel from '../../../components/planet-carousel'

function SectionDesafioPlanet() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Planetas</TypographyH2>
        <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <SectionPlanetDesafioCarousel />
      </div>
    </section>
  )
}

export default SectionDesafioPlanet
