import { Router } from 'express';
import authRoutes from './authRoutes.js';
import hospitalRoutes from './hospitalRoutes.js';
import patientRoutes from './patientRoutes.js';
import referralRoutes from './referralRoutes.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'RMNCHA API' });
});

router.use('/auth', authRoutes);
router.use('/hospitals', hospitalRoutes);
router.use('/patients', patientRoutes);
router.use('/referrals', referralRoutes);

export default router;

