import { TypeDataStorageChallenger } from '@/types/TypeLocalStorage'

type TypelogicLocalStorage = {
  storageChave: string
  storageValue: string
  propertyAddValue: keyof TypeDataStorageChallenger
}
const logicLocalStorageDataChallenger = ({
  storageChave,
  storageValue,
  propertyAddValue
}: TypelogicLocalStorage) => {
  // localStorage verificated
  const dataStorageChallenger = localStorage.getItem(storageChave)
  if (!dataStorageChallenger) {
    const addDataLocalStorage: TypeDataStorageChallenger = {}
    addDataLocalStorage[propertyAddValue] = [storageValue]
    //localStorage add Chave
    localStorage.setItem(
      storageChave,
      JSON.stringify({
        ...addDataLocalStorage
      })
    )
    //break functions
    return
  }

  const formatedDataStorageChallenger: TypeDataStorageChallenger = JSON.parse(
    dataStorageChallenger
  )

  if (!formatedDataStorageChallenger[propertyAddValue]) {
    formatedDataStorageChallenger[propertyAddValue] = [storageValue]
    //localStorage add property
    localStorage.setItem(
      storageChave,
      JSON.stringify({
        ...formatedDataStorageChallenger
      })
    )
    //break functionss
    return
  }

  const verificatedValue =
    formatedDataStorageChallenger[propertyAddValue]?.includes(storageValue)

  if (!verificatedValue) {
    //add value
    formatedDataStorageChallenger[propertyAddValue] = [
      ...formatedDataStorageChallenger[propertyAddValue]!,
      storageValue
    ]

    localStorage.setItem(
      storageChave,
      JSON.stringify({
        ...formatedDataStorageChallenger
      })
    )
  }
}

export default logicLocalStorageDataChallenger
