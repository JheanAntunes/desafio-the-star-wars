import { TypeFetch, TypeVehicle } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { formatedString } from '@/utils/formated-string'
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
  return <DesafioVehicle id={id} page={page} />
}

export default ChallengeCompletedVehicles
