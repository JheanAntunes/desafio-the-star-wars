'use client'
import useFormChallenger from '@/components/hooks/useFormChallenger'
import useGenerateAccessibilityID from '@/components/hooks/useGenerateAccessibilityID'
import useSearch from '@/components/hooks/useSearch'
import LogicFormChallenger from '@/components/logic/logic-form-challenger'
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

type TypeFormChallengerProps = {
  secretCaracteristica: string
}

const FormChallengeFilm = ({
  secretCaracteristica
}: TypeFormChallengerProps) => {
  const { form } = useFormChallenger()
  const { generateAccessibilityID } = useGenerateAccessibilityID()
  const { params, pathname, replace } = useSearch()
  const { formValidatedSuccessfully } = LogicFormChallenger({
    secretCaracteristica,
    params,
    pathname,
    replace,
    propertyCategory: 'challengerFilms'
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
              <FormLabel htmlFor={generateAccessibilityID}>
                Nome do título:
              </FormLabel>
              <FormControl>
                <Input
                  id={generateAccessibilityID}
                  placeholder="Nome do Título deste filme ?"
                  {...field}
                  className={cn(
                    'bg-transparent',
                    form.formState.errors.name ? 'border-red-500' : ''
                  )}
                />
              </FormControl>
              <FormDescription>
                {' '}
                Qual é o nome do título deste filme ?
              </FormDescription>
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

export default FormChallengeFilm
