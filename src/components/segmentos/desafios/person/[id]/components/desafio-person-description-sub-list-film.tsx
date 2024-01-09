import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeFilms } from '@/types/Typesfetch'
import { fetchGet } from '@/utils/fetch'
import SubList from '../../../components/section-species/sub-list'

type TypeDesafioPersonDescriptionSubListFilmsProps = {
  urls: string[]
}

const DesafioPersonDescriptionSubListFilms = async ({
  urls
}: TypeDesafioPersonDescriptionSubListFilmsProps) => {
  const arrayFetch = urls.map((url) => fetchGet<TypeFilms>(url))
  const resolvedPromisesArray = await Promise.all(arrayFetch)
  const TitleFilms = resolvedPromisesArray.map(({ title }) => title)

  return (
    <TypographyListItem>
      <TypographySmall> Filmes em que essa pessoa esteve:</TypographySmall>
      <SubList dataCaracteristicas={TitleFilms} />
    </TypographyListItem>
  )
}

export default DesafioPersonDescriptionSubListFilms
