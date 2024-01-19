'use client'
import { TypeDataStorageChallenger } from '@/types/TypeLocalStorage'
import { formatedString } from '@/utils/formated-string'
import { keyStorage } from '@/utils/key-localstorage'
import { useEffect, useState } from 'react'
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
  const [hasCaracteristica, setHasCaracteristica] = useState(false)

  useEffect(() => {
    const formatedCaracteristica = formatedString(caracteristica)
    const dataStorageChallenger = localStorage.getItem(keyStorage)
    if (dataStorageChallenger) {
      const formatedData: TypeDataStorageChallenger = JSON.parse(
        dataStorageChallenger
      )
      if (formatedData[categoria]) {
        const verificated = formatedData[categoria]!.includes(
          formatedCaracteristica
        )
        if (verificated) {
          setHasCaracteristica(true)
        }
      }
    }
  }, [caracteristica, categoria])

  if (hasCaracteristica) {
    return <UIChallengeCompleted name={caracteristica} />
  }
  return <>{children}</>
}

export default WrapperLocalStorage
