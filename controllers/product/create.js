import Product from "../../models/Product.js";

let createProduct = async (req, res) => {
    try {
        let productInfo = req.body;
        let newProduct = await Product.create(productInfo);
        return res.status(201).json({
            message: "Producto creado con éxito",
            response: newProduct
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear el producto",
            error: error.message
        });
    }
};
export default createProduct