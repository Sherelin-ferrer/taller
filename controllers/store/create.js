
import Store from "../../models/Store.js";

let create = async(req,res,next) =>{
    try{
        let infoStore =  req.body
    let createStore = await Store.create(infoStore)
   return res.status(201).json({
    response: createStore
   })

    }catch (error){
        next (error)

    }
}
export default create