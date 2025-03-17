import "dotenv/config.js";
import "../../config/database.js";
import Product from "../Product.js";

let products = [];

const brands = ["TechCorp", "MobileOne", "Sporty", "ComfySit", "BrewMaster"];
const types = ["Electronics", "Appliances", "Footwear", "Furniture", "Clothing"];

for (let i = 1; i <= 100; i++) {
    products.push({
        name: `Product ${i}`,
        brand: brands[i % brands.length],
        type: types[i % types.length],
        price: Math.floor(Math.random() * 500) + 10, // Precio entre 10 y 500
        stock: Math.floor(Math.random() * 100) + 1, // Stock entre 1 y 100
        description: `Description of product ${i}`,
        sku: `SKU-${i}`,
        isAvailable: Math.random() < 0.8 // 80% de probabilidad de estar disponible
    });
}

Product.insertMany(products).then(() => console.log("Products inserted!"));
