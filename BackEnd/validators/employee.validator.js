import { z } from 'zod';

export const employeeSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  name: z.string().min(1, "Name is required"),
  contact: z.string().regex(/^[6-9]\d{9}$/, "Must be a valid 10-digit Indian number"),
  alternateContact: z.string().regex(/^[6-9]\d{9}$/, "Must be 10-digit number").optional(),
  email: z.string().email("Invalid email"),
  type: z.enum(["Admin", "BackDesk", "Onsite"]),
  status: z.enum(["Active", "Inactive"]),
});
