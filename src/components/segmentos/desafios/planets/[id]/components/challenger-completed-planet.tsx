import WrapperLocalStorage from '@/components/segmentos/components/wrapperLocalStorage'
import SkeletonCategorias from '@/components/ui/skeletons/skeleton-categorias'
import { TypeFetch, TypePlanet } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { formatedString } from '@/utils/formated-string'
import { Suspense } from 'react'
import UIChallengeCompleted from '../../../components/ui-challenge-completed'
import DesafioPlanets from './desafio-planets'

type TypeChallengerCompletedProps = {
  id: string
  page: string
  challengerCompleted?: string
}

const ChallengerCompletedPlanet = async ({
  id,
  page,
  challengerCompleted
}: TypeChallengerCompletedProps) => {
  const { results } = await fetchGet<TypeFetch<TypePlanet>>(
    `${BASE_URL_API}/planets/?page=${page}&format=json`
  )

  const { name } = results[Number(id)]

  if (
    challengerCompleted &&
    formatedString(challengerCompleted) === formatedString(name)
  ) {
    return <UIChallengeCompleted name={challengerCompleted} />
  }

  return (
    <WrapperLocalStorage caracteristica={name} categoria="challengerPlanets">
      <Suspense fallback={<SkeletonCategorias />}>
        <DesafioPlanets id={id} page={page} />
      </Suspense>
    </WrapperLocalStorage>
  )
}

export default ChallengerCompletedPlanet
