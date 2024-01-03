import { TypographyH2, TypographyP } from '@/components/ui/typography'
import LogicSectionStarships from './logic-section-starships'
import SectionStarshipsDesafioCarousel from './section-starships-desafio-carousel'

async function SectionDesafioStarships() {
  const { data_improved_UI } = await LogicSectionStarships()
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Naves estelares</TypographyH2>
        <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <SectionStarshipsDesafioCarousel data_Improved_UI={data_improved_UI} />
      </div>
    </section>
  )
}

export default SectionDesafioStarships
