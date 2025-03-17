const error_404 = (error, req, res, next) => {
    if (error.message == "bad request"){
     return res.status(404).json(
         {
             succes: false,
             message: "error 404",
             response: error
         }
     )
 }
 next(error)
 
    }
 
 export default error_404
 