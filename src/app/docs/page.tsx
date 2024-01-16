import SectionDocsFilms from '@/components/segmentos/docs/components/section-docs-films'
import SectionDocsPerson from '@/components/segmentos/docs/components/section-docs-person'
import SectionDocsPlanet from '@/components/segmentos/docs/components/section-docs-planets'
import SectionDocsSpecies from '@/components/segmentos/docs/components/section-docs-species'
import SectionDocsStarships from '@/components/segmentos/docs/components/section-docs-starships'
import SectionDocsVehicles from '@/components/segmentos/docs/components/section-docs-vehicles'

function PageDocs() {
  return (
    <main className="my-8 flex flex-col gap-8">
      <SectionDocsPerson />
      <SectionDocsPlanet />
      <SectionDocsFilms />
      <SectionDocsStarships />
      <SectionDocsVehicles />
      <SectionDocsSpecies />
    </main>
  )
}

export default PageDocs
