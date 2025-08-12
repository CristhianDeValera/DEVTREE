
import {Router} from 'express';
import { createAccount } from './handlers';

const router = Router();

// autenticación y registro
router.post('/auth/register', createAccount);

export default router; 



/*
mongoose:
name: rootlima
Password: Ypc9AGf33Ve8Z7mv
*/