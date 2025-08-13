import type {Request, Response} from 'express'
import {validationResult} from 'express-validator';
import slug from 'slug';
import User from "../models/User";
import { hashPassword } from '../utils/auth';


export const createAccount = async(req: Request, res: Response) => {


//Manejar errores de validación
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    return





    const { email, password } = req.body;

    const useExists = await User.findOne({ email });
    console.log(useExists);
    if (useExists) {
        const error = new Error("El usuario con ese email ya esta registrado");
        //return res.status(409).json("El usuario ya esta registrado");
        return res.status(409).json({ error: error.message });
    }

    const handle = slug(req.body.handle, '');
    const handleExists = await User.findOne({ handle });
    if (handleExists) {
        const error = new Error("Nombre de usuario no disponible");
        return res.status(409).json({ error: error.message });
    }


    const user = new User(req.body);
    user.password = await hashPassword(password);
    user.handle = handle;
    await user.save();
    res.status(201).json({ message: "Usuario registrado correctamente" });
}
