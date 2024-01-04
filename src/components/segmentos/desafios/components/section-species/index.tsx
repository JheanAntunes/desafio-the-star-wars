import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { LogicSectionSpecies } from './logic-section-species'
import SectionSpeciesDesafioCarousel from './section-species-desafio-carousel'

async function SectionDesafioSpecies() {
  const { data_improved_UI } = await LogicSectionSpecies()
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Espécies</TypographyH2>
        <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <SectionSpeciesDesafioCarousel data_Improved_UI={data_improved_UI} />
      </div>
    </section>
  )
}

export default SectionDesafioSpecies
