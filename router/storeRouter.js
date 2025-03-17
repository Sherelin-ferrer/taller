import { Router } from "express";
import { AllStores, StoreByAddress, StoreByName } from "../controllers/store/read.js";
import create from "../controllers/store/create.js";
import createManyStores from "../controllers/store/createMany.js";

const routerStores = Router();

//  Obtener todas las tiendas
routerStores.get("/allStores", AllStores);

//  Obtener una tienda por dirección
routerStores.get("/storeByAddress/:address", StoreByAddress);

//  Obtener una tienda por nombre
routerStores.get("/storeByName/:name", StoreByName);
// crear una tienda
routerStores.post("/storeCreate", create);

// Crear múltiples tiendas con insertMany
routerStores.post("/storeCreateMany", createManyStores);

export default routerStores;
