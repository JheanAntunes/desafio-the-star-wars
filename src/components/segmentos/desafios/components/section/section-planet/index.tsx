import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { LogicSectionPlanet } from './logic-section-planet'
import SectionPlanetDesafioCarousel from './section-planet-desafio-carousel'

async function SectionPlanet() {
  const { data_improved_UI } = await LogicSectionPlanet()
  return (
    <section className="container">
      <TypographyH2>Planetas</TypographyH2>
      <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
      <SectionPlanetDesafioCarousel data_Improved_UI={data_improved_UI} />
    </section>
  )
}

export default SectionPlanet
