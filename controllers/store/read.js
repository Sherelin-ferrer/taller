import Store from "../../models/Store.js";

//  Obtener todas las tiendas
const AllStores = async (req, res) => {
    try {
        const stores = await Store.find();
        res.status(200).json(stores);
    } catch (error) {
        res.status(500).json( error);
    }
};

//  Obtener una tienda por dirección
const StoreByAddress = async (req, res) => {
    try {
        const store = await Store.findOne({ address: req.params.address });
        store ? res.status(200).json(store) : res.status(404).json({ message: "Store not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Obtener una tienda por nombre
const StoreByName = async (req, res) => {
    try {
        const store = await Store.findOne({ name: req.params.name });
        store ? res.status(200).json(store) : res.status(404).json({ message: "Store not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { AllStores, StoreByAddress, StoreByName };
