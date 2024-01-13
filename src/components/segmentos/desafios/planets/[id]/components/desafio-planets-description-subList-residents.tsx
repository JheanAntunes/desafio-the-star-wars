import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypePerson } from '@/types/Typesfetch'
import promiseAllFormatedDataDescriptionSubList from '@/utils/promiseAll-formated-data-description-sub-list'
import SubList from '../../../components/section-species/sub-list'

type TypeDesafioPlanetDescriptionSubListResidentsProps = {
  urls: string[]
}

const DesafioPlanetDescriptionSubListResidents = async ({
  urls
}: TypeDesafioPlanetDescriptionSubListResidentsProps) => {
  const residents = await promiseAllFormatedDataDescriptionSubList<TypePerson>({
    urls,
    chave: 'name'
  })

  return (
    <TypographyListItem>
      <TypographySmall> Pessoas que vivem neste planeta:</TypographySmall>
      {residents && <SubList dataCaracteristicas={residents} />}
    </TypographyListItem>
  )
}

export default DesafioPlanetDescriptionSubListResidents
