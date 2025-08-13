
import colors from 'colors'; // Importar la librería colors
import server from './server';



const port = process.env.PORT || 4000; // Usar variable de entorno o puerto 4000 por defecto

server.listen(port, () => {
    console.log(colors.bgBlue.magenta.italic(`Servidor corriendo en el puerto: ${port}`));
})


