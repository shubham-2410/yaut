import express from "express";
import { createEmployee, loginEmployee, getEmployees } from "../controllers/employee.controller.js";
import { employeeSchema } from "../validators/employee.validator.js";
import { validate } from "../middleware/validate.js";
import { authMiddleware, onlyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", loginEmployee);
router.post("/", authMiddleware, onlyAdmin, validate(employeeSchema), createEmployee);
router.get("/", authMiddleware, onlyAdmin, getEmployees);

export default router;
