import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeStarships } from '@/types/Typesfetch'
import SubList from '../../../components/section-species/sub-list'
import promiseAllFormatedDataDescription from './utils/promiseAll-formated-data-description-sub-list'

type TypeDesafioPersonDescriptionSubListStarshipsProps = {
  urls: string[]
}

const DesafioPersonDescriptionSubListStarships = async ({
  urls
}: TypeDesafioPersonDescriptionSubListStarshipsProps) => {
  const arrayNamesOfspecies =
    await promiseAllFormatedDataDescription<TypeStarships>({
      urls,
      chave: 'name'
    })

  return (
    <TypographyListItem>
      <TypographySmall>
        {' '}
        Naves estelares que esta pessoa pilotou:
      </TypographySmall>
      {arrayNamesOfspecies && (
        <SubList dataCaracteristicas={arrayNamesOfspecies} />
      )}
    </TypographyListItem>
  )
}

export default DesafioPersonDescriptionSubListStarships
