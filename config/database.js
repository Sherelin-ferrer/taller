import mongoose from "mongoose";
import "dotenv/config.js" 


let url = process.env.URL_MONGO
console.log(url)

mongoose.connect(url)
.then( () => console.log ("data base connected"))
.catch((error => console.log(error)))
