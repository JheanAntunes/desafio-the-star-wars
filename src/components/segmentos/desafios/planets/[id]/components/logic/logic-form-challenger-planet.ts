import ToastFailedChallenger from '@/components/assets/toast-failed-challenger'
import ToastCompletedChallenger from '@/components/hooks/toast-completed-challenger'
import { TypeSchemaFormFieldName } from '@/components/schema/schema-form-who-is'
import { formatedString } from '@/utils/formated-string'
import logicLocalStorageDataChallenger from '@/utils/logic-localStorage-data-challenger'
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { SubmitHandler } from 'react-hook-form'

type TypeLogicFormChallengerPlanet = {
  secretCaracteristica: string
  params: URLSearchParams
  pathname: string
  replace: (href: string, options?: NavigateOptions | undefined) => void
}
const LogicFormChallengerPlanet = ({
  secretCaracteristica,
  params,
  pathname,
  replace
}: TypeLogicFormChallengerPlanet) => {
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
        propertyAddValue: 'challengerPlanets'
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

export default LogicFormChallengerPlanet
