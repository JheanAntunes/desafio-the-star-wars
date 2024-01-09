import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeSpecies } from '@/types/Typesfetch'
import SubList from '../../../components/section-species/sub-list'
import promiseAllFormatedDataDescriptionSubList from './utils/promiseAll-formated-data-description-sub-list'

type TypeDesafioPersonDescriptionSubListSpeciesProps = {
  urls: string[]
}

const DesafioPersonDescriptionSubListSpecies = async ({
  urls
}: TypeDesafioPersonDescriptionSubListSpeciesProps) => {
  const arrayNamesOfSpecies =
    await promiseAllFormatedDataDescriptionSubList<TypeSpecies>({
      urls,
      chave: 'name'
    })

  return (
    <TypographyListItem>
      <TypographySmall>
        {' '}
        Espécies às quais esta pessoa pertence:
      </TypographySmall>
      {arrayNamesOfSpecies && (
        <SubList dataCaracteristicas={arrayNamesOfSpecies} />
      )}
    </TypographyListItem>
  )
}

export default DesafioPersonDescriptionSubListSpecies
