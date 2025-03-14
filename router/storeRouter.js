import { Router } from "express";
import { AllStores, StoreByAddress, StoreByName } from "../controllers/store/read.js";
import create from "../controllers/store/create.js";


const routerStores = Router();

//  Obtener todas las tiendas
routerStores.get("/allStores", AllStores);

//  Obtener una tienda por dirección
routerStores.get("/storeByAddress/:address", StoreByAddress);

//  Obtener una tienda por nombre
routerStores.get("/storeByName/:name", StoreByName);

routerStores.post("/storeCreate", create)

export default routerStores;
