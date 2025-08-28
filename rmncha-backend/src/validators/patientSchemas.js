import { z } from 'zod';

export const createPatientSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    age: z.number().int().nonnegative().optional(),
    phone: z.string().optional(),
    village: z.string().optional(),
    pregnancyStage: z.string().optional(),
    dueDate: z.string().datetime().optional(),
    hospital: z.string().optional(),
    assignedWorker: z.string().optional(),
  }),
});

export const updatePatientSchema = z.object({
  params: z.object({ id: z.string().min(1) }),
  body: createPatientSchema.shape.body.partial(),
});

export const getByIdSchema = z.object({
  params: z.object({ id: z.string().min(1) }),
});

