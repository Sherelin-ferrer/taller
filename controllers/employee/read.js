import Employee from "../../models/Employee.js";

// Obtener todos los empleados
const AllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener empleados por cargo
const EmployeeByPosition = async (req, res) => {
    try {
        const employees = await Employee.find({ position: req.params.position });
        employees.length ? res.status(200).json(employees) : res.status(404).json({ message: "No employees found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Empleados por ID



const EmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findById(id);

        employee
            ? res.status(200).json(employee)
            : res.status(404).json({ message: "Employee not found" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { AllEmployees, EmployeeByPosition, EmployeeById };


