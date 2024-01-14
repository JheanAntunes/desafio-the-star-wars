import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeVehicle } from '@/types/Typesfetch'
import promiseAllFormatedDataDescriptionSubList from '@/utils/promiseAll-formated-data-description-sub-list'
import SubList from './section-species/sub-list'

type TypeDescriptionSubListVehiclesProps = {
  urls: string[]
  title: string
}

const DescriptionSubListVehicles = async ({
  urls,
  title
}: TypeDescriptionSubListVehiclesProps) => {
  const arrayNamesOfSpecies =
    await promiseAllFormatedDataDescriptionSubList<TypeVehicle>({
      chave: 'name',
      urls
    })

  return (
    <TypographyListItem>
      <TypographySmall>{title}</TypographySmall>
      {arrayNamesOfSpecies && (
        <SubList dataCaracteristicas={arrayNamesOfSpecies} />
      )}
    </TypographyListItem>
  )
}

export default DescriptionSubListVehicles
