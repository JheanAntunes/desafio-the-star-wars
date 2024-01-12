import {
  TypeSchemaFormFieldName,
  schemaFormFieldName
} from '@/components/schema/schema-form-who-is'
import { useContextChallengePersonCompleted } from '@/context/context-challenge-person-completed'
import { zodResolver } from '@hookform/resolvers/zod'
import { useId } from 'react'
import { useForm } from 'react-hook-form'

const useFormWhoIs = () => {
  const form = useForm<TypeSchemaFormFieldName>({
    mode: 'all',
    resolver: zodResolver(schemaFormFieldName),
    defaultValues: {
      name: ''
    }
  })

  const { setChallengeCompleted } = useContextChallengePersonCompleted()

  const generateAccessibilityID = useId()

  return { form, generateAccessibilityID, setChallengeCompleted }
}

export default useFormWhoIs
