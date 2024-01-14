import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeStarships } from '@/types/Typesfetch'
import promiseAllFormatedDataDescriptionSubList from '@/utils/promiseAll-formated-data-description-sub-list'
import SubList from './section-species/sub-list'

type TypeDescriptionSubListStarshipsProps = {
  urls: string[]
  title: string
}

const DescriptionSubListStarships = async ({
  urls,
  title
}: TypeDescriptionSubListStarshipsProps) => {
  const arrayNamesOfspecies =
    await promiseAllFormatedDataDescriptionSubList<TypeStarships>({
      urls,
      chave: 'name'
    })

  return (
    <TypographyListItem>
      <TypographySmall> {title}</TypographySmall>
      {arrayNamesOfspecies && (
        <SubList dataCaracteristicas={arrayNamesOfspecies} />
      )}
    </TypographyListItem>
  )
}

export default DescriptionSubListStarships
