import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeStarships } from '@/types/Typesfetch'
import promiseAllFormatedDataDescriptionSubList from '@/utils/promiseAll-formated-data-description-sub-list'
import SubList from '../../../components/section-species/sub-list'

type TypeDesafioPersonDescriptionSubListStarshipsProps = {
  urls: string[]
}

const DesafioPersonDescriptionSubListStarships = async ({
  urls
}: TypeDesafioPersonDescriptionSubListStarshipsProps) => {
  const arrayNamesOfspecies =
    await promiseAllFormatedDataDescriptionSubList<TypeStarships>({
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
