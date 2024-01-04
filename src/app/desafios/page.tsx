import SectionDesafioFilms from '@/components/segmentos/desafios/components/section-films'
import SectionDesafioPerson from '@/components/segmentos/desafios/components/section-person/section-desafio-person'
import SectionDesafioPlanet from '@/components/segmentos/desafios/components/section-planet'
import SectionDesafioStarships from '@/components/segmentos/desafios/components/section-starships'
import SectionDesafioVehicles from '@/components/segmentos/desafios/components/section-vehicle'

function PageDesafio() {
  return (
    <main className="mt-8 flex flex-col gap-8">
      <SectionDesafioPerson />
      <SectionDesafioPlanet />
      <SectionDesafioFilms />
      <SectionDesafioStarships />
      <SectionDesafioVehicles />
    </main>
  )
}

export default PageDesafio
