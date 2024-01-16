import { TypographyH2, TypographyP } from '@/components/ui/typography'
import SectionVehiclesDesafioCarousel from '../../../components/vehicles-carousel'

function SectionDesafioVehicles() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Veículos</TypographyH2>
        <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <SectionVehiclesDesafioCarousel segmento="desafios" />
      </div>
    </section>
  )
}

export default SectionDesafioVehicles
