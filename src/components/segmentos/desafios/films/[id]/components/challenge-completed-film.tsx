import SkeletonCategorias from '@/components/ui/skeletons/skeleton-categorias'
import { TypeFetch, TypeFilms } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { formatedString } from '@/utils/formated-string'
import { Suspense } from 'react'
import UIChallengeCompleted from '../../../components/ui-challenge-completed'
import DesafioFilm from './desafio-film'

type TypeChallengerCompletedProps = {
  id: string
  page: string
  challengerCompleted?: string
}

const ChallengeCompletedFilm = async ({
  id,
  page,
  challengerCompleted
}: TypeChallengerCompletedProps) => {
  const { results } = await fetchGet<TypeFetch<TypeFilms>>(
    `${BASE_URL_API}/films/?page=${page}&format=json`
  )

  const { title } = results[Number(id)]

  if (
    challengerCompleted &&
    formatedString(challengerCompleted) === formatedString(title)
  ) {
    return <UIChallengeCompleted name={challengerCompleted} />
  }

  return (
    <Suspense fallback={<SkeletonCategorias />}>
      <DesafioFilm id={id} page={page} />
    </Suspense>
  )
}

export default ChallengeCompletedFilm
