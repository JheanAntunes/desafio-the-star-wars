import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypePerson } from '@/types/Typesfetch'
import promiseAllFormatedDataDescriptionSubList from '@/utils/promiseAll-formated-data-description-sub-list'
import SubList from '../../../../components/sub-list'

type TypeDescriptionSubListPersonProps = {
  urls: string[]
  title: string
}

const DescriptionSubListPerson = async ({
  urls,
  title
}: TypeDescriptionSubListPersonProps) => {
  const residents = await promiseAllFormatedDataDescriptionSubList<TypePerson>({
    urls,
    chave: 'name'
  })

  return (
    <TypographyListItem>
      <TypographySmall>{title}</TypographySmall>
      {residents && <SubList dataCaracteristicas={residents} />}
    </TypographyListItem>
  )
}

export default DescriptionSubListPerson
