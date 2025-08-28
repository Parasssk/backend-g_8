import { Router } from 'express';
import { createPatient, listPatients, getPatientById, updatePatient, deletePatient } from '../controllers/patientController.js';
import { validate } from '../middlewares/validate.js';
import { createPatientSchema, updatePatientSchema, getByIdSchema } from '../validators/patientSchemas.js';
import { requireAuth, requireRole } from '../middlewares/auth.js';

const router = Router();

router.get('/', listPatients);
router.get('/:id', validate(getByIdSchema), getPatientById);

router.post('/', requireAuth, requireRole('ADMIN', 'HEALTH_WORKER'), validate(createPatientSchema), createPatient);
router.put('/:id', requireAuth, requireRole('ADMIN', 'HEALTH_WORKER'), validate(updatePatientSchema), updatePatient);
router.delete('/:id', requireAuth, requireRole('ADMIN'), validate(getByIdSchema), deletePatient);

export default router;

