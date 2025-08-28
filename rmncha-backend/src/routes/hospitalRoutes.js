import { Router } from 'express';
import { createHospital, listHospitals, getHospitalById, updateHospital, deleteHospital } from '../controllers/hospitalController.js';
import { validate } from '../middlewares/validate.js';
import { createHospitalSchema, updateHospitalSchema, getByIdSchema } from '../validators/hospitalSchemas.js';
import { requireAuth, requireRole } from '../middlewares/auth.js';

const router = Router();

router.get('/', listHospitals);
router.get('/:id', validate(getByIdSchema), getHospitalById);

router.post('/', requireAuth, requireRole('ADMIN', 'HOSPITAL'), validate(createHospitalSchema), createHospital);
router.put('/:id', requireAuth, requireRole('ADMIN', 'HOSPITAL'), validate(updateHospitalSchema), updateHospital);
router.delete('/:id', requireAuth, requireRole('ADMIN'), validate(getByIdSchema), deleteHospital);

export default router;

