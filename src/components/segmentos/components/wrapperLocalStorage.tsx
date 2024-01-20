'use client'
import useLocalStorageChallenger from '@/components/hooks/useLocalStorageChallenger'
import { TypeDataStorageChallenger } from '@/types/TypeLocalStorage'
import UIChallengeCompleted from '../desafios/components/ui-challenge-completed'

type TypeWrapperLocalStorageProps = React.PropsWithChildren & {
  caracteristica: string
  categoria: keyof TypeDataStorageChallenger
}
const WrapperLocalStorage = ({
  categoria,
  caracteristica,
  children
}: TypeWrapperLocalStorageProps) => {
  const { hasCaracteristica } = useLocalStorageChallenger({
    categoria,
    caracteristica
  })

  if (hasCaracteristica) {
    return <UIChallengeCompleted name={caracteristica} />
  }

  return <>{children}</>
}

export default WrapperLocalStorage
