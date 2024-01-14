import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographySmall
} from '@/components/ui/typography'
import { TypeFetch, TypeStarships } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import FormChallengeStarships from './form-challenge-starships'

type TypeDesafioStarships = {
  id: string
  page: string
}

const DesafioStarships = async ({ id, page }: TypeDesafioStarships) => {
  const { results } = await fetchGet<TypeFetch<TypeStarships>>(
    `${BASE_URL_API}/starships?page=${page}&format=json`
  )
  const dataStarships = results[Number(id)]

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <TypographyH1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Desafio de Nave Estelar
        </TypographyH1>
        <TypographyP>
          Você precisa adivinhar o nome dessa nave estelar.
        </TypographyP>
        <TypographySmall>Dica: Leia a descrição deste desafio</TypographySmall>
      </div>
      <div className="flex flex-col gap-5">
        <TypographyH2 className="font-sans text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Nave estelar ?
        </TypographyH2>
        <div className="w-full max-w-96">
          <FormChallengeStarships secretCaracteristica={dataStarships.name} />
        </div>
      </div>
    </div>
  )
}

export default DesafioStarships
