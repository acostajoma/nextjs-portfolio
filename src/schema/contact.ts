import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(3).max(30).trim(),
    email: z.string().email().trim(),
    company: z.string().min(3).max(50).trim().optional(),
    phone: z.string().regex(/^[0-9]{10,15}$/).trim().optional(),
    message: z.string().min(10).max(500),
  });