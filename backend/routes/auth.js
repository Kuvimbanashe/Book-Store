import express from 'express';
import { signupUser,loginUser } from '../controllers/authController.js';

const router = express.Router();
//import { signupUser, loginUser } from '../controllers/authController';

router.post('/signup', signupUser);
router.post('/login', loginUser);

export default router  