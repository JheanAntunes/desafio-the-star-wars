import { SubmitHandler } from 'react-hook-form'
import useFormWhoIs from '../hook/useFormWhoIs'
import { TypeSchemaFormWhoIs } from '../schema/schema-form-who-is'
import { formatedString } from '../utils/formated-string'

type TypeLogicFormWhoIsProps = {
  secretCaracteristica: string
}

const LogicFormWhoIs = ({ secretCaracteristica }: TypeLogicFormWhoIsProps) => {
  const { form, generateAccessibilityID, toast, setChallengeCompleted } =
    useFormWhoIs()
  const formValidatedSuccessfully: SubmitHandler<TypeSchemaFormWhoIs> = (
    dataForm
  ) => {
    if (
      formatedString(dataForm.name) === formatedString(secretCaracteristica)
    ) {
      toast({
        title: 'Parabens!',
        description:
          'Desafio concluído. Você pode voltar para página de desafios dessa categoria para encontrar mais desafios.'
      })
      // Challenge Completed
      setChallengeCompleted(true)
    } else {
      toast({
        title: 'Oops!',
        description: 'Você errou, mas não desista.',
        variant: 'destructive'
      })
    }
  }

  return {
    form,
    generateAccessibilityID,
    formValidatedSuccessfully
  }
}

export default LogicFormWhoIs
