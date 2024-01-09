import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeFilms } from '@/types/Typesfetch'
import SubList from '../../../components/section-species/sub-list'
import promiseAllFormatedDataDescription from './utils/promiseAll-formated-data-description-sub-list'
type TypeDesafioPersonDescriptionSubListFilmsProps = {
  urls: string[]
}

const DesafioPersonDescriptionSubListFilms = async ({
  urls
}: TypeDesafioPersonDescriptionSubListFilmsProps) => {
  const TitleFilms = await promiseAllFormatedDataDescription<TypeFilms>({
    urls,
    chave: 'title'
  })

  return (
    <TypographyListItem>
      <TypographySmall> Filmes em que essa pessoa esteve:</TypographySmall>
      {TitleFilms && <SubList dataCaracteristicas={TitleFilms} />}
    </TypographyListItem>
  )
}

export default DesafioPersonDescriptionSubListFilms
