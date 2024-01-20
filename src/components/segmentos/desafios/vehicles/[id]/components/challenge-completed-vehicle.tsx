import WrapperLocalStorage from '@/components/segmentos/components/wrapperLocalStorage'
import SkeletonCategorias from '@/components/ui/skeletons/skeleton-categorias'
import { TypeFetch, TypeVehicle } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { formatedString } from '@/utils/formated-string'
import { Suspense } from 'react'
import UIChallengeCompleted from '../../../components/ui-challenge-completed'
import DesafioVehicle from './desafio-vehicle'

type TypeChallengeCompletedVehiclesProps = {
  id: string
  page: string
  challengerCompleted?: string
}

const ChallengeCompletedVehicles = async ({
  id,
  page,
  challengerCompleted
}: TypeChallengeCompletedVehiclesProps) => {
  const { results } = await fetchGet<TypeFetch<TypeVehicle>>(
    `${BASE_URL_API}/vehicles/?page=${page}&format=json`
  )

  const { name } = results[Number(id)]

  if (
    challengerCompleted &&
    formatedString(name) === formatedString(challengerCompleted)
  ) {
    return <UIChallengeCompleted name={challengerCompleted} />
  }
  return (
    <WrapperLocalStorage caracteristica={name} categoria="challengerVehicles">
      <Suspense fallback={<SkeletonCategorias />}>
        <DesafioVehicle id={id} page={page} />
      </Suspense>
    </WrapperLocalStorage>
  )
}

export default ChallengeCompletedVehicles
