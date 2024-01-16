import { TypographyH2, TypographyP } from '@/components/ui/typography'
import SectionStarshipsDesafioCarousel from '../../../components/starships-carousel'

function SectionDesafioStarships() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Naves estelares</TypographyH2>
        <TypographyP>Clique nso desafio abaixo para começar.</TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <SectionStarshipsDesafioCarousel />
      </div>
    </section>
  )
}

export default SectionDesafioStarships
