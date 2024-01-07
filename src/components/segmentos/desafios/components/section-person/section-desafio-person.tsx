import { TypographyH3, TypographyP } from '@/components/ui/typography'
import SectionDesafioPersonCarousel from './section-desafio-person-carousel'

function SectionDesafioPerson() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH3>Pessoas</TypographyH3>
        <TypographyP className="text-zinc-700">
          Clique no desafio abaixo para começar
        </TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <SectionDesafioPersonCarousel />
      </div>
    </section>
  )
}

export default SectionDesafioPerson
