import * as z from 'zod'

export const schemaFormFieldName = z.object({
  name: z
    .string({
      required_error: 'Por favor, Digite o nome'
    })
    .min(1, { message: 'Por favor, Digite o nome' })
})

export type TypeSchemaFormFieldName = z.infer<typeof schemaFormFieldName>
