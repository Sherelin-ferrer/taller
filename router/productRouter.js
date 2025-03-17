import { Router } from "express";
import { AllProducts, ProductByType, ProductByBrand } from "../controllers/product/read.js";
import createProduct from "../controllers/product/create.js";
import createManyProduct from "../controllers/product/createMany.js";

const routerProducts = Router();

//  Obtener todos los productos
routerProducts.get("/allProducts", AllProducts);

// Obtener productos por tipo
routerProducts.get("/productByType/:type", ProductByType);

//  Obtener productos por marca
routerProducts.get("/productByBrand/:brand", ProductByBrand);

routerProducts.post("/productCreate", createProduct)

// Crear múltiples tiendas con insertMany
routerProducts.post("/productCreateMany", createManyProduct);

export default routerProducts;
