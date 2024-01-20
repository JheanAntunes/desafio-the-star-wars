import { TypeDataStorageChallenger } from '@/types/TypeLocalStorage'

type TypelogicLocalStorage = {
  storageChave: string
  property: keyof TypeDataStorageChallenger
  propertyValue: string
}

type TypeAdd = TypelogicLocalStorage & {
  dataStorage: TypeDataStorageChallenger
}

const addPropertyWithValue = ({
  dataStorage,
  storageChave,
  property,
  propertyValue
}: TypeAdd) => {
  //localStorage add property
  dataStorage[property] = [propertyValue]
  localStorage.setItem(
    storageChave,
    JSON.stringify({
      ...dataStorage
    })
  )
}

const addKeyLocalStorageWithInitialValue = ({
  storageChave,
  property,
  propertyValue
}: TypelogicLocalStorage) => {
  const addDataLocalStorage: TypeDataStorageChallenger = {}
  addPropertyWithValue({
    dataStorage: addDataLocalStorage,
    storageChave,
    property,
    propertyValue
  })
}

const addNewValueProperty = ({
  dataStorage,
  storageChave,
  property,
  propertyValue
}: TypeAdd) => {
  const verificatedValue = dataStorage[property]?.includes(propertyValue)
  if (!verificatedValue) {
    //add value
    dataStorage[property] = [...dataStorage[property]!, propertyValue]
    localStorage.setItem(
      storageChave,
      JSON.stringify({
        ...dataStorage
      })
    )
  }
  return
}

const logicLocalStorageDataChallenger = ({
  storageChave,
  property,
  propertyValue
}: TypelogicLocalStorage) => {
  // localStorage verificated
  const dataStorageChallenger = localStorage.getItem(storageChave)
  if (!dataStorageChallenger) {
    addKeyLocalStorageWithInitialValue({
      storageChave,
      property,
      propertyValue
    })
    //break
    return
  }

  const formatedDataStorageChallenger: TypeDataStorageChallenger = JSON.parse(
    dataStorageChallenger
  )

  if (!formatedDataStorageChallenger[property]) {
    addPropertyWithValue({
      dataStorage: formatedDataStorageChallenger,
      storageChave,
      property,
      propertyValue
    })
    //break function
    return
  }

  addNewValueProperty({
    dataStorage: formatedDataStorageChallenger,
    storageChave,
    property,
    propertyValue
  })
}

export default logicLocalStorageDataChallenger
