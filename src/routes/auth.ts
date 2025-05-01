import { Router } from 'express';
import { login, register, resetPassword, forgotPassword, verifyEmail, logout } from '../controllers/auth';
import { validateRequest } from '../middleware/validateRequest';
import { loginSchema, registerSchema, resetPasswordSchema, forgotPasswordSchema } from '../types/auth';
import { authenticate } from '../middleware/auth';

const router = Router();

router.post('/register', validateRequest(registerSchema), register);
router.post('/login', validateRequest(loginSchema), login);
router.post('/forgot-password', validateRequest(forgotPasswordSchema), forgotPassword);
router.post('/reset-password', validateRequest(resetPasswordSchema), resetPassword);
router.get('/verify/:token', verifyEmail);
router.post('/logout', authenticate, logout);

export const authRouter = router; 