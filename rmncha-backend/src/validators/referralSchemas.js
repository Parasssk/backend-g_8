import { z } from 'zod';
import { REFERRAL_STATUS } from '../models/Referral.js';

export const createReferralSchema = z.object({
  body: z.object({
    patient: z.string().min(1),
    toHospital: z.string().min(1),
    reason: z.string().min(1),
    notes: z.string().optional(),
  }),
});

export const updateReferralSchema = z.object({
  params: z.object({ id: z.string().min(1) }),
  body: z.object({
    status: z.enum(REFERRAL_STATUS).optional(),
    notes: z.string().optional(),
  }),
});

export const getByIdSchema = z.object({
  params: z.object({ id: z.string().min(1) }),
});

