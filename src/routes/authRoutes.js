import { authenticate } from '../middleware/authMiddleware.js';
import { signup, login, token, logout,profile } from '../controllers/authController.js';
import express from 'express';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/token', token);
router.get('/profile', authenticate, profile);
router.post('/logout', logout);

export default router;

