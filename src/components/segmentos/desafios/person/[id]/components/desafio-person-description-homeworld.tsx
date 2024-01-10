import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypePlanet } from '@/types/Typesfetch'
import { fetchGet } from '@/utils/fetch'

type TypeDesafioPersonDescriptionHomeWorldProps = {
  homeworld: string
}

const DesafioPersonDescriptionHomeWorld = async ({
  homeworld
}: TypeDesafioPersonDescriptionHomeWorldProps) => {
  const { name } = await fetchGet<TypePlanet>(homeworld)

  return (
    <TypographyListItem>
      <TypographySmall>
        um planeta onde esta pessoa nasceu ou habita
      </TypographySmall>
      <TypographySmall>{name}</TypographySmall>
    </TypographyListItem>
  )
}

export default DesafioPersonDescriptionHomeWorld
