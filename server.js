import  express  from "express";
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan"
import routerStores from "./router/storeRouter.js"; 
import routerProducts from "./router/productRouter.js";
import routerEmployees from "./router/employeeRouter.js";
import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";
import error_400 from "./middlewares/error_400.js";
import error_404 from "./middlewares/error_404.js";
import authentication from "./middlewares/authentication.js";

const server = express()

const PORT = process.env.PORT

const ready = () => console.log("port ready:"+PORT)

// activar datos complejos en la url
server.use(express.urlencoded({extended:true})) 
// manejar formato json
server.use(express.json()) 
// se encarga de la seguridad  (npm install cors)
server.use(cors())
// libreria orden de registros (npm install morgan)
server.use(morgan('dev'))

server.use(authentication)

//Enrutador
server.use("/store", routerStores);
server.use("/product", routerProducts);
server.use("/employee", routerEmployees);
server.use(not_found_handler) //middlewares para manejar las rutas no encontradas / de aplicacion
server.use(error_400)
server.use(error_404)
server.use(error_handler) // middlewares de error general 500


 server.listen(PORT,ready)
