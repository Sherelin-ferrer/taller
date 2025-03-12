import "dotenv/config.js";
import "../../config/database.js";
import Employee from "../Employee.js";

let employees = [
    { name: "John Smith", position: "Manager", salary: 5000, email: "john.smith@company.com", hireDate: "2022-03-15", isActive: true },
    { name: "Emma Johnson", position: "Cashier", salary: 2500, email: "emma.johnson@company.com", hireDate: "2023-07-20", isActive: true },
    { name: "Michael Brown", position: "Sales Representative", salary: 3000, email: "michael.brown@company.com", hireDate: "2021-05-10", isActive: false },
    { name: "Sophia Martinez", position: "Warehouse Worker", salary: 2800, email: "sophia.martinez@company.com", hireDate: "2020-11-05", isActive: true },
    { name: "Daniel Wilson", position: "Technician", salary: 3500, email: "daniel.wilson@company.com", hireDate: "2019-09-12", isActive: true },
    { name: "Olivia Taylor", position: "Sales Associate", salary: 2700, email: "olivia.taylor@company.com", hireDate: "2021-06-22", isActive: true },
    { name: "William Anderson", position: "Security Guard", salary: 2400, email: "william.anderson@company.com", hireDate: "2020-08-30", isActive: false },
    { name: "Isabella Thomas", position: "HR Specialist", salary: 4500, email: "isabella.thomas@company.com", hireDate: "2022-01-10", isActive: true },
    { name: "James White", position: "IT Support", salary: 3200, email: "james.white@company.com", hireDate: "2018-12-05", isActive: true },
    { name: "Mia Harris", position: "Receptionist", salary: 2600, email: "mia.harris@company.com", hireDate: "2019-04-14", isActive: true },
    { name: "Alexander Martin", position: "Delivery Driver", salary: 2900, email: "alexander.martin@company.com", hireDate: "2020-10-08", isActive: true },
    { name: "Charlotte Thompson", position: "Marketing Manager", salary: 6000, email: "charlotte.thompson@company.com", hireDate: "2017-07-21", isActive: false },
    { name: "Benjamin Garcia", position: "Customer Support", salary: 3100, email: "benjamin.garcia@company.com", hireDate: "2019-05-25", isActive: true },
    { name: "Amelia Robinson", position: "Cleaning Staff", salary: 2300, email: "amelia.robinson@company.com", hireDate: "2021-11-13", isActive: true },
    { name: "Ethan Walker", position: "Project Manager", salary: 5500, email: "ethan.walker@company.com", hireDate: "2016-03-02", isActive: true }
];

Employee.insertMany(employees).then(() => console.log("Employees inserted!"));
