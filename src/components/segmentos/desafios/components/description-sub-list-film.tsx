import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeFilms } from '@/types/Typesfetch'
import promiseAllFormatedDataDescriptionSubList from '@/utils/promiseAll-formated-data-description-sub-list'
import SubList from './sub-list'

type TypeDescriptionSubListFilmsProps = {
  urls: string[]
  title: string
}

const DescriptionSubListFilms = async ({
  urls,
  title
}: TypeDescriptionSubListFilmsProps) => {
  const TitleFilms = await promiseAllFormatedDataDescriptionSubList<TypeFilms>({
    urls,
    chave: 'title'
  })

  return (
    <TypographyListItem>
      <TypographySmall>{title} </TypographySmall>
      {TitleFilms && <SubList dataCaracteristicas={TitleFilms} />}
    </TypographyListItem>
  )
}

export default DescriptionSubListFilms
