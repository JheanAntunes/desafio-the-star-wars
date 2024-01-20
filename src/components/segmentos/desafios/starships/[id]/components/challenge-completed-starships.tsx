import WrapperLocalStorage from '@/components/segmentos/components/wrapperLocalStorage'
import SkeletonCategorias from '@/components/ui/skeletons/skeleton-categorias'
import { TypeFetch, TypeStarships } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { formatedString } from '@/utils/formated-string'
import { Suspense } from 'react'
import UIChallengeCompleted from '../../../components/ui-challenge-completed'
import DesafioStarships from './desafio-starships'

type TypeChallengeCompletedStarshipsProps = {
  id: string
  page: string
  challengerCompleted?: string
}

const ChallengeCompletedStarships = async ({
  id,
  page,
  challengerCompleted
}: TypeChallengeCompletedStarshipsProps) => {
  const { results } = await fetchGet<TypeFetch<TypeStarships>>(
    `${BASE_URL_API}/starships/?page=${page}&format=json`
  )

  const { name } = results[Number(id)]

  if (
    challengerCompleted &&
    formatedString(name) === formatedString(challengerCompleted)
  ) {
    return <UIChallengeCompleted name={challengerCompleted} />
  }
  return (
    <WrapperLocalStorage caracteristica={name} categoria="challengerStarships">
      <Suspense fallback={<SkeletonCategorias />}>
        <DesafioStarships id={id} page={page} />
      </Suspense>
    </WrapperLocalStorage>
  )
}

export default ChallengeCompletedStarships
