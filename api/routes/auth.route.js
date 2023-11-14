import express from 'express';
import { SignUp, LogIn, LogOut } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', SignUp )
router.post('/login', SignUp )
router.post('/logout', SignUp )

export default router;