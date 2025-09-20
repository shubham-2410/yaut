// src/validators/transaction.validator.js
import { z } from "zod";

export const transactionSchema = z.object({
  bookingId: z.string({
    required_error: "Booking ID is required",
    invalid_type_error: "Booking ID must be a valid string"
  }).regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId"),
  type: z.enum(["advance", "settlement"], {
    required_error: "Transaction type is required",
    invalid_type_error: "Transaction type must be either 'Advance' or 'Settlement'"
  }),
  paymentProof: z.string({
    required_error: "Payment proof URL is required",
    invalid_type_error: "Payment proof must be a string"
  }).url("Payment proof must be a valid URL"),
  employeeId: z.string({
    required_error: "Employee ID is required",
    invalid_type_error: "Employee ID must be a valid string"
  }).regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId"),
  amount: z.number({
    required_error: "Amount is required",
    invalid_type_error: "Amount must be a number"
  }).min(0, "Amount cannot be negative"),
  date: z.string().optional() // can parse date string, will default in schema
});

