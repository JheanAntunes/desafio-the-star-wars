'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import useFormChallengerPlanet from '../../../../../hooks/useFormChallenger'
import useGenerateAccessibilityID from '../../../../../hooks/useGenerateAccessibilityID'
import useSearch from '../../../../../hooks/useSearch'
import LogicFormChallengerPlanet from '../../../../../logic/logic-form-challenger'

type TypeFormChallengerPlanetProps = {
  secretCaracteristica: string
}

const FormChallengerPlanet = ({
  secretCaracteristica
}: TypeFormChallengerPlanetProps) => {
  const { form } = useFormChallengerPlanet()
  const { generateAccessibilityID } = useGenerateAccessibilityID()
  const { params, pathname, replace } = useSearch()
  const { formValidatedSuccessfully } = LogicFormChallengerPlanet({
    secretCaracteristica,
    params,
    pathname,
    replace,
    propertyCategory: 'challengerPlanets'
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(formValidatedSuccessfully)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={generateAccessibilityID}>Nome:</FormLabel>
              <FormControl>
                <Input
                  id={generateAccessibilityID}
                  placeholder="Nome do planeta ?"
                  {...field}
                  className={cn(
                    'bg-transparent',
                    form.formState.errors.name ? 'border-red-500' : ''
                  )}
                />
              </FormControl>
              <FormDescription> Qual é o nome deste planeta ?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </form>
    </Form>
  )
}

export default FormChallengerPlanet
