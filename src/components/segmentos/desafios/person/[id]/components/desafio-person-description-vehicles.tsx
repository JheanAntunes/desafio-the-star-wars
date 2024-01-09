import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeVehicle } from '@/types/Typesfetch'
import SubList from '../../../components/section-species/sub-list'
import promiseAllFormatedDataDescription from './utils/promiseAll-formated-data-description-sub-list'

type TypeDesafioPersonDescriptionSubListVehiclesProps = {
  urls: string[]
}

const DesafioPersonDescriptionSubListVehicles = async ({
  urls
}: TypeDesafioPersonDescriptionSubListVehiclesProps) => {
  const arrayNamesOfSpecies =
    await promiseAllFormatedDataDescription<TypeVehicle>({
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
