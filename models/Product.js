import { Schema, model } from "mongoose";

let collection = "products";

let schema = Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        type: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true, default: 0 }, 
        description: { type: String, required: false }, 
        sku: { type: String, required: true, unique: true }, 
        isAvailable: { type: Boolean, default: true } 
    }, 
    { timestamps: true }
);

let Product = model(collection, schema);
export default Product;
