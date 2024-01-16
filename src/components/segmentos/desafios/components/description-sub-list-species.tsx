import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeSpecies } from '@/types/Typesfetch'
import promiseAllFormatedDataDescriptionSubList from '@/utils/promiseAll-formated-data-description-sub-list'
import SubList from './sub-list'

type TypeDescriptionSubListSpeciesProps = {
  urls: string[]
  title: string
}

const DescriptionSubListSpecies = async ({
  urls,
  title
}: TypeDescriptionSubListSpeciesProps) => {
  const arrayNamesOfSpecies =
    await promiseAllFormatedDataDescriptionSubList<TypeSpecies>({
      urls,
      chave: 'name'
    })

  return (
    <TypographyListItem>
      <TypographySmall> {title}</TypographySmall>
      {arrayNamesOfSpecies && (
        <SubList dataCaracteristicas={arrayNamesOfSpecies} />
      )}
    </TypographyListItem>
  )
}

export default DescriptionSubListSpecies
