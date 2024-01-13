import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographySmall
} from '@/components/ui/typography'
import { TypeFetch, TypePlanet } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import FormChallengerPlanet from './form-challenger-planet'

type TypeDesafioPlanets = {
  id: string
  page: string
}

const DesafioPlanets = async ({ id, page }: TypeDesafioPlanets) => {
  const { results } = await fetchGet<TypeFetch<TypePlanet>>(
    `${BASE_URL_API}/planets?page=${page}&format=json`
  )
  const dataPlanet = results[Number(id)]

  return (
    <div className="mt-8 flex flex-col gap-8">
      <div className="text-center">
        <TypographyH1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Desafio de Planeta
        </TypographyH1>
        <TypographyP>Você precisa adivinhar o nome deste planeta</TypographyP>
        <TypographySmall>Dica: Leia a descrição deste planeta</TypographySmall>
      </div>
      <div className="flex flex-col gap-5">
        <TypographyH2 className="font-sans text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Qual é o planeta ?
        </TypographyH2>
        <div className="w-full max-w-96">
          <FormChallengerPlanet secretCaracteristica={dataPlanet.name} />
        </div>
      </div>
    </div>
  )
}

export default DesafioPlanets
