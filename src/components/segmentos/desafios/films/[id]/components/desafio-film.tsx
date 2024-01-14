import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographySmall
} from '@/components/ui/typography'
import { TypeFetch, TypeFilms } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import FormChallengeFilm from './form-challenge-film'

type TypeDesafioFilm = {
  id: string
  page: string
}

const DesafioFilm = async ({ id, page }: TypeDesafioFilm) => {
  const { results } = await fetchGet<TypeFetch<TypeFilms>>(
    `${BASE_URL_API}/films?page=${page}&format=json`
  )
  const dataFilm = results[Number(id)]

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <TypographyH1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Desafio de Filme
        </TypographyH1>
        <TypographyP>
          Você precisa adivinhar o nome do Título deste Filme.
        </TypographyP>
        <TypographySmall>Dica: Leia a descrição deste Filme</TypographySmall>
      </div>
      <div className="flex flex-col gap-5">
        <TypographyH2 className="font-sans text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Título deste Filme ?
        </TypographyH2>
        <div className="w-full max-w-96">
          <FormChallengeFilm secretCaracteristica={dataFilm.title} />
        </div>
      </div>
    </div>
  )
}

export default DesafioFilm
