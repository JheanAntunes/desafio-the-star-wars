import { TypeDataStorageChallenger } from '@/types/TypeLocalStorage'
import { formatedString } from '@/utils/formated-string'
import { keyStorage } from '@/utils/key-localstorage'
import { useEffect, useState } from 'react'

type UseLocalStorageChallengerProps = {
  caracteristica: string
  categoria: keyof TypeDataStorageChallenger
}
const useLocalStorageChallenger = ({
  caracteristica,
  categoria
}: UseLocalStorageChallengerProps) => {
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

  return {
    hasCaracteristica
  }
}

export default useLocalStorageChallenger
