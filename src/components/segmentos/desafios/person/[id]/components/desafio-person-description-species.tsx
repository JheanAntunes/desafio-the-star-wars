import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeSpecies } from '@/types/Typesfetch'
import { fetchGet } from '@/utils/fetch'
import SubList from '../../../components/section-species/sub-list'

type TypeDesafioPersonDescriptionSubListSpeciesProps = {
  urls: string[]
}

const DesafioPersonDescriptionSubListSpecies = async ({
  urls
}: TypeDesafioPersonDescriptionSubListSpeciesProps) => {
  const arrayFetch = urls.map((url) =>
    fetchGet<TypeSpecies>(`${url}?format=json`)
  )
  const resolvedPromisesArray = await Promise.all(arrayFetch)
  const arrayNamesOfSpecies = resolvedPromisesArray.map(({ name }) => name)

  return (
    <TypographyListItem>
      <TypographySmall>
        {' '}
        Espécies às quais esta pessoa pertence:
      </TypographySmall>
      <SubList dataCaracteristicas={arrayNamesOfSpecies} />
    </TypographyListItem>
  )
}

export default DesafioPersonDescriptionSubListSpecies
