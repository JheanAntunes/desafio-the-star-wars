import { TypeFetch, TypeFetchCategory, TypePlanet } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { formatedString } from '@/utils/formated-string'
import UIChallengeCompleted from '../../../components/ui-challenge-completed'

type TypeChallengerCompletedProps = {
  id: string
  page: string
  challengerCompleted?: string
  fetchCategory: TypeFetchCategory
} & React.PropsWithChildren

const ChallengerCompleted = async ({
  id,
  page,
  fetchCategory,
  challengerCompleted,
  children
}: TypeChallengerCompletedProps) => {
  const { results } = await fetchGet<TypeFetch<TypePlanet>>(
    `${BASE_URL_API}/${fetchCategory}/?page=${page}&format=json`
  )

  const { name } = results[Number(id)]

  if (
    challengerCompleted &&
    formatedString(challengerCompleted) === formatedString(name)
  ) {
    return <UIChallengeCompleted name={challengerCompleted} />
  }

  return <>{children}</>
}

export default ChallengerCompleted
