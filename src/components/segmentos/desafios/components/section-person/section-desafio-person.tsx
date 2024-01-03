import { TypographyH3, TypographyP } from '@/components/ui/typography'
import LogicSectionDesafioPerson from './logic-section-desafio-person'
import SectionDesafioCarousel from './section-desafio-carousel'

async function SectionDesafioPerson() {
  const { data_Improved_UI } = await LogicSectionDesafioPerson()
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH3>Pessoas</TypographyH3>
        <TypographyP className="text-zinc-700">
          Clique no desafio abaixo para começar
        </TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <SectionDesafioCarousel data_Improved_UI={data_Improved_UI} />
      </div>
    </section>
  )
}

export default SectionDesafioPerson
