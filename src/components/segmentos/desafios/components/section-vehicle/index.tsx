import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { LogicSectionVehicles } from './logic-section-vehicles'
import SectionVehiclesDesafioCarousel from './section-vehicles-desafio-carousel'

async function SectionDesafioVehicles() {
  const { data_improved_UI } = await LogicSectionVehicles()
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Veículos</TypographyH2>
        <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <SectionVehiclesDesafioCarousel data_Improved_UI={data_improved_UI} />
      </div>
    </section>
  )
}

export default SectionDesafioVehicles
