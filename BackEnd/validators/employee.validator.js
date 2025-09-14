import { z } from 'zod';

export const employeeSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  type: z.enum(["Admin", "BackDesk", "Onsite"]),
  status: z.enum(["Active", "Inactive"]),
});
