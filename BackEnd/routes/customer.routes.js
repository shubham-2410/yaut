import express from "express";
import { createCustomer, getCustomers, getCustomerById } from "../controllers/customer.controller.js";
import { customerSchema } from "../validators/customer.validator.js";
import { validate } from "../middleware/validate.js";
import { upload, uploadToCloudinary } from "../middleware/upload.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  upload.single("govtIdImage"),
  uploadToCloudinary("yaut/govtProof"),  // ✅ Govt Proof Folder
  validate(customerSchema),
  createCustomer
);
router.get("/", authMiddleware, getCustomers);
router.get("/:id", authMiddleware, getCustomerById);

export default router;
