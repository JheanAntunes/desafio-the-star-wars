import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographySmall
} from '@/components/ui/typography'
import { TypeFetch, TypeVehicle } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import FormChallengeVehicle from './form-challenge-vehicle'

type TypeDesafioVehicle = {
  id: string
  page: string
}

const DesafioVehicle = async ({ id, page }: TypeDesafioVehicle) => {
  const { results } = await fetchGet<TypeFetch<TypeVehicle>>(
    `${BASE_URL_API}/vehicles?page=${page}&format=json`
  )
  const { name } = results[Number(id)]

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <TypographyH1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Desafio de Veículo
        </TypographyH1>
        <TypographyP>Você precisa adivinhar o nome desse veículo.</TypographyP>
        <TypographySmall>Dica: Leia a descrição deste desafio</TypographySmall>
      </div>
      <div className="flex flex-col gap-5">
        <TypographyH2 className="font-sans text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Veículo ?
        </TypographyH2>
        <div className="w-full max-w-96">
          <FormChallengeVehicle secretCaracteristica={name} />
        </div>
      </div>
    </div>
  )
}

export default DesafioVehicle
