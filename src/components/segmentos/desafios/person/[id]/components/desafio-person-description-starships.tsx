import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeStarships } from '@/types/Typesfetch'
import { fetchGet } from '@/utils/fetch'
import SubList from '../../../components/section-species/sub-list'

type TypeDesafioPersonDescriptionSubListStarshipsProps = {
  urls: string[]
}

const DesafioPersonDescriptionSubListStarships = async ({
  urls
}: TypeDesafioPersonDescriptionSubListStarshipsProps) => {
  const arrayFetch = urls.map((url) =>
    fetchGet<TypeStarships>(`${url}?format=json`)
  )
  const resolvedPromisesArray = await Promise.all(arrayFetch)
  const arrayNamesOfspecies = resolvedPromisesArray.map(({ name }) => name)

  return (
    <TypographyListItem>
      <TypographySmall>
        {' '}
        Naves estelares que esta pessoa pilotou:
      </TypographySmall>
      <SubList dataCaracteristicas={arrayNamesOfspecies} />
    </TypographyListItem>
  )
}

export default DesafioPersonDescriptionSubListStarships
