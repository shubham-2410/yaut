import express from "express";
import { createTransaction, getTransactions, getTransactionById } from "../controllers/transaction.controller.js";
import { transactionSchema } from "../validators/transaction.validator.js";
import { validate } from "../middleware/validate.js";
import { authMiddleware } from "../middleware/auth.js";
import { upload, uploadToCloudinary } from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  upload.single("paymentProof"),
  uploadToCloudinary("yaut/payment"),  // ✅ Payment Proof Folder
  validate(transactionSchema),
  createTransaction
);
router.get("/", authMiddleware, getTransactions);
router.get("/:id", authMiddleware, getTransactionById);

export default router;
