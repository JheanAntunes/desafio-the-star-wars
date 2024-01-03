import SectionDesafioPerson from '@/components/segmentos/desafios/components/section/section-person/section-desafio-person'
import SectionDesafioPlanet from '@/components/segmentos/desafios/components/section/section-planet'

function PageDesafio() {
  return (
    <main className="mt-8 flex flex-col gap-8">
      <SectionDesafioPerson />
      <SectionDesafioPlanet />
    </main>
  )
}

export default PageDesafio
