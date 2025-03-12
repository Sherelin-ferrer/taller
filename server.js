import  express  from "express";
import "dotenv/config.js"
import "./config/database.js"
import routerStores from "./router/storeRouter.js"; 

const server = express()

const PORT = process.env.PORT

const ready = () => console.log("port ready:"+PORT)

server.use("/store", routerStores);

 server.listen(PORT,ready)
