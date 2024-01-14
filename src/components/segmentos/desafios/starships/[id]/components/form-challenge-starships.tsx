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

const FormChallengeStarships = ({
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
    propertyCategory: 'challengerStarships'
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
                  placeholder="Nome desta nave estelar ?"
                  {...field}
                  className={cn(
                    'bg-transparent',
                    form.formState.errors.name ? 'border-red-500' : ''
                  )}
                />
              </FormControl>
              <FormDescription>
                {' '}
                O nome desta nave estelar. O nome comum, como &quot;Death
                Star&quot;
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

export default FormChallengeStarships
