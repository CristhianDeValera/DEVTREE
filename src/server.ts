
// const express = require('express'); Sintaxi antigua commonjs
import express from 'express'; // Sintaxis moderna ES6
import 'dotenv/config'; // Importar las variables de entorno desde el archivo .env
import router from './router'; // Importar el router
import { connectDB } from './config/db';

const app = express();
connectDB(); // Conectar a la base de datos

app.use(express.json()); // Leer datos JSON en las peticiones

app.use('/', router); // Usar el router

export default app; // Exportar la aplicación para usarla en otros módulos