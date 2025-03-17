import "dotenv/config.js";
import "../../config/database.js";
import Store from "../Store.js";

let stores = [
    { name: "Tech Haven", address: "123 Main St, NY", phone: 1234567890, email: "contact@techhaven.com", openingHours: "9:00 AM - 9:00 PM", isOpen: true },
    { name: "Grocery World", address: "456 Market St, CA", phone: 9876543210, email: "info@groceryworld.com", openingHours: "7:00 AM - 10:00 PM", isOpen: true },
    { name: "Fashion Hub", address: "789 Style Ave, TX", phone: 1122334455, email: "support@fashionhub.com", openingHours: "10:00 AM - 8:00 PM", isOpen: false },
    { name: "Book Paradise", address: "321 Library Rd, FL", phone: 6677889900, email: "hello@bookparadise.com", openingHours: "8:00 AM - 6:00 PM", isOpen: true },
    { name: "Home Essentials", address: "159 Home St, WA", phone: 5544332211, email: "sales@homeessentials.com", openingHours: "9:00 AM - 7:00 PM", isOpen: false }
];

Store.insertMany(stores) .then(() => console.log("Stores inserted!"));
