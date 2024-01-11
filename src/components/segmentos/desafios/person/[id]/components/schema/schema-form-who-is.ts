import * as z from 'zod'

export const schemaFormWhoIs = z.object({
  name: z
    .string({
      required_error: 'Por favor, Digite o nome dessa pessoa no campo'
    })
    .min(1, { message: 'Por favor, Digite o nome dessa pessoa no campo' })
})

export type TypeSchemaFormWhoIs = z.infer<typeof schemaFormWhoIs>
