import { Schema, model } from "mongoose";

let collection = "Stores";

let schema = Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: Number, required: true },
        email: { type: String, required: true, unique: true }, // New property
        openingHours: { type: String, required: true }, // New property
        isOpen: { type: Boolean, default: true } 
    }, 
    { timestamps: true }
);

let Store = model(collection, schema);
export default Store;
