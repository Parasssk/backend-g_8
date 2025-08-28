import { Router } from 'express';
import { createReferral, listReferrals, getReferralById, updateReferral, deleteReferral } from '../controllers/referralController.js';
import { validate } from '../middlewares/validate.js';
import { createReferralSchema, updateReferralSchema, getByIdSchema } from '../validators/referralSchemas.js';
import { requireAuth, requireRole } from '../middlewares/auth.js';

const router = Router();

router.get('/', listReferrals);
router.get('/:id', validate(getByIdSchema), getReferralById);

router.post('/', requireAuth, requireRole('ADMIN', 'HEALTH_WORKER'), validate(createReferralSchema), createReferral);
router.put('/:id', requireAuth, requireRole('ADMIN', 'HOSPITAL'), validate(updateReferralSchema), updateReferral);
router.delete('/:id', requireAuth, requireRole('ADMIN'), validate(getByIdSchema), deleteReferral);

export default router;

