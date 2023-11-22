import express from 'express';
import { SignUp, LogIn, LogOut, Google } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', SignUp )
router.post('/signin', LogIn )
router.post('/google', Google )
router.post('/logout', LogOut )

export default router;