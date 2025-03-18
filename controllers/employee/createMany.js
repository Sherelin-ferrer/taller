import Employee from "../../models/Employee.js"; 

const createManyEmployees = async (req, res, next) => {
    try {
        const employees = req.body; // Recibe un array de empleados desde el body
        const newEmployees = await Employee.insertMany(employees); 

        res.status(201).json({
            message: "Empleados creados con éxito",
            data: newEmployees
        });
    } catch (error) {
        next (error)
    }
};

export {createManyEmployees}
