import { useToast } from '@/components/ui/use-toast'
import { useContextChallengePersonCompleted } from '@/context/context-challenge-person-completed'
import { zodResolver } from '@hookform/resolvers/zod'
import { useId } from 'react'
import { useForm } from 'react-hook-form'
import {
  TypeSchemaFormWhoIs,
  schemaFormWhoIs
} from '../schema/schema-form-who-is'

const useFormWhoIs = () => {
  const { toast } = useToast()

  const form = useForm<TypeSchemaFormWhoIs>({
    mode: 'all',
    resolver: zodResolver(schemaFormWhoIs),
    defaultValues: {
      name: ''
    }
  })

  const { setChallengeCompleted } = useContextChallengePersonCompleted()

  const generateAccessibilityID = useId()

  return { form, generateAccessibilityID, toast, setChallengeCompleted }
}

export default useFormWhoIs
