import { Router } from "express";
import { getAllStores, getStoreByAddress, getStoreByName } from "../controllers/store/read.js";

const routerStores = Router();

//  Obtener todas las tiendas
routerStores.get("/allStores", getAllStores);

//  Obtener una tienda por dirección
routerStores.get("/storeByAddress/:address", getStoreByAddress);

//  Obtener una tienda por nombre
routerStores.get("/storeByName/:name", getStoreByName);

export default routerStores;
