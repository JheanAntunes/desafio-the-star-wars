import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypePlanet } from '@/types/Typesfetch'
import promiseAllFormatedDataDescriptionSubList from '@/utils/promiseAll-formated-data-description-sub-list'
import SubList from './sub-list'

type TypeDescriptionSubListPlanetProps = {
  urls: string[]
  title: string
}

const DescriptionSubListPlanet = async ({
  urls,
  title
}: TypeDescriptionSubListPlanetProps) => {
  const TitleFilms = await promiseAllFormatedDataDescriptionSubList<TypePlanet>(
    {
      urls,
      chave: 'name'
    }
  )

  return (
    <TypographyListItem>
      <TypographySmall>{title}</TypographySmall>
      {TitleFilms && <SubList dataCaracteristicas={TitleFilms} />}
    </TypographyListItem>
  )
}

export default DescriptionSubListPlanet
