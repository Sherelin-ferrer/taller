// Middleware de autenticación para rutas específicas

const authentication = (req, res, next) => {
    let protectedRoutes = ["/store", "/product", "/employee"];
    if (protectedRoutes.includes(req.path)) {
        let authHeader = req.headers.authorization;
        if (!authHeader || authHeader !== "token de autenticación") {
            return res.status(403).json({ message: "Acceso denegado" });
        }
    }
    next();
};
 export default authentication