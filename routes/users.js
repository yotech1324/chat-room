import express from 'express';

import {login , signup ,allUsers} from '../controllers/auth.js'
const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.get('/allUsers', allUsers)

export default router;
