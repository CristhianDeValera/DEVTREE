import mongoose from "mongoose";
import colors from 'colors'; // Importar la librería colors

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URL)
        const url = `${connection.host}:${connection.port}`;
        console.log(colors.cyan.bold(`MongoDB Conectado en ${url}`));
    } catch (error) {
        console.error(colors.bgRed.white.bold(`Error al conectar a la base de datos: ${error.message}`));
        process.exit(1); // Terminar el proceso si no se puede conectar
    }
}

// type Product ={
//     id:number;
//     price:number;
//     name:string;
// }

// type FullProduct = Product & {
//     image:string;
// }


// interface Products{
//     id:number;
//     price:number;
//     name:string; 
// }

// interface FullProducts extends Products{
//     image:string;
// }

// // Si solo se quiere usar uncampo de Product
// interface ProductID {
//     id:Product['id'];
// }
// let product: ProductID = {
//     id: 1
// }
// // ---->

// type ProductIDS = Pick<Product, 'id'>;
// let productS: ProductIDS = {
//     id: 1
// }

