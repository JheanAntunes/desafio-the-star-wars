import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographySmall
} from '@/components/ui/typography'
import { TypeFetch, TypePerson } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import DontShowComponentChallengeCompleted from './dont-show-component-challenge-completed'
import FormWhoIs from './form-who-is'

type TypeDesafioPersonProps = {
  id: string
  page: string
}

const DesafioPerson = async ({ id, page }: TypeDesafioPersonProps) => {
  const { results } = await fetchGet<TypeFetch<TypePerson>>(
    `${BASE_URL_API}/people/?page=${page}&format=json`
  )

  const dataPerson = results[Number(id)]

  return (
    <DontShowComponentChallengeCompleted secretCaracteristica={dataPerson.name}>
      <div className="mx-auto w-full max-w-4xl">
        <TypographyH1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Desafio de Pessoa
        </TypographyH1>
        <TypographyP>Você precisa adivinhar o nome da pessoa</TypographyP>
        <TypographySmall>Dica: Leia a descrição da pessoa</TypographySmall>
      </div>
      <div className="flex flex-col gap-5">
        <TypographyH2 className="font-sans text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Quem é ?
        </TypographyH2>
        <div className="w-full max-w-96">
          <FormWhoIs secretCaracteristica={dataPerson.name} />
        </div>
      </div>
    </DontShowComponentChallengeCompleted>
  )
}

export default DesafioPerson
