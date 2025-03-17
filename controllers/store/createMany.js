import Store from "../../models/Store.js"; 

const createManyStores = async (req, res) => {
    try {
        const stores = req.body; // Recibe un array de tiendas desde el body
        const newStores = await Store.insertMany(stores); // Inserta en la DB

        res.status(201).json({
            message: "Tiendas creadas con éxito",
            data: newStores
        });
    } catch (error) {
        res.status(500).json({ message: "Error al crear tiendas", error });
    }
};

export default createManyStores;
