import * as zod from 'zod';

const envSchema = zod.object({});

export const env = envSchema.parse(process.env);
