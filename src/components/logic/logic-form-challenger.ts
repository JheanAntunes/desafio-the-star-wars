import { TypeSchemaFormFieldName } from '@/components/schema/schema-form-who-is'
import { TypeDataStorageChallenger } from '@/types/TypeLocalStorage'
import { formatedString } from '@/utils/formated-string'
import logicLocalStorageDataChallenger from '@/utils/logic-localStorage-data-challenger'
import ToastCompletedChallenger from '@/utils/toast-completed-challenger'
import ToastFailedChallenger from '@/utils/toast-failed-challenger'
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { SubmitHandler } from 'react-hook-form'

type TypeLogicFormChallenger = {
  secretCaracteristica: string
  params: URLSearchParams
  pathname: string
  replace: (href: string, options?: NavigateOptions | undefined) => void
  propertyCategory: keyof TypeDataStorageChallenger
}
const LogicFormChallenger = ({
  secretCaracteristica,
  params,
  pathname,
  replace,
  propertyCategory
}: TypeLogicFormChallenger) => {
  const formValidatedSuccessfully: SubmitHandler<TypeSchemaFormFieldName> = (
    dataForm
  ) => {
    if (
      formatedString(dataForm.name) === formatedString(secretCaracteristica)
    ) {
      // completed challenger
      ToastCompletedChallenger({})

      // localStorage:
      logicLocalStorageDataChallenger({
        storageChave: 'storageChallenger',
        storageValue: formatedString(dataForm.name),
        propertyAddValue: propertyCategory
      })

      // gererenciamento de desafio completado pela url:
      params.set('challengerCompleted', dataForm.name)
      replace(`${pathname}?${params.toString()}`)
    } else {
      // failed challenger
      ToastFailedChallenger({})
    }
  }

  return {
    formValidatedSuccessfully
  }
}

export default LogicFormChallenger
