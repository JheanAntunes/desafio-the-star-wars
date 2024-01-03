import { TypographyH2, TypographyP } from '@/components/ui/typography'
import LogicSectionDesafioFilms from './logic-section-desafio-films'
import SectionFilmsDesafioCarousel from './section-films-desafio-carousel'

async function SectionDesafioFilms() {
  const { data_Improved_UI } = await LogicSectionDesafioFilms()

  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Filmes</TypographyH2>
        <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <SectionFilmsDesafioCarousel data_Improved_UI={data_Improved_UI} />
      </div>
    </section>
  )
}

export default SectionDesafioFilms
