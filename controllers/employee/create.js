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
       next (error)
    }
};

export default createEmployee ;
