import { z } from 'zod';

export const createHospitalSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    address: z.string().optional(),
    district: z.string().optional(),
    state: z.string().optional(),
    pincode: z.string().optional(),
    contactPhone: z.string().optional(),
    location: z.object({ lat: z.number(), lng: z.number() }).optional(),
  }),
});

export const updateHospitalSchema = z.object({
  params: z.object({ id: z.string().min(1) }),
  body: createHospitalSchema.shape.body.partial(),
});

export const getByIdSchema = z.object({
  params: z.object({ id: z.string().min(1) }),
});

