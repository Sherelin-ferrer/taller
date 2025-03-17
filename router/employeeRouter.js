import { Router } from "express";
import { AllEmployees, EmployeeByPosition, EmployeeById } from "../controllers/employee/read.js";
import  createEmployee  from "../controllers/employee/create.js";
import {createManyEmployees} from "../controllers/employee/createMany.js";


const routerEmployees = Router();

// Obtener todos los empleados
routerEmployees.get("/allEmployees", AllEmployees);

//  Obtener empleados por cargo
routerEmployees.get("/employeeByPosition/:position", EmployeeByPosition);

// empleados por ID
routerEmployees.get("/:id", EmployeeById);

routerEmployees.post("/employeeCreate", createEmployee);

// Crear múltiples empleados con insertMany
routerEmployees.post("/employeeCreateMany", createManyEmployees);


export default routerEmployees;
