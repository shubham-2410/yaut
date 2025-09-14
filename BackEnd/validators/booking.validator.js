import { z } from 'zod';

export const bookingSchema = z.object({
  customerId: z.string().min(1, "Customer ID is required"),
  employeeId: z.string().min(1, "Employee ID is required"),
  transactionIds: z.array(z.string()).optional(), // array of ObjectIds
  yautId: z.number().int("Yaut ID must be an integer"),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Date must be a valid ISO date string"
  }),
  time: z.string().min(1, "Time is required"), // Could use regex if fixed format (HH:mm)
  startTime: z.string().min(1, "Start Time is required"),
  quotedAmount: z.number().min(0, "Quoted amount must be >= 0"),
  advanceAmount: z.number().min(0, "Advance amount must be >= 0"),
  pendingAmount: z.number().min(0, "PendingAmount amount must be >= 0"),
  status: z.enum(["Initiated", "InProgress", "Success", "Terminated"])
});
