import Product from "../../models/Product.js"; 

const createManyProduct = async (req, res, next) => {
    try {
        const products = req.body; // Recibe un array de productos desde el body
        
        // Validar que products sea un array
        if (!Array.isArray(products)) {
            return res.status(400).json({ 
                message: "El cuerpo de la solicitud debe ser un array de productos" 
            });
        }
        
        const newProducts = await Product.insertMany(products); 

        res.status(201).json({
            message: "Productos creados con éxito",
            data: newProducts
        });
    } catch (error) {
    next(error)
    }
};

export default createManyProduct;