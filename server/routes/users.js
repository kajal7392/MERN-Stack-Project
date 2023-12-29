import  express  from 'express';

import { signup, login } from '../controllers/auth.js';
// import { signup } from 'jsonwebtoken';
// import { login } from 'jsonwebtoken';


const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)

export default router
