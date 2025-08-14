
import { Router } from 'express';
import { createAccount } from './handlers';
import { body } from 'express-validator';

const router = Router();

// autenticación y registro
router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede estar vacío'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede estar vacío'),
    body('email')
        .isEmail()
        .withMessage('El email no es válido'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('El password debe tener al menos 8 caracteres'),
    createAccount);

router.post('/auth/login',
)


export default router;

/*
mongoose:
name: rootlima
Password: Ypc9AGf33Ve8Z7mv
*/