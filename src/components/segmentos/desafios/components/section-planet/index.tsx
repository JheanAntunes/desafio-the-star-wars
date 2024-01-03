import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { LogicSectionPlanet } from './logic-section-planet'
import SectionPlanetDesafioCarousel from './section-planet-desafio-carousel'

async function SectionDesafioPlanet() {
  const { data_improved_UI } = await LogicSectionPlanet()
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Planetas</TypographyH2>
        <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <SectionPlanetDesafioCarousel data_Improved_UI={data_improved_UI} />
      </div>
    </section>
  )
}

export default SectionDesafioPlanet
