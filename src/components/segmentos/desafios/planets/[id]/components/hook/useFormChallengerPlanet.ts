import {
  TypeSchemaFormFieldName,
  schemaFormFieldName
} from '@/components/schema/schema-form-who-is'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const useFormChallengerPlanet = () => {
  const form = useForm<TypeSchemaFormFieldName>({
    mode: 'all',
    resolver: zodResolver(schemaFormFieldName),
    defaultValues: {
      name: ''
    }
  })

  return {
    form
  }
}

export default useFormChallengerPlanet
