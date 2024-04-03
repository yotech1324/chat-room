import express from 'express';
import { saveMessage,getMessages } from '../controllers/messages.js';
const router = express.Router();

router.post('/message', saveMessage)
router.get('/messages', getMessages)


export default router;
