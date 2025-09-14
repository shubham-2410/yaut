import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { EmployeeModel } from "../models/employee.model.js";

export const createEmployee = async (req, res) => {
  console.log("In")
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const employee = await EmployeeModel.create({
      ...req.body,
      password: hashedPassword
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginEmployee = async (req, res) => {
  try {
    const { username, password } = req.body;
    const employee = await EmployeeModel.findOne({ username });

    if (!employee) return res.status(404).json({ error: "Employee not found" });

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: employee._id, type: employee.type },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token, employee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEmployees = async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
