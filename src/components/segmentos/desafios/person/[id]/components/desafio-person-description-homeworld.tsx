import { TypographyListItem } from '@/components/ui/typography'
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
    <TypographyListItem className="text-sm font-medium leading-none text-zinc-900">
      um planeta onde esta pessoa nasceu ou habita: {name}
    </TypographyListItem>
  )
}

export default DesafioPersonDescriptionHomeWorld
