import express from "express";
import { createEmployee, loginEmployee, getEmployees } from "../controllers/employee.controller.js";
import { employeeSchema } from "../validators/employee.validator.js";
import { validate } from "../middleware/validate.js";
import { authMiddleware, onlyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/", authMiddleware, onlyAdmin, validate(employeeSchema), createEmployee);
router.post("/login", loginEmployee);
router.get("/", authMiddleware, onlyAdmin, getEmployees);

export default router;
