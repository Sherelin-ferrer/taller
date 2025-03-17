import Product from "../../models/Product.js";

// Obtener todos los productos
const AllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        next (error)
    }
};

// Obtener productos por tipo
const ProductByType = async (req, res) => {
    try {
        const products = await Product.find({ type: req.params.type });
        products.length ? res.status(200).json(products) : res.status(404).json({ message: "No products found" });
    } catch (error) {
        next (error)
    }
};

// Obtener productos por marca
const ProductByBrand = async (req, res) => {
    try {
        const products = await Product.find({ brand: req.params.brand });
        products.length ? res.status(200).json(products) : res.status(404).json({ message: "No products found" });
    } catch (error) {
        next (error)
    }
};

export { AllProducts, ProductByType, ProductByBrand };
