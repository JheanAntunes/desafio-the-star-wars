import SectionDesafioFilms from '@/components/segmentos/desafios/components/section-films'
import SectionDesafioPerson from '@/components/segmentos/desafios/components/section-person/section-desafio-person'
import SectionDesafioPlanet from '@/components/segmentos/desafios/components/section-planet'
import SectionDesafioSpecies from '@/components/segmentos/desafios/components/section-species'
import SectionDesafioStarships from '@/components/segmentos/desafios/components/section-starships'
import SectionDesafioVehicles from '@/components/segmentos/desafios/components/section-vehicle'

function PageDesafio() {
  return (
    <main className="my-8 flex flex-col gap-8">
      <SectionDesafioPerson />
      <SectionDesafioPlanet />
      <SectionDesafioFilms />
      <SectionDesafioStarships />
      <SectionDesafioVehicles />
      <SectionDesafioSpecies />
    </main>
  )
}

export default PageDesafio
