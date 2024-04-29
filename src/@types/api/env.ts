import * as zod from 'zod';

const envSchema = zod.object({
  BASE_URL: zod.string()
});

export const env = envSchema.parse(process.env);
