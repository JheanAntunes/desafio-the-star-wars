'use client'
import { useContextChallengePersonCompleted } from '@/context/context-challenge-person-completed'
import UIChallengeCompleted from '../../../components/ui-challenge-completed'

type TypeDontShowComponentChallengeCompleted = {
  secretCaracteristica: string
} & React.PropsWithChildren
const DontShowComponentChallengeCompleted = ({
  children,
  secretCaracteristica
}: TypeDontShowComponentChallengeCompleted) => {
  const { challengeCompleted } = useContextChallengePersonCompleted()

  return challengeCompleted ? (
    <UIChallengeCompleted name={secretCaracteristica} />
  ) : (
    children
  )
}

export default DontShowComponentChallengeCompleted
