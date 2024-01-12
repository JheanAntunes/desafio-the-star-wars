import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeVehicle } from '@/types/Typesfetch'
import promiseAllFormatedDataDescriptionSubList from '@/utils/promiseAll-formated-data-description-sub-list'
import SubList from '../../../components/section-species/sub-list'

type TypeDesafioPersonDescriptionSubListVehiclesProps = {
  urls: string[]
}

const DesafioPersonDescriptionSubListVehicles = async ({
  urls
}: TypeDesafioPersonDescriptionSubListVehiclesProps) => {
  const arrayNamesOfSpecies =
    await promiseAllFormatedDataDescriptionSubList<TypeVehicle>({
      chave: 'name',
      urls
    })

  return (
    <TypographyListItem>
      <TypographySmall> Veículos que essa pessoa pilotou:</TypographySmall>
      {arrayNamesOfSpecies && (
        <SubList dataCaracteristicas={arrayNamesOfSpecies} />
      )}
    </TypographyListItem>
  )
}

export default DesafioPersonDescriptionSubListVehicles
