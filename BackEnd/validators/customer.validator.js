import { z } from 'zod';

export const customerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  contact: z.string().regex(/^[6-9]\d{9}$/, "Must be a valid 10-digit Indian number"),
  alternateContact: z.string().regex(/^[6-9]\d{9}$/, "Must be 10-digit number").optional(),
  email: z.string().email("Invalid email"),
  bookingId: z.string().optional(), // You might skip this on create
  govtIdImage: z.string().url("Invalid Govt ID image URL"),
  govIdNo: z.string().regex(/^[A-Za-z0-9]+$/, "Govt ID must be alphanumeric")
});
