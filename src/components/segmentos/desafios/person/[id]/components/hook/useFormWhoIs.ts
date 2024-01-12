import { useContextChallengePersonCompleted } from '@/context/context-challenge-person-completed'
import { zodResolver } from '@hookform/resolvers/zod'
import { useId } from 'react'
import { useForm } from 'react-hook-form'
import {
  TypeSchemaFormWhoIs,
  schemaFormWhoIs
} from '../schema/schema-form-who-is'

const useFormWhoIs = () => {
  const form = useForm<TypeSchemaFormWhoIs>({
    mode: 'all',
    resolver: zodResolver(schemaFormWhoIs),
    defaultValues: {
      name: ''
    }
  })

  const { setChallengeCompleted } = useContextChallengePersonCompleted()

  const generateAccessibilityID = useId()

  return { form, generateAccessibilityID, setChallengeCompleted }
}

export default useFormWhoIs
