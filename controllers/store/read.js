import Store from "./../Models/Store.js";

let allStores = async (req, res, next) => {
    try {
        let all = await Store.find();
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

export default allStores;
