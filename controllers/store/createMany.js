import Store from "../../models/Store.js"; 

const createManyStores = async (req, res, next) => {
    try {
        const stores = req.body; // Recibe un array de tiendas desde el body
        const newStores = await Store.insertMany(stores); 

        res.status(201).json({
            message: "Tiendas creadas con éxito",
            data: newStores
        });
    } catch (error) {
  next(error)
    }
};

export default createManyStores;
