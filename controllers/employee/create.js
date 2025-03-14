import Employee from "../../models/Employee.js";

let createEmployee = async (req, res) => {
    try {
        let employeeInfo = req.body;
        let newEmployee = await Employee.create(employeeInfo);
        return res.status(201).json({
            message: "Empleado creado con éxito",
            response: newEmployee
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear el empleado",
            error: error.message
        });
    }
};

export default createEmployee ;
