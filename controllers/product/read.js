import Product from "./../Models/Product.js";

let allProducts = async (req, res, next) => {
    try {
        let all = await Product.find();
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

export default allProducts;
