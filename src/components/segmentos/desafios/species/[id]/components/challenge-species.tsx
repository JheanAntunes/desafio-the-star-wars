import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographySmall
} from '@/components/ui/typography'
import { TypeFetch, TypeSpecies } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import FormChallengerSpecies from './form-challenge-species'

type TypeDesafioSpecies = {
  id: string
  page: string
}

const ChallengeSpecies = async ({ id, page }: TypeDesafioSpecies) => {
  const { results } = await fetchGet<TypeFetch<TypeSpecies>>(
    `${BASE_URL_API}/species?page=${page}&format=json`
  )
  const { name } = results[Number(id)]

  return (
    <div className="mt-8 flex flex-col gap-8">
      <div className="text-center">
        <TypographyH1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Desafio de Espécie
        </TypographyH1>
        <TypographyP>Você precisa adivinhar o nome desta espécie</TypographyP>
        <TypographySmall>Dica: Leia a descrição deste desafio</TypographySmall>
      </div>
      <div className="flex flex-col gap-5">
        <TypographyH2 className="font-sans text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Espécie ?
        </TypographyH2>
        <div className="w-full max-w-96">
          <FormChallengerSpecies secretCaracteristica={name} />
        </div>
      </div>
    </div>
  )
}

export default ChallengeSpecies
