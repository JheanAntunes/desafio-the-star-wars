import { TypographyH2, TypographyP } from '@/components/ui/typography'
import SectionFilmsDesafioCarousel from '../../../components/films-carousel'

function SectionDesafioFilms() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Filmes</TypographyH2>
        <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <SectionFilmsDesafioCarousel />
      </div>
    </section>
  )
}

export default SectionDesafioFilms
