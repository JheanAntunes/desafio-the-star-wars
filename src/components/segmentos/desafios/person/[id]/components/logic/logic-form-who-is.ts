import { TypeSchemaFormFieldName } from '@/components/schema/schema-form-who-is'
import { SubmitHandler } from 'react-hook-form'

import { formatedString } from '@/utils/formated-string'
import logicLocalStorageDataChallenger from '@/utils/logic-localStorage-data-challenger'
import ToastCompletedChallenger from '@/utils/toast-completed-challenger'
import ToastFailedChallenger from '@/utils/toast-failed-challenger'
import useFormWhoIs from '../hook/useFormWhoIs'

type TypeLogicFormWhoIsProps = {
  secretCaracteristica: string
}

const LogicFormWhoIs = ({ secretCaracteristica }: TypeLogicFormWhoIsProps) => {
  const { form, generateAccessibilityID, setChallengeCompleted } =
    useFormWhoIs()

  const formatedSecretCaracteristica = formatedString(secretCaracteristica)

  const formValidatedSuccessfully: SubmitHandler<TypeSchemaFormFieldName> = (
    dataForm
  ) => {
    if (formatedString(dataForm.name) === formatedSecretCaracteristica) {
      //toast: message completed
      ToastCompletedChallenger({})

      //context: Challenge Completeds
      setChallengeCompleted(true)

      //localStorage:
      logicLocalStorageDataChallenger({
        storageChave: 'storageChallenger',
        storageValue: formatedSecretCaracteristica,
        propertyAddValue: 'challengerPersons'
      })
    } else {
      //toast: message failed
      ToastFailedChallenger({})
    }
  }

  return {
    form,
    generateAccessibilityID,
    formValidatedSuccessfully
  }
}

export default LogicFormWhoIs
