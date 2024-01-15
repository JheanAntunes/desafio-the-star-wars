import SkeletonCategorias from '@/components/ui/skeletons/skeleton-categorias'
import { TypeFetch, TypeSpecies } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { formatedString } from '@/utils/formated-string'
import { Suspense } from 'react'
import UIChallengeCompleted from '../../../components/ui-challenge-completed'
import ChallengeSpecies from './challenge-species'

type TypeChallengerCompletedProps = {
  id: string
  page: string
  challengerCompleted?: string
}

const ChallengerCompletedSpecies = async ({
  id,
  page,
  challengerCompleted
}: TypeChallengerCompletedProps) => {
  const { results } = await fetchGet<TypeFetch<TypeSpecies>>(
    `${BASE_URL_API}/species/?page=${page}&format=json`
  )

  const { name } = results[Number(id)]

  if (
    challengerCompleted &&
    formatedString(challengerCompleted) === formatedString(name)
  ) {
    return <UIChallengeCompleted name={challengerCompleted} />
  }

  return (
    <Suspense fallback={<SkeletonCategorias />}>
      <ChallengeSpecies id={id} page={page} />
    </Suspense>
  )
}

export default ChallengerCompletedSpecies
