import { Router } from 'express';
import { login, register, resetPassword, forgotPassword, verifyEmail } from '../controllers/auth';
import { validateRequest } from '../middleware/validateRequest';
import { loginSchema, registerSchema, resetPasswordSchema, forgotPasswordSchema } from '../types/auth';

const router = Router();

router.post('/register', validateRequest(registerSchema), register);
router.post('/login', validateRequest(loginSchema), login);
router.post('/forgot-password', validateRequest(forgotPasswordSchema), forgotPassword);
router.post('/reset-password', validateRequest(resetPasswordSchema), resetPassword);
router.get('/verify/:token', verifyEmail);

export const authRouter = router; 