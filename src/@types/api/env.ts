import * as zod from 'zod'
const envSchema = zod.object({
  NEXT_PUBLIC_BASEURL: zod.string({
    invalid_type_error: 'BASE URL TYPE ERROR',
  }),
  NEXT_PUBLIC_PROTOCOL: zod.string({
    invalid_type_error: 'PROTOCOL TYPE ERROR',
  }),
  NEXT_PUBLIC_HOST: zod.string({ invalid_type_error: 'HOST TYPE ERROR' }),
  NEXT_PUBLIC_PORTDATABASE: zod
    .string({ invalid_type_error: 'PORT TYPE ERROR' })
    .transform((value) => {
      const numberValue = Number(value)
      if (isNaN(numberValue)) {
        throw new Error('PORT must be a number')
      }
      return numberValue
    }),
})
export const env = envSchema.parse({
  NEXT_PUBLIC_BASEURL: process.env.NEXT_PUBLIC_BASEURL,
  NEXT_PUBLIC_PROTOCOL: process.env.NEXT_PUBLIC_PROTOCOL,
  NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
  NEXT_PUBLIC_PORTDATABASE: process.env.NEXT_PUBLIC_PORTDATABASE,
})
