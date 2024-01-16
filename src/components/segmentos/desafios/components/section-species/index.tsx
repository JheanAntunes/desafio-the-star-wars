import { TypographyH2, TypographyP } from '@/components/ui/typography'
import SectionSpeciesDesafioCarousel from '../../../components/species-carousel'

function SectionDesafioSpecies() {
  return (
    <section className="container flex flex-col gap-5">
      <div>
        <TypographyH2>Espécies</TypographyH2>
        <TypographyP>Clique no desafio abaixo para começar.</TypographyP>
      </div>
      <div className="flex items-center justify-center">
        <SectionSpeciesDesafioCarousel segmento="desafios" />
      </div>
    </section>
  )
}

export default SectionDesafioSpecies
